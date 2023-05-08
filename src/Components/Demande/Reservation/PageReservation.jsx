import React from 'react'
import NwAccReservation from './NwAccReservation'
import ReservationLoggedIN from './ReservationLoggedIN'
import Navbar from '../../Navbar'
import Footer from '../../HomePage/Footer'
import ExistAccReservation from './ExistAccReservation'

const PageReservation = () => {
  return (
    <>

    <NwAccReservation/>
    <ExistAccReservation />
    <ReservationLoggedIN/>

    </>
  )
}

export default PageReservation