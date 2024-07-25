"use client"
import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'
import people from "../../../public/poeple.svg"
import { redirect } from 'next/navigation';
export default function page() {
    const[isLogin , setIsLogin ] = useState(true);   
    redirect('/auth/login')
  return (
    <>
    </>
  );
}
