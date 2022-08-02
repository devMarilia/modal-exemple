import React from 'react'
import { ButtonElement } from './styled';

const Button = ({ children }) => {
  return (
    <ButtonElement>{children}</ButtonElement>
  )
}

export default Button