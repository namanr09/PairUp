"use client"
import { ModeToggle } from '@/components/ModeToggle';
import { cn } from '@/lib/utils';
import { DashboardIcon, DashIcon } from '@radix-ui/react-icons';
import { BookMarked, Building2, CreditCard, HomeIcon, LogOut, NotebookPenIcon, Settings } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import React, { useState } from 'react'

export default function Navigation() {
    const [path , setPath] = useState("dashboard");
  return (
    <div className='w-full h-full p-3'>
    <div className="h-full bg-[#eae9e9] dark:bg-zinc-950  w-72 flex flex-col p-9 rounded-3xl justify-between shadow-2xl text-muted-foreground ">
      <div className="">
        <div className=" font-bold text-[#4770FF]  p-4 text-4xl ">PairUp</div>
        <div className="flex flex-col p-4 space-y-5">
          <Link
            href={"/users/dashboard"}
            className={cn(
              "flex  space-x-2 items-center hover:text-[#4770FF]",
              path === "dashboard" && "text-[#4770FF]"
            )}
            onClick={() => setPath("dashboard")}
            >
            <HomeIcon className="w-5 h-5" />
            <span>Dashboard</span>
          </Link>
          <Link
            href={"/users/organizations"}
            className={cn(
              "flex  space-x-2 items-center hover:text-[#4770FF]  ",
              path === "organizations" && "text-[#4770FF]"
            )}
            onClick={() => setPath("organizations")}
            >
            <Building2 className="w-5 h-5" />
            <span>Organizations</span>
          </Link>
          <Link
            href={"/users/planner"}
            className={cn(
              "flex  space-x-2 items-center hover:text-[#4770FF] ",
              path === "planner" && "text-[#4770FF]"
            )}
            onClick={() => setPath("planner")}
            >
            <BookMarked className="w-5 h-5" />
            <span>Planner</span>
          </Link>
          <Link
            href={"/users/accounts"}
            className={cn(
              "flex  space-x-2 items-center hover:text-[#4770FF]",
              path === "accounts" && "text-[#4770FF]"
            )}
            onClick={() => setPath("accounts")}
            >
            <CreditCard className="w-5 h-5" />
            <span>Accounts</span>
          </Link>
          <Link
            href={"/users/notes"}
            className={cn(
              "flex  space-x-2 items-center hover:text-[#4770FF]",
              path === "notes" && "text-[#4770FF]"
            )}
            onClick={() => setPath("notes")}
            >
            <NotebookPenIcon className="w-5 h-5" />
            <span>Notes</span>
          </Link>
        </div>
      </div>
      <div>
        <div className="flex flex-col p-4 space-y-4">
          <div
            className={cn(
              "flex  space-x-2 items-center hover:text-[#4770FF] ",
              path === "settings" && "text-[#4770FF]"
            )}
            onClick={() => setPath("settings")}
            >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>
          <div
            role="button"
            className="flex  space-x-2 items-center hover:text-red-500   "
            >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}
