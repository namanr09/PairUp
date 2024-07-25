import React from 'react'
import Navigation from './_components/Navigation'
import { redirect } from 'next/navigation';

export default function layout(
    {children} : 
    {
        children : React.ReactNode
    }
) {
    // redirect('/users');
  return (
    <div className="h-full flex">
      <nav className="fixed top-0 left-0 h-full   ">
        <Navigation />
      </nav>
      <div className=' w-72  h-full'>        
        
      </div>
      <div className="h-full flex justify-center ">{children}</div>
    </div>
  );
}
