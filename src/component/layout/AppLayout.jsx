import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import LoadingCom from './LoadingCom'

const AppLayout = () => {
  const navigation = useNavigation();

  if (navigation.state === 'loading') return <LoadingCom />;
  return (
    <>
    <Header />
    <Outlet/>
    <Footer />
    </>
  )
}

export default AppLayout
