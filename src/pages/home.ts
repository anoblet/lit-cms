import { html } from "lit-html";

export default html`
  <div class="grid">
    <card-component collapsible
      ><span slot="title">Welcome</span>title + collapsible</card-component
    >
    <card-component
      ><span slot="title">Tutoring</span
      ><span slot="body">...</span></card-component
    >
    <card-component collapsible><span slot="body">...</span></card-component>
    <card-component
      ><span slot="body"
        >...Long text ...Long text...Long text...Long text...Long text...Long
        text...Long text...Long text...Long text...Long text...Long text...Long
        text...Long text...Long text...Long text...Long text...Long text...Long
        text...Long text...Long text...Long text...Long text...Long text...Long
        text...Long text...Long text...Long text...Long text...Long text...Long
        text...Long text...Long text...Long text...Long text...Long text...Long
        text...Long text...Long text...Long text...Long text...Long text...Long
        text</span
      ></card-component
    >
  </div>
`;
