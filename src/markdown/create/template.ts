import "@material/mwc-tab-bar";
import "@material/mwc-tab";

import { Button, Form, Text, Textarea } from "@anoblet/lit-form";

import { cache } from "lit-html/directives/cache";
import { html } from "lit-element";

import("../../page/view");

export default function() {
  return html`
    <div class="grid">
      <mwc-tab-bar
        ><mwc-tab label="Edit page"></mwc-tab
        ><mwc-tab>Preview Changes</mwc-tab></mwc-tab-bar
      >
      ${cache(
        this.activeTab === 0
          ? html`
              ${new Form({
                fields: [
                  new Text({ name: "title", label: "Title", value: "" }),
                  new Text({
                    name: "slug",
                    label: "Slug",
                    value: "",
                    readonly: true
                  }),
                  new Text({
                    name: "sortOrder",
                    label: "Sort order",
                    value: "0"
                  }),
                  new Textarea({
                    name: "body",
                    label: "Body",
                    render: function() {
                      return html`
                        <div class="textarea">
                          <label>${this.label}</label>
                          <textarea
                            name=${this.name}
                            rows="10"
                            @change=${function(e) {
                              this.data = {
                                ...this.data,
                                body: e.target.value
                              };
                            }}
                          ></textarea>
                        </div>
                      `;
                    }
                  })
                ],
                actions: [
                  new Button({
                    text: "Submit",
                    toTemplateResult: function() {
                      return html`
                        <button-component
                          @click=${function() {
                            this.onSubmit();
                          }}
                          >${this.text}</button-component
                        >
                      `;
                    }
                  })
                ]
              }).render()}
            `
          : html`
              <page-view .page=${this.data}></page-view>
            `
      )}
    </div>
  `;
}
