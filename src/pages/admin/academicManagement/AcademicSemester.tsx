import { useGetAllAcademicSemestersQuery } from "../../../redux/features/admin/academicManagement.api";


const AcademicSemester = () => {
    const { data } = useGetAllAcademicSemestersQuery(undefined);
    console.log(data);
    
  return (
    <div>
      <h1>All Academic Semester {data?.data.length}</h1>
    </div>
  )
}

export default AcademicSemester
