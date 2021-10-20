import styled from 'styled-components'

export const StyledFormCard = styled.section`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: 50vh;
  padding: 3% 5%;
  width: 60%;

  background: ${({ theme }) => theme.lighterGray};
  filter: ${({ theme }) => theme.cardShadow};

  div.content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;

    h2 {
      font-size: 1.6rem;
    }
  }

  form {
    div.form-group {
      transition: 2ms;

      label {
        display: flex;
        justify-content: space-between;

        input {
          padding: 1px;
          padding-left: 1.25%;
          width: 75%;

          background: ${({ theme }) => theme.lightGray};
          border: 1px solid ${({ theme }) => theme.mediumGray};

          :focus {
            outline-width: 0;
          }
        }
      }
    }

    div.error {
      align-self: flex-end;
      height: 2rem;
      width: 80%;

      span {
        font-size: 0.8rem;

        color: ${({ theme }) => theme.red};
      }
    }

    button.submit {
      margin-top: 2%;
      width: 100%;
      padding: 2%;
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
    }

    button.cancel {
      margin-top: 1%;
      width: 100%;
      padding: 2%;
      font-size: 1.2rem;
      transition: 2ms;
      border-radius: 5px;

      background: ${({ theme }) => theme.red};
      color: ${({ theme }) => theme.lightRed};

      &:hover {
        background: ${({ theme }) => theme.darkRed};
      }
    }
  }
`
