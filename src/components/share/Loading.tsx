import { Flex, Spin } from 'antd';

const Loading = () => {
  return (
    <Flex gap="middle" vertical style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
      <Spin tip="Loading" size="large">
      </Spin>
    </Flex>
  )
}

export default Loading
