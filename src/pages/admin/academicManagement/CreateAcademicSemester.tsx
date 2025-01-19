import { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm"
import { Button, Flex } from "antd";
import PHSelect from "../../../components/form/PHSelect";
import { RightOutlined } from '@ant-design/icons';
import PHDatePicker from "../../../components/form/PHDatePicker";
const nameOptions = [
  { value: '01', label: 'Autumn' },
  { value: '02', label: 'Summer' },
  { value: '03', label: 'Fall' },
]
const CreateAcademicSemester = () => {
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    const codeNumber = data.code?.split('')[1];
    const name = nameOptions[codeNumber-1]?.label;

    const semesterData ={
      name,
      code: data.code,
      year: data.year?.$y,
      startMonth: data.startMonth?.$M+1,
      endMonth: data.endMonth?.$M+1,

    }
    console.log(semesterData);
    
  }
  const baseStyle: React.CSSProperties ={
    width: '40%',
    margin: 'auto',
  }
  return (
    <Flex vertical style={baseStyle} justify="center" gap="">
      <PHForm onSubmit={onSubmit}>
        <PHSelect label="Select Semester Name" name="code" placeholder="Semester Name" options={nameOptions}/>

        <PHDatePicker label="Semester Year" name="year" type="year" format="YYYY"/>

        <PHDatePicker label="Semester Start Month" name="startMonth" type="month" format="MMMM"/>
        <PHDatePicker label="Semester End Month" name="endMonth" type="month" format="MMMM"/>

        <Button style={{fontSize: 18, padding:20, borderRadius:5 }} size="large" type="primary" htmlType="submit" icon={<RightOutlined />}>Submit</Button>
        
      </PHForm>
    </Flex>
  )
}
export default CreateAcademicSemester
