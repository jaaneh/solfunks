import * as React from 'react'
import clsx from 'clsx'

import styles from './StylishButton.module.css'

type Anchor = React.ComponentPropsWithoutRef<'a'>
type Button = React.ComponentPropsWithoutRef<'button'>

type IButton = {
  fullWidth?: boolean
  noShadow?: boolean
  disabled?: boolean
  loading?: boolean
} & (Anchor | Button)

const button_loading = 'loading'

const Button = React.forwardRef<HTMLButtonElement, IButton>(
  (
    {
      disabled,
      className,
      loading = false,
      fullWidth = false,
      noShadow = false,
      ...props
    },
    ref
  ): JSX.Element => {
    const classNames = clsx(className, {
      [styles.button]: true,
      [styles.button_disabled]: disabled,
      [button_loading]: loading,

      ['w-full']: fullWidth,
      ['w-max']: !fullWidth
    })

    return (
      <div className={`${!noShadow && 'box-shadow-primary'}`}>
        {'href' in props ? (
          <a {...props} rel='noopener' className={classNames} />
        ) : (
          <button {...(props as Button)} ref={ref} className={classNames} />
        )}
      </div>
    )
  }
)

export default Button
