import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("My work");
    }

    async getHtml() {
        return `
        <section class="section-wrapper">
        <section class="section-header">
            <h2>My Linkedin Learning certificate</h2>
        </section>
        <section class="section-content">
            
            <h3>Accesibility for Web Design</h3>
                <a href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
                    <img src="../static/img/certificates/Acrobat_meagICxt20.png" alt="certificate" class="certificate-img">
            <h3>UX Design: 1 Overview</h3>
                <a href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
                    <img src="../static/img/certificates/TV0Aq3WIjc.png" alt="certificate" class="certificate-img">
            <h3>UX Design: 2 Analyzing User Data</h3>
                <a href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
                    <img src="../static/img/certificates/QFO3W5BW8y.png" alt="certificate" class="certificate-img">
            <h3>Adobe Color Essential Training (2016)</h3>
                <a href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
                    <img src="../static/img/certificates/qs2DWyDCRf.png" alt="certificate" class="certificate-img">
            <h3>Programming Fundatisons: Open-Source Licensing</h3>
                <a href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
                    <img src="../static/img/certificates/zgWWJcTNqs.png" alt="certificate" class="certificate-img">
            </section>
    </section>
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
