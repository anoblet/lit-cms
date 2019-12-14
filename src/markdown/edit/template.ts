import "@material/mwc-tab-bar";
import "@material/mwc-tab";

import { Button, Form, Text, Textarea } from "@anoblet/lit-form";

import { cache } from "lit-html/directives/cache";
import { html } from "lit-element";

import("../view/component");

export default function() {
  const data = this.data;
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
                  new Text({
                    name: "title",
                    label: "Title",
                    value: this.data.title
                  }),
                  new Text({
                    name: "slug",
                    label: "Slug",
                    value: this.data.slug,
                    readonly: true
                  }),
                  new Text({
                    name: "sortOrder",
                    label: "Sort order",
                    value: this.data.sortOrder
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
                            .value=${data.body}
                            rows="5"
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
              <markdown-view .page=${this.data}></markdown-view>
            `
      )}
    </div>
  `;
}
