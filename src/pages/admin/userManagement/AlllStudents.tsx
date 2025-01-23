import { Button, Flex, Pagination, Table, TableColumnsType, TableProps } from 'antd';
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api';
import Loading from '../../../components/share/Loading';
import DashboardPageTitle from '../../../components/share/DashboardPageTitle';
import StudentDetailes from './StudentDetailes';
import { useState } from 'react';

const AlllStudents = () => {
  const [page, setPage] = useState(1)
  

const {data: allStudentData, isLoading, isFetching } = useGetAllStudentsQuery([
  {name: 'page', value: page},
  { name: 'sort', value: 'id' }
  
]);

const dataTable = allStudentData?.data?.map(({ name, gender, dateOfBirth,  email, contactNo, emergencyContactNo, id, profileImage
 }, index) => ({
    key: id,
    name: name.firstName + " " + name.lastName,
    gender,
    dateOfBirth,
    email,
    contactNo,
    emergencyContactNo,
    index:index+1,
    id, 
    profileImage
})
);
const metaData = allStudentData?.meta;

   type TTableData = {
    key: string,
    name: string,
    gender: "male" | "female" | "other",
    dateOfBirth: string,
    email: string,
    contactNo: string,
    emergencyContactNo: string
  };

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
    {
      title: 'Action',
      key: 'x',
      render: (student) => {
        return (
          <Flex gap={10}>
            <StudentDetailes student={ student }/>

            <Button>Blocked</Button>
          </Flex>
        )
      }
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
        pagination={false}
        bordered  
        loading={isFetching}
        columns={columns} 
        dataSource={dataTable} 
        onChange={onChange}
        />

        <Pagination onChange={(value)=> setPage(value)} align="center" 
        pageSize={ metaData?.limit } defaultCurrent={page} total={metaData?.total} style={{marginTop: '10px'}} />
    </div>
  )
}

export default AlllStudents
