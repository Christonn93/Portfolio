import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Certificate");
    }

    async getHtml() {
        return `
        <section class="section-wrapper">
        <section class="section-header">
            <h2>My Linkedin Learning certificate</h2>
        </section>
        <section class="section-content">
            <div class="certification-card">
                <div class="certification-card-header">
                    <h3>Accesibility for Web Design</h3>
                </div>
                <img src="../static/img/certificates/Acrobat_meagICxt20.png" alt="certificate" class="certificate-img">
                <a Class="linkedin-link" href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
            </div>
            <div class="certification-card">
                <div class="certification-card-header">
                    <h3>UX Design: 1 Overview</h3>
                </div>
                <img src="../static/img/certificates/TV0Aq3WIjc.png" alt="certificate" class="certificate-img">
                <a Class="linkedin-link" href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
            </div>
            <div class="certification-card">
                <div class="certification-card-header">
                    <h3>UX Design: 2 Analyzing User Data</h3>
                </div>
                <img src="../static/img/certificates/QFO3W5BW8y.png" alt="certificate" class="certificate-img">
                <a Class="linkedin-link" href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
            </div>
            <div class="certification-card">
                <div class="certification-card-header">
                    <h3>Adobe Color Essential Training (2016)</h3>
                </div>
                <img src="../static/img/certificates/qs2DWyDCRf.png" alt="certificate" class="certificate-img">
                <a Class="linkedin-link" href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
            </div>
            <div class="certification-card">
                <div class="certification-card-header">
                    <h3>Programming Fundatisons: Open-Source Licensing</h3>
                </div>
                <img src="../static/img/certificates/zgWWJcTNqs.png" alt="certificate" class="certificate-img">
                <a Class="linkedin-link" href="https://www.linkedin.com/learning/ux-design-1-overview-2/welcome?u=43268076">Linkedin Video</a>
            </div>
        </section>
    </section>
        `;
    }
}