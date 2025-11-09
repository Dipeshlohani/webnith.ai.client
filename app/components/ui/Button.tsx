'use client'

import Link from 'next/link'
import { ReactNode } from 'react'

interface ButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({
  href,
  onClick,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'relative inline-flex items-center justify-center gap-2 font-bold rounded-2xl transition-all duration-300 group overflow-hidden transform-gpu'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary via-brand-purple to-accent text-white shadow-glow hover:shadow-glow-lg hover:scale-105 hover:-translate-y-1',
    secondary: 'glass text-white hover:shadow-glow hover:scale-105',
    ghost: 'bg-white/5 text-white border border-white/20 hover:bg-white/10 hover:border-white/40',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/10 hover:shadow-glow'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  const content = (
    <>
      {variant === 'primary' && (
        <span className="absolute inset-0 bg-gradient-to-r from-accent via-brand-purple to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${classes} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {content}
    </button>
  )
}

