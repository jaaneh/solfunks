import * as React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'

type IProps = {
  href: string
  children: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}

const BASE_STYLES =
  'border-2 border-solid border-sf-primary bg-white uppercase text-lg hover:text-xl transiton-all duration-100'

const ActiveLink = ({ children, onClick, href }: IProps): JSX.Element => {
  const router = useRouter()

  const isCurrentRoute = router.pathname === href

  const styles = clsx(BASE_STYLES, {
    'text-black': isCurrentRoute,
    'text-gray-600': !isCurrentRoute,
    'button-shadow-primary': true
  })

  return (
    <Link href={href}>
      <a onClick={onClick} className={styles}>
        {children}
      </a>
    </Link>
  )
}

export default ActiveLink
