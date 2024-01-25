import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { NavItems } from './NavItems'

export const MobileNav = () => {
  return (
    <nav className='md:hidden'>
      <Sheet>
        <SheetTrigger className='flex h-full items-center'>
          <MenuIcon className='cursor-pointer ml-2'/>
        </SheetTrigger>

        <SheetContent className='flex flex-col gap-6 bg-white md:hidden'>
          <Image 
            src={'/assets/images/logo.svg'}
            alt='Logo'
            width={128}
            height={38}
          />
          <Separator />
          <NavItems/>
        </SheetContent>
    </Sheet> 
    </nav>
  )
}
