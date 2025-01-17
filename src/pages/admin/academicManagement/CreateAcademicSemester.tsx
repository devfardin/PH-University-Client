import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import PHInput from "../../../components/form/PHInput";
import { Button, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const CreateAcademicSemester = () => {
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    
  }
  const baseStyle: React.CSSProperties ={
    width: '40%',
    margin: 'auto',
  }
  const options = [
    { value: '1', label: 'Jack' },
    { value: '2', label: 'Lucy' },
    { value: '3', label: 'Tom' },
  ]
  return (
    <Flex vertical style={baseStyle} justify="center">
      <PHForm onSubmit={onSubmit}>
        <PHInput type="text" name="name" label="Academic Semester Name"/>
        <PHSelect label="Select Semester Name" name="semesterName" placeholder="Semester Name" options={options}/>
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Flex>
  )
}
export default CreateAcademicSemester
