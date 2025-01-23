import { Button, Col, Divider, Flex, Form, Input, Row } from "antd"
import PHForm from "../../../components/form/PHForm"
import DashboardPageTitle from "../../../components/share/DashboardPageTitle"
import PHInput from "../../../components/form/PHInput"
import { Controller, FieldValues, SubmitHandler } from "react-hook-form"
import PHSelect from "../../../components/form/PHSelect"
import PHDatePicker from "../../../components/form/PHDatePicker"
import { bloodGroups, genderOption } from "../../../constants/createStudent"
import { useGetAllAcademicSemestersQuery, useGetAllDepartmentQuery } from "../../../redux/features/admin/academicManagement.api"
import Loading from "../../../components/share/Loading"
import { useAddStudentMutation } from "../../../redux/features/admin/userManagement.api"
import { toast } from "sonner"
import { TError } from "../../../types"

const CreateStudent = () => {
  // query for all academic semester
  const {data: academicSemester, isLoading, isFetching } = useGetAllAcademicSemestersQuery(undefined);
  // query for all department 
  const {data: departmentData, isLoading: departmentLoading} = useGetAllDepartmentQuery(undefined)
  // meution for create student
  const [addStudent] = useAddStudentMutation();
  

  // Create Academic Semester option
  const admisitonSemesterOption = academicSemester?.data?.map((item)=> ({
    value: item?._id,
    label:`${item?.name} ${item?.year}`,
    disabled: isLoading,
  }))
  // create Academic Department option
  const academicDepartment = departmentData?.data?.map((item) => ({
    value: item._id,
    label: item.name,
  }))
  // handle form submition function
  const onSubmit: SubmitHandler<FieldValues> = async(data) => {
    const  toastId = toast.loading('Creating Student')
    const studentData = {
      password: 'password',
      student: data,
    }
  // Create FormData
  const formData = new FormData();
  formData.append('data', JSON.stringify(studentData));
  formData.append('file', data.profileImage)
  
  const result = await addStudent(formData);
  if(result?.error) {
    const errorMessage = (result?.error as TError).data?.message;
     toast.error(errorMessage, {id: toastId})
  } else {
    const success = result.data.message;
    toast.success(success, {id: toastId})
  }
  }
  
  const defaultValues =  {
    name: {
      firstName: "Rima",
      middleName: "Aktar",
      lastName: "Islam",
    },
    gender: "male",
    // dateOfBirth: "14-05-2007",
    email: "rima@gmail.com",
    contactNo: "01641965230",
    emergencyContactNo: "01316049157",
    bloodGroup: "A+",
    presentAddress: "Harinateli, Paiska, Dhanbari",
    permanentAddress: "Dhaka, Bangladesh",
    guardian: {
      fathersName: "Mizan",
      mothersName: "Jobeda",
      phoneNo: "01245754",
    },
    localGuardian: {
      name: "Ridoy",
      relation: "Brother",
      phoneNo: "0177542112",
    },
  //  profileImage: "https://res.cloudinary.com/dng2c2jxv/image/upload/v1737537521/2026010002Rima.jpg"
  };

  if(isFetching) {
    return <Loading></Loading>
  }
  return (
    <Flex vertical>
      <DashboardPageTitle title="Crate New Student" style="left" />
      <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>

        <Divider>Personal Information</Divider>
        <Row gutter={15}>
          <Col span={24} md={{ span: 8 }} lg={{ span: 6 }}>
            <PHInput placeholder="Enter First Name" type="text" name="name.firstName" label="First Name" />
          </Col>
          <Col span={24} md={{ span: 8 }} lg={{ span: 6 }}>
            <PHInput placeholder="Enter Middle Name" type="text" name="name.middleName" label="Middle Name" />
          </Col>
          <Col span={24} md={{ span: 8 }} lg={{ span: 6 }}>
            <PHInput placeholder="Enter Last Name" type="text" name="name.lastName" label="Last Name" />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 6 }}>
            <PHSelect placeholder="Select Gender" name="gender" label="Gender"  options={genderOption}/>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
          <Controller 
          name="profileImage"
          render={({field: { onChange, value, ...field }}) => (
            <Form.Item label="Upload Profile">
              <Input type="file" value={value?.firstName} {...field} size="large"
              onChange={(e) => onChange(e.target.files?.[0])}
              />
            </Form.Item>
          ) }
          />
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHDatePicker format="DD-MM-YYYY" type="date" placeholder="Enter Date of birth" name="dateOfBirth" label="Date Of Birth" />
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect options={bloodGroups} placeholder="Select Blood Group" name="bloodGroup" label="Blood Group"/>
          </Col>
        </Row>

        <Row gutter={15}>
          <Divider>Contact Information</Divider>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="email" placeholder="Enter Email Address" name="email" label="Email Address"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter contact Number" name="contactNo" label="Contact Number"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter Emergency contact" name="emergencyContactNo" label="Emergency Contact Number"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
            <PHInput type="text" placeholder="Enter Present Address" name="presentAddress" label="Present Address"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 12 }}>
            <PHInput type="text" placeholder="Enter Permanent Address" name="permanentAddress" label="Permanent Address"/>
          </Col>
        </Row>

        <Row gutter={15}>
          <Divider>Guardian</Divider>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter Father's Name" name="guardian.fathersName" label="Father's Name"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter Mother's Name" name="guardian.mothersName" label="Mother's Name"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter contact Number" name="guardian.phoneNo" label="Contact Number"/>
          </Col>
        </Row>

        <Row gutter={15}>
          <Divider>Local Guardian</Divider>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter Name" name="localGuardian.name" label="Full Name"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter Relation of Student" name="localGuardian.relation" label="Relation of Student"/>
          </Col>

          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHInput type="text" placeholder="Enter contact Number" name="localGuardian.phoneNo" label="Contact Number"/>
          </Col>
        </Row>

        <Row gutter={15}>
          <Divider>Academic Information</Divider>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect options={admisitonSemesterOption} disabled={isLoading} placeholder="Select Semester" name="addmissionSemester" label="Academic Semester"/>
          </Col>
          <Col span={24} md={{ span: 12 }} lg={{ span: 8 }}>
            <PHSelect options={academicDepartment} disabled={departmentLoading} placeholder="Select Department" name="addmissionDepartment" label="Academic Department"/>
          </Col>
        </Row>

        <Button htmlType="submit">Crate Student</Button>
      </PHForm>
    </Flex>
  )
}

export default CreateStudent
