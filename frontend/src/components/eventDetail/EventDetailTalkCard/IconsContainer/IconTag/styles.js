import styled from 'styled-components'

// lib
import { COLORS } from '../../../../../lib/styles'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-right: 24px;
`

export const Text = styled.span`
  color: ${COLORS.violetCard};
`

export const IconWrapper = styled.div`
  height: 19px;
  width: 19px;
`

export const Icon = styled.img`
  width: 100%;
  height: 100%;
`