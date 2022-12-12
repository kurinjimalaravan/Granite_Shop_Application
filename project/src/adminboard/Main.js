import React from 'react'

import Navbar from './navbar/Navbar'
import Sidebar from './sidebar/Sidebar'

import Widget from './dashboard/widget'
import Chart from './dashboard/Chart'

import './main.css'

const Main = () => {
  return (
    <div>
         <Navbar/>
        <Sidebar/>
        <div className='adminwidget'>
          <div className="widgets">
            <Widget type="user" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
          </div>
          <div className="charts">
              
              <Chart title="Last 6 Months (Revenue)" aspect={4 / 1} />
            </div>
        </div>
    </div>
  )
}

export default Main
