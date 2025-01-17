import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import { Button, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";

const nameOptions = [
  { value: '01', label: 'Autumn' },
  { value: '02', label: 'Summer' },
  { value: '03', label: 'Fall' },
]
const CreateAcademicSemester = () => {
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    const codeNumber = data.name?.split('')[1]
    const name = nameOptions[codeNumber-1].label;
    const semesterData ={
      name,
      code: data.code,
    }
    console.log(semesterData);
    
  }
  const baseStyle: React.CSSProperties ={
    width: '40%',
    margin: 'auto',
  }
  return (
    <Flex vertical style={baseStyle} justify="center" >
      <PHForm onSubmit={onSubmit}>
        <PHSelect label="Select Semester Name" name="code" placeholder="Semester Name" options={nameOptions}/>
        <Button htmlType="submit">Submit</Button>
      </PHForm>
    </Flex>
  )
}
export default CreateAcademicSemester
