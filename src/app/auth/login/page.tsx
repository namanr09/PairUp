"use client"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { useForm } from 'react-hook-form';
import * as z from "zod"
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';


const formSchema = z.object({
    email : z.string().email({message : 'invalid email'}),
    password : z.string().min(8,{message : 'password must be at least 8'})
})
export default function page() {
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        email: "",
        password: ""
      },
    });
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values);
    }
  return (
    <div className="h-full flex  justify-center items-center  w-full ">
      <div className="flex flex-col items-center space-y-5 w-[400px] h-[400px] justify-center rounded-xl shadow-lg border ">
        <span className="font-bold text-3xl">Good to see you again.</span>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-5 flex flex-col items-center"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-gray-500">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your email here ..."
                      {...field}
                      className="w-80"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-gray-500">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your password here ..."
                      {...field}
                      className="w-80"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-80 flex items-center justify-center space-x-1"
            >
              <div>Login</div>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <span>
              Don't have an account? <Link  href={'/auth/signup'}>
               <span className='text-blue-500 '>SignUp</span>
              </Link>
            </span>
          </form>
        </Form>
      </div>
    </div>
  );
}
