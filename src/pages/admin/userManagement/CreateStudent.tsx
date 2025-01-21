import React from 'react'
import { useGetAllStudentsQuery } from '../../../redux/features/admin/userManagement.api'

const CreateStudent = () => {
  const { data } = useGetAllStudentsQuery(undefined)
  console.log(data);
  
  return (
    <div>
      <h1>Create student</h1>
    </div>
  )
}

export default CreateStudent
