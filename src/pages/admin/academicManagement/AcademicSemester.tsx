import React from 'react'
import { useGetAllSemestersQuery } from '../../../redux/features/academicSemester/academicSemesterApi'

const AcademicSemester = () => {
    const {data} = useGetAllSemestersQuery(undefined);
    console.log(data);
    
  return (
    <div>
      <h1>All Academic Semester</h1>
    </div>
  )
}

export default AcademicSemester
