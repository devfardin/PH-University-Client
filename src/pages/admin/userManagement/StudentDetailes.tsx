import { Button, Image, Modal } from 'antd';
import { useState } from 'react'
import { TStudent } from '../../../types/userManagement';

export type TStudenModelData = Pick<TStudent, 'name' | 'id' | 'profileImage' | 'gender'| '_id' | 'email' | 'contactNo' | 'emergencyContactNo' | 'dateOfBirth'>

 type TTableData = {
    student: {
    key: string,
    name: string,
    gender: "male" | "female" | "other",
    dateOfBirth: string,
    email: string,
    contactNo: string,
    emergencyContactNo: string,
    profileImage:string,
    id: string,
    }
  };
const StudentDetailes = ({student}: TTableData) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
      setIsModalOpen(true);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };
  return (
    <div>
        <Button type="primary" onClick={showModal}>
       Details
      </Button>
      <Modal title="Student Information" open={isModalOpen} loading={false}
      onCancel={handleCancel} footer={null}
      >
        <h3>Name: {student.name}</h3>

        <Image style={{width: '150px',}} src={student?.profileImage} alt="" />
        <p>Student id: {student?.id}</p>
        <p>Phone Number: {student?.contactNo}</p>
      </Modal>

    </div>
  )
}

export default StudentDetailes
