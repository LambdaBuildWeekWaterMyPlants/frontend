import styled from 'styled-components'

const LogoutSpan = styled.span`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.darkerGreen};
  }
`

export default function Logout({ click }) {
  return <LogoutSpan onClick={click}>Logout</LogoutSpan>
}
