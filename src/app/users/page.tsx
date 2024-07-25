"use client"
import { redirect } from 'next/navigation'
import React, { useEffect } from 'react'

export default function page() {
    useEffect(()=>{
        redirect('/users/dashboard')
    })
  return (
    <div className='flex h-full w-full'>
    </div>
  )
}
