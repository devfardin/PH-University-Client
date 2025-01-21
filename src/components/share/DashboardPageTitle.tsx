import React from 'react'

type TType = {
  title: string,
  style: 'left' | 'right' | 'center' | undefined,
}
const DashboardPageTitle = ({title, style}: TType) => {
  return (
    <div>
       <h1 style={{ marginBottom: '30px', textAlign: style,}}>{title}</h1>
    </div>
  )
}

export default DashboardPageTitle
