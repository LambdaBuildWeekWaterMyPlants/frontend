import styled from 'styled-components'

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 1.8rem;
  }

  span.error {
    color: ${({ theme }) => theme.red};
  }

  ${({ centered }) => (centered ? `align-items: center; flex-grow: 1;` : null)}
`

export default function Page({ centered = false, children }) {
  return <PageContainer centered={centered}>{children}</PageContainer>
}
