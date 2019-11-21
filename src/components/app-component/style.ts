import { css } from "lit-element";

export default css`
  #header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #000;
  }

  #header > * {
    display: flex;
    align-items: center;
  }

  #title {
    text-align: center;
    justify-content: center;
  }

  drawer-component {
    flex: 1;
  }

  drawer-component::part(aside) {
    background: #fff;
  }

  drawer-component[opened]::part(aside) {
    border-right: 1px solid #000;
    /* padding-right: 1rem; */
  }

  #center {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  #drawer {
    /* padding: 1rem; */
    min-width: 256px;
  }

  #drawer ul {
    list-style-type: none;
  }

  #drawer li {
    display: flex;
  }

  #drawer a {
    flex: 1;
    padding: 1rem;
    border-bottom: 1px solid #000;
  }

  #drawer a:hover {
    background: rgba(0, 0, 0, 0.25);
  }

  #button {
    padding: 1rem;
  }

  #button:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  .grid {
    display: grid;
    grid-gap: 1em;
  }
`;
