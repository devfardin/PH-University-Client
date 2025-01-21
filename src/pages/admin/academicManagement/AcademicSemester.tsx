import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { monthsObjectTable } from "../../../constants/global";
import { TAcademicSemester } from "../../../types/academicManagement";
import { useState } from "react";


const AcademicSemester = () => {
  const [params, setParams] = useState([])
  const { data: academicSemesterData } = useGetAllAcademicSemestersQuery(params)

  const tableData = academicSemesterData?.data?.map((
    { _id, name, code, startMonth, endMonth, year }, index) => ({
    key: _id,
    name,
    code,
    startMonth,
    endMonth,
    year,
    index,
  })
  );

  type TTableData = Pick<TAcademicSemester, 'name' | 'year' | 'startMonth' | 'endMonth' | 'code' | 'key'>

  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Sr No',
      dataIndex: 'index',
    },
    {
      title: 'Semestet Name',
      dataIndex: 'name',
      showSorterTooltip: { target: 'full-header' },
      filters: [
        {
          text: 'Autumn',
          value: 'Autumn',
        },
        {
          text: 'Summer',
          value: 'Summer',
        },
        {
          text: 'Fall',
          value: 'Fall',
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value as string) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Semester Code',
      dataIndex: 'code',
    },
    {
      title: 'Start Month',
      dataIndex: 'startMonth',
      filters: monthsObjectTable,
      onFilter: (value, record) => record.startMonth.indexOf(value as string) === 0,
    },
    {
      title: 'End Month',
      dataIndex: 'endMonth',
      filters: monthsObjectTable,
      onFilter: (value, record) => record.endMonth.indexOf(value as string) === 0,
    },
  ];
  const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    
    if(extra.action === 'filter') {
      const queryParams = [] ;

      filters.name?.forEach((item) => (
        queryParams.push({name: 'name', value: item })
      ))
      setParams(queryParams);
    }
  };
  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>All Academic Semester</h1>
      <Table<TTableData>
        columns={columns}
        dataSource={tableData}
        bordered
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    </div>
  )
}
export default AcademicSemester
