import React from 'react'
import Header from '../Header/Header/Header'
import HeaderCategory from '../Header/HeaderCategory/HeaderCategory'
import Footer from '../Footer/Footer'
import HufkoPrime from './HufkoPrime/HufkoPrime'
import DownloadApp from './DownloadApp/DownloadApp'
import FranchiseHufko from './FranchiseHufko/FranchiseHufko'

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeaderCategory />
      <HufkoPrime />
      <DownloadApp />
      <FranchiseHufko />
      <Footer />
    </div>
  )
}

export default HomePage
