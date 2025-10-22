import { ReactNode } from 'react'
import { classNames } from '../lib/utils'
type Variant = 'primary' | 'secondary' | 'ghost';
export default function Button({ children, variant='primary', className='', ...rest }:
  { children: ReactNode; variant?: Variant; className?: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base = 'btn'
  const styles = variant === 'primary' ? 'btn-primary' :
                 variant === 'secondary' ? 'btn-secondary' : 'text-sea-800 hover:bg-sea-50 rounded-lg px-3 py-2'
  return <button className={classNames(base, styles, className)} {...rest}>{children}</button>
}
