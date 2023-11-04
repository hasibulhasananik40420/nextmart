import { cn } from '@/lib/utils'
import React from 'react'

interface Props {
  children: React.ReactNode
  className?: string
}

const Container = ({ children, className }: Props) => {
  return (
    <div className={cn('py-10 max-w-[1440px] mx-auto px-4 lg:px-4 xl:px-4 2xl:px-0', className)}>
      {children}
    </div>
  )
}

export default Container