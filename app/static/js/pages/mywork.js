import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("My work");
    }

    async getHtml() {
        return `
        <h1>13 things you need to include in your career portfolio</h1>
        <ul>
        <li>1. CAREER SUMMARY</li>
        <li>2. PHILOSOPHY STATEMENT</li>
        <li>3. SHORT BIO</li>
        <li>4. RESUME</li>
        <li>5. SKILLS AND ABILITIES</li>
        <li>6. ACCOMPLISHMENTS</li>
        <li>7. WORK SAMPLES</li>
        <li>8. HONORS</li>
        <li>9. TRANSCRIPTS</li>
        <li>10. PROFESSIONAL DEV</li>
        <li>11. MILITARY RECORDS</li>
        <li>12. VOLUNTEERING</li>
        <li>13. REFERENCES</li>
        </ul>
        `;
    }
}
