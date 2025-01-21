import { Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import { TStudent } from '../../../types/userManagement';
import Loading from '../../../components/share/Loading';
import DashboardPageTitle from '../../../components/share/DashboardPageTitle';


const AlllStudents = () => {

const {data: allStudentData, isLoading, isFetching } = useGetAllStudentsQuery(undefined);

const dataTable = allStudentData?.data?.map(({_id, name, gender, dateOfBirth,  email, contactNo, emergencyContactNo
 }, index) => ({
    key: _id,
    name: name.firstName + " " + name.lastName,
    gender,
    dateOfBirth,
    email,
    contactNo,
    emergencyContactNo,
    index
})
);

type TTableData = Pick<TStudent, 'name' | 'gender' | 'dateOfBirth' | 'email' | 'emergencyContactNo' | 'key'>;

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
