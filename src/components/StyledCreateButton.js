import styled from 'styled-components'

export const StyledCreateButton = styled.button`
  margin-top: 2%;
  width: 30%;
  padding: 1%;
  font-size: 1.2rem;
  transition: 2ms;
  border-radius: 5px;

  background: ${({ theme }) => theme.darkerGreen};
  color: ${({ theme }) => theme.lightGreen};

  &:hover {
    background: ${({ theme }) => theme.darkGreen};
  }

  &:disabled {
    cursor: default;

    background: ${({ theme }) => theme.mediumGray};
  }
`
