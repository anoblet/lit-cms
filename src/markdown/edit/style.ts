import { css } from "lit-element";

export default css`
  form {
    display: grid;
    grid-gap: 1rem;
  }

  quill-js {
    display: block;
    position: relative;
  }

  .textarea label {
    margin-bottom: 1rem;
  }

  label {
    display: block;
  }

  button {
    margin: inherit;
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

  [name="body"] {
    display: flex;
    flex: 1;
    height: 10rem;
  }
`;
