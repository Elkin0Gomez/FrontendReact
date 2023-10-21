import React from 'react'
import { useSelector } from 'react-redux'
import { CSidebar, CSidebarBrand, CSidebarNav } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { logoNegative } from '../assets/brand/logo-negative'
import { sygnet } from '../assets/brand/sygnet'
import { AppSidebarNav } from './sidebar/AppSidebarNav'


import items from '../utils/sidebarnav'


const AppSidebar = () => {
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      visible={sidebarShow}
    >


    </CSidebar>
  )
}

export default React.memo(AppSidebar)
