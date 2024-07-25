import { GridBackgroundDemo } from '@/components/aceternity/GridBackground';
import { WobbleCardDemo } from '@/components/aceternity/WobbleCards';
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react'

export default function layout(
    {children} : {
        children: React.ReactNode
    }
) {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className=" hidden lg:block justify-center h-full w-1/2 bg-[#4770FF] rounded-r-3xl  shadow-2xl  lg:flex lg:flex-col items-center ">
        <div>
          <span className="text-white font-bold text-[60px]">PairUp</span>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <span className="text-white font-bold text-3xl">
            Build, Collaborate & Grow.{" "}
          </span>
          <Button
            variant={"outline"}
            className="flex items-center font-bold space-x-1"
          >
            Get Free <ArrowRight className="w-4 h-4" />
          </Button>
          <div className="p-4">{/* <WobbleCardDemo /> */}</div>
        </div>
      </div>
      <div className="h-full lg:w-1/2 ">
        {/* <GridBackgroundDemo/> */}
        {children}
      </div>

      <div className="absolute font-bold text-[#4770FF] top-0 right-0 p-4 text-2xl ">
        PairUp
      </div>
        <div className="absolute bottom-0 right-0 p-2 block ">
          <ModeToggle />
        </div>
      {/* <div className="bg-[#4770FF] rounded-3xl w-full lg:hidden absolute -top-16 h-[200px] ">
        
      </div> */}
    </div>
  );
}
