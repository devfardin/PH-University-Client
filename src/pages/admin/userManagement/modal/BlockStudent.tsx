/* eslint-disable @typescript-eslint/no-explicit-any */
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Modal } from 'antd';
import { useBlockedUserMutation } from '../../../../redux/features/admin/userManagement.api';
import { toast } from 'sonner';
import PHForm from '../../../../components/form/PHForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import PHSelect from '../../../../components/form/PHSelect';
import { useState } from 'react';

const { confirm } = Modal;
const BlockStudent = ({ studentId }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [blockedUser, {isSuccess}] = useBlockedUserMutation();

  console.log(isSuccess);
  
  const onSubmit:SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    
  }
  const blockedOption = [
    {
      value: 'in-progress',
      text: 'in-progress'
    },
    {
      value: 'blocked',
      text: 'blocked'
    },
  ]
  

    const showPropsConfirm = async() => {
        confirm({
          title: 'Are you sure you want to block this user? ',
          icon: <ExclamationCircleFilled />,
          content: <div> <PHForm onSubmit={onSubmit}> <PHSelect placeholder="Select Gender" name="gender" label="Gender"  options={blockedOption}/> </PHForm> </div>,
          okText: 'Yes',
          okType: 'danger',
          cancelText: 'Cancel',
          onOk() {
            // const data={ studentId: studentId, status: 'blocked' }
            // const result = blockedUser(studentId);
            // console.log(result);
            
          },
          onCancel() {
            toast.error('Action canceled.')
          },

        });
      };

      const showModal = () => {
        setIsModalOpen(true);
      };
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
  return (
    <div>
    <Button onClick={showPropsConfirm}>Blocked</Button>
    <Modal title="Are you sure you want to block this user?" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
    <PHForm onSubmit={onSubmit}>
      <PHSelect placeholder="Select Gender" name="gender" label="Gender"  options={blockedOption}/>
      <Button htmlType='submit'>Update status</Button>
      </PHForm>
      </Modal>
    </div>
  )
}

export default BlockStudent
