import React from 'react'
import Navbar from '../components/layoutes/Navbar'
import AllInventory from '../components/pages/inventory/AllInventory'

type Props = {}

const InventoryScreen = (props: Props) => {
  return (
    <div>
        <Navbar/>
        <AllInventory/>
    </div>
  )
}

export default InventoryScreen