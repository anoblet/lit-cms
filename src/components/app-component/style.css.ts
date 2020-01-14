import { css } from "lit-element";

export default css`
  :host {
    --mdc-theme-primary: #000;
  }

  button-component::part(button) {
    display: flex;
  }

  drawer-component {
    flex: 1;
  }

  drawer-component::part(aside) {
    background: #fff;
    display: flex;
  }

  drawer-component[opened]::part(aside) {
    border-right: 1px solid #000;
  }

  drawer-component #bottom {
    border-top: 1px solid #000;
  }

  ul {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }

  [slot="aside"] {
    display: flex;
    flex: 1;
  }

  #button {
    padding: 1rem;
  }

  #button:hover {
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  #center {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 0;
  }

  #drawer {
    /* padding: 1rem; */
    min-width: 256px;
    display: flex;
    flex: 1;
    flex-direction: column;
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

  #drawer .flex {
    flex: 1;
  }

  #header {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border-bottom: 1px solid #000;
  }

  #header > * {
    display: flex;
    align-items: center;
  }

  #main {
    padding: 1rem;
  }

  #menu button-component {
    border: 0;
  }

  #outlet {
    padding: 1rem;
  }

  #title {
    text-align: center;
    justify-content: center;
  }

  .grid {
    display: grid;
    grid-gap: 1em;
  }
`;
