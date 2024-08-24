import React from 'react'


import { Box, Flex, Tr } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PriceSection from './components/PriceSection'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'


const Dashboard = ({}) => {
  return <DashboardLayout title= "Dashboard"> 
  <PortfolioSection/>
  <PriceSection/>
  <Transactions/>
  <InfoCard/>
  </DashboardLayout>
 

}

export default Dashboard