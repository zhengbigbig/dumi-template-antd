import Button from 'antd/lib/button'
import type { ButtonProps, ButtonShape, ButtonType, ButtonGroupProps, ButtonSize }  from 'antd/lib/button'

import React, { forwardRef, useState } from 'react'
import isNil from 'lodash/isNil'

type TLoading = boolean

interface HljButtonProps extends ButtonProps {
  // 异步的点击自动进行spin
  asyncClickAutoLoading?: boolean
}

interface CompoundedComponent
  extends React.ForwardRefExoticComponent<HljButtonProps & React.RefAttributes<HTMLElement>> {
  Group: typeof Button.Group;
  __ANT_BUTTON: boolean;
}

const HljButton = forwardRef<unknown, HljButtonProps>((props: HljButtonProps, buttonRef: any) => {
  const [loading, setLoading] = useState<TLoading>()

  const { asyncClickAutoLoading, ...antProps } = props
  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>) => {
    if(!props.onClick)
      return

    if(!isNil(props.loading) || !asyncClickAutoLoading)
      return props.onClick(e)

    const data: any | Promise<any> = props.onClick(e)

    if(data instanceof Promise) {
      setLoading(true)
      data.finally(() => setLoading(false))
    }

    return data
  }

  return <Button {...antProps} loading={props.loading || loading} ref={buttonRef} onClick={handleClick}/>
}) as CompoundedComponent

HljButton.displayName = 'Button';
HljButton.Group = Button.Group;
HljButton.__ANT_BUTTON = true;

export default HljButton
export type { ButtonProps, ButtonShape, ButtonType, ButtonGroupProps, ButtonSize }
