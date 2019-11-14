import { css } from "lit-element";

export default css`
  a {
    color: inherit;
    text-decoration: none;
  }

  card-component {
    border: 1px solid #000;
    padding: 1rem;
    grid-gap: 1rem;
  }

  #main {
    padding: 1rem;
  }

  input {
    border: 0;
    width: 100%:
  }

  input:focus {
    outline: none;
  }

  fieldset {
    margin-inline-start: 0;
    margin-inline-end: 0;
    padding-block-start: 0.25rem;
    padding-inline-start: 1rem;
    padding-inline-end: 0;
    padding-block-end: 0.5rem;
  }

  button {
    margin: 1rem;
    background: inherit;
    border: 1px solid #000;
    padding: 0.5rem;
  }

  form {
    display: grid;
    grid-gap: 1rem;
  }
`;
