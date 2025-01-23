import { Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import Loading from '../../../components/share/Loading';
import DashboardPageTitle from '../../../components/share/DashboardPageTitle';


const AlllStudents = () => {

const {data: allStudentData, isLoading, isFetching } = useGetAllStudentsQuery(undefined);


const dataTable = allStudentData?.data?.map(({ name, gender, dateOfBirth,  email, contactNo, emergencyContactNo, id
 }, index) => ({
    key: id,
    name: name.firstName + " " + name.lastName,
    gender,
    dateOfBirth,
    email,
    contactNo,
    emergencyContactNo,
    index,
    id
})
);

  type TTableData = {
    key: string,
    name: string,
    gender: "male" | "female" | "other",
    dateOfBirth: string,
    email: string,
    contactNo: string,
    emergencyContactNo: string,
  }
  const columns: TableColumnsType<TTableData> = [
    {
      title: 'Sr No',
      dataIndex: 'index',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Student id',
      dataIndex: 'id',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        {
            text: 'Male',
            value: 'male'
        },
        {
            text: 'Female',
            value: 'female'
        },
        {
            text: 'Others',
            value: 'others'
        }
      ],
     onFilter: (value, record) => record.gender.indexOf(value as string) == 0
    },
    {
      title: 'Date of birth',
      dataIndex: 'dateOfBirth',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
    },
    {
      title: 'Contact Number',
      dataIndex: 'contactNo',
    },
    {
      title: 'Emergency  Contact',
      dataIndex: 'emergencyContactNo',
    },
  ];
  
  const onChange: TableProps<TTableData>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  if(isLoading) {
    return <Loading></Loading>
  }
  return (
    <div>
        <DashboardPageTitle title='All Students Information' style='left'/>
        <Table<TTableData> 
        bordered  
        loading={isFetching}
        columns={columns} 
        dataSource={dataTable} 
        onChange={onChange} />
    </div>
  )
}

export default AlllStudents
