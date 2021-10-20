import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  justify-content: center;

  ${({ centered }) => (centered ? `align-items: center; flex-grow: 1;` : null)}
`

export default function Page({ centered = false, children }) {
  return <PageContainer centered={centered}>{children}</PageContainer>
}
