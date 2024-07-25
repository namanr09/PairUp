import { BarChartComponent } from '@/components/BarChart'
import React from 'react'
import { RevealBento } from './_components/BentoGrid'
import MainSearch from '../_components/MainSearch'
import { TimerDrawer } from './_components/TimerDrawer'
import Header from './_components/Header'
import TaskTable from './_components/TaskTable'
export default function page() {
  return (
    <div className=' h-full w-full flex flex-col p-2'>
       {/* <MainSearch/> */}
        <div className='flex flex-col items-center'>
          <div className='h-full w-full  '>
            <Header/>
          </div>
            {/* <div>
            <BarChartComponent/>
            </div>
            <div className='flex bg-red-200 h-full '>
            </div>
        </div>
        <div className='flex items-center'>
            Organizations Overview */}
            {/* <TimerDrawer/> */}
            <RevealBento/>
            <TaskTable/>
        </div>

    </div>
  )
}
