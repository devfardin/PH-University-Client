import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import { Button, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { RightOutlined } from '@ant-design/icons';
import { nameOptions } from "../../../constants/semester";
import { monthsObject } from "../../../constants/global";
import { zodResolver } from '@hookform/resolvers/zod';
import { academicSemesterSchema } from "../../../schemas/academicManagement.schema";
import { useAddAcademicSemestetMutation } from "../../../redux/features/admin/academicManagement.api";
import { toast } from "sonner";
import { TResponse } from "../../../types/global";

const CreateAcademicSemester = () => {
  const [addAcademicSemestet] = useAddAcademicSemestetMutation();

  const onSubmit:SubmitHandler<FieldValues> = async (data) => {
    const toastId = toast.loading('Semester Creating....')
    const codeNumber = data.code?.split('')[1];
    const name = nameOptions[codeNumber-1]?.label;
    const semesterData ={
      name,
      code: data.code as number,
      year: data.year,
      startMonth:data.startMonth,
      endMonth:data.endMonth,
    }
    try {
      console.log(semesterData);
      const result = await addAcademicSemestet(semesterData) as TResponse;

      if(result?.data?.success) {
        toast.success(result?.data?.message, {id: toastId});
      } else {
        toast.error(result?.error?.data?.message, {id: toastId});
      }
    } catch (error) {
      const err = error as { data: { message: string } };
        toast.error(`${err.data.message}`, {id: toastId})
    }
  }
  const baseStyle: React.CSSProperties ={
    width: '40%',
    margin: 'auto',
  }
  const generateYears = () => {
   const currentYear = new Date().getFullYear();
   return Array.from({length: 10}, (_, index) => ({
    value: (currentYear +index).toString(),
    label: (currentYear +index).toString()
  }))

  }

  return (
    <Flex vertical style={baseStyle} justify="center">
      <PHForm 
      onSubmit={onSubmit}
      resolver={zodResolver(academicSemesterSchema)}>

        <PHSelect label="Select Semester Name" name="code" placeholder="Semester Name" options={nameOptions}/>

        <PHSelect label="Select Semester Year" name="year" placeholder="Semester Name" options={generateYears()}/>

        <PHSelect label="Select Semester Start month" name="startMonth" placeholder="Semester Name" options={monthsObject}/>

        <PHSelect label="Select Semester End month" name="endMonth" placeholder="Semester Name" options={monthsObject}/>

    

        <Button style={{fontSize: 18, padding:20, borderRadius:5 }} size="large" type="primary" htmlType="submit" icon={<RightOutlined />}>Submit</Button>
        
      </PHForm>
    </Flex>
  )
}
export default CreateAcademicSemester
