import styled from 'styled-components'

export const StyledCard = styled.section`
  border-radius: 5px;
  width: 60%;
  padding: 3% 5%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  margin: 2%;

  background: ${({ theme }) => theme.lighterGray};
  filter: ${({ theme }) => theme.cardShadow};

  div.content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 1.6rem;
    }

    div {
      margin-bottom: 5%;

      h3 {
        font-size: 1.2rem;
      }

      p {
        margin-top: 2%;
      }
    }
  }

  div.controls {
    display: flex;
    justify-content: flex-end;

    * {
      margin-left: 5%;
      transition: 2ms;
    }

    button.edit {
      &:hover {
        color: ${({ theme }) => theme.darkerGreen};
      }
    }

    button.delete {
      &:hover {
        color: ${({ theme }) => theme.red};
      }
    }
  }
`
