import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
        <section>
        <div class="certificate-card">
        
        
        </div>
        </section>
        `;
    }
}