import { css } from "lit-element";

export default css`
  button {
    margin: inherit;
  }

  form {
    display: grid;
    grid-gap: 1rem;
  }

  label {
    display: block;
  }

  quill-js {
    display: block;
    position: relative;
    flex-direction: column;
  }

  .grid {
    display: grid;
    grid-gap: 1rem;
  }

  .textarea {
    display: flex;
    flex: 1;
    flex-direction: column;
  }

  .textarea label {
    margin-bottom: 1rem;
  }
`;
