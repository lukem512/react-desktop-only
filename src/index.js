// Luke Mitchell <hi@lukemitchell.co>
import React from 'react'
import styled from 'styled-components'

const getDesktopSize = (props) => {
  return props.theme.desktopSize || props.desktopSize || '768px'
}

const Container = styled.div`
  display: none;

  @media (min-width: ${getDesktopSize}) {
    display: inherit;
  }
`

const DesktopOnly = ({ children, ...rest }) => (
  <Container {...rest}>
    {children}
  </Container>
)

export default DesktopOnly
