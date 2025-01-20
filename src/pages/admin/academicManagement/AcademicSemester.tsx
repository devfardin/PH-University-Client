import { Table, TableColumnsType, TableProps } from "antd";
import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";
import { monthsObjectTable } from "../../../constants/global";


const AcademicSemester = () => {
  const { data: academicSemesterData } = useGetAllAcademicSemestersQuery(undefined);
  const tableData = academicSemesterData?.data?.map((
    { _id, name, code, startMonth, endMonth, year }) => ({
    _id,
    name,
    code,
    startMonth,
    endMonth,
    year
  })
  );

  interface DataType {
    key: React.Key;
    name: string;
    code: number;
    startMonth: string;
    endMonth: string;
  }

  const columns: TableColumnsType<DataType> = [
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
      // defaultSortOrder: 'descend',
      sorter: (a, b) => a.code - b.code,
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
  const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <div>
      <h1 style={{ marginBottom: '30px' }}>All Academic Semester</h1>
      <Table<DataType>
        columns={columns}
        dataSource={tableData}
        onChange={onChange}
        showSorterTooltip={{ target: 'sorter-icon' }}
      />
    </div>
  )
}
export default AcademicSemester
