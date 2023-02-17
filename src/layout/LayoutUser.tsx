import React from 'react'
import { Outlet, useLoaderData } from 'react-router-dom'
function LayoutUser(props: any) {
  const loaderData = useLoaderData()
  return (
    <div>
      <Outlet context={loaderData} />
    </div>
  )
}

export default LayoutUser