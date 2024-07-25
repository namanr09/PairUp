import React from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { ModeToggle } from '@/components/ModeToggle';

export default function Header() {
  return (
    <div className="flex items-center justify-center p-1 px-4 pb-3">
      <div className="h-16 w-full dark:bg-zinc-950 border-zinc-50 rounded-xl flex items-center justify-between p-3">
        <div className='w-1/2 p-2 '>
            <div className='w-full flex items-center space-x-2'>
                <div className='w-full flex flex-col'>
                <Input className='outline-none border-none rounded-3xl bg-zinc-950 text-muted-foreground' placeholder='search something...'>
                </Input >
                <div className='w-full h-[2px] bg-zinc-900 '></div>
                </div>
                <Search className='text-muted-foreground'/>
            </div>
        </div>
        <div className='flex items-center text-md  space-x-2 '>
            <div>
                Naveen Nigger 
            </div>
            <div className='w-[35px] h-[35px] rounded-full bg-zinc-300'>
            </div>
            <ModeToggle />
        </div>
      </div>
    </div>
  );
}
