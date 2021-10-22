import styled from 'styled-components'

export const StyledForm = styled.form`
  width: 50%;
  padding: 2%;
  margin-top: 5%;
  transition: 2ms;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 10%;
    text-align: center;

    span.username {
      color: ${({ theme }) => theme.green};
    }
  }

  div.form-group {
    position: relative;

    label {
      display: flex;
      justify-content: space-between;

      input {
        width: 60%;
        padding: 1px;
        padding-left: 1.25%;

        border: 1px solid ${({ theme }) => theme.mediumGray};
        background: ${({ theme }) => theme.lightGray};

        :focus {
          outline-width: 0;
        }
      }
    }

    div.error {
      align-self: flex-end;
      width: 80%;
      height: 2rem;

      span {
        font-size: 0.8rem;

        color: ${({ theme }) => theme.red};
      }
    }
  }

  button {
    margin-top: 5%;
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
`
