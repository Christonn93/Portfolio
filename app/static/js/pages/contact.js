import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Contact");
    }

    async getHtml() {
        return `
        <section class="id-card">
            <div class="card-header">
                <div class="img-frame-id">
                    <img src="../static/img/153684720_10158795395525490_149819903027147096_n.jpg" alt="Profile-picture" class="pic-circle">
                </div>   
                <h2>Christopher Tønnesalnd</h2>
            </div>
            <div class="card-content">
                <div class="info">
                    <section>
                        <a href="#">Here is my education documents</a>
                    <p>Information about me</p>
                    </section>
                </div>
            </div>
        </section>
    <section class="contact-form">
        <from action="/my-handling-form-page" method="post">
            <fieldset>
                <legend>Contact me</legend>
                <label class="form-label" for="name">Full name:
                    <strong><abbr title="required">*</abbr></strong>
                    <input type="text" for="name" class="form-label">
                </label>
                <label class="form-label" for="email">Email:
                    <strong><abbr title="required">*</abbr></strong>
                    <input type="text" for="email" class="form-label">
                </label>
                <label class="form-label" for="phone">Phone number:
                    <strong><abbr title="required">*</abbr></strong>
                    <input type="text" for="phone" class="form-label">
                </label>

                <label for="request" class="form-textarea">Add your request:
                    <strong><abbr title="required">*</abbr></strong>
                    <textarea class="form-lable" for="request"></textarea>
                </label>
                <label for="radio-btn">Verify that you are human</label>
                <input type="radio" title="not a computer" name="radio-btn">
                <br>
                <button class="cta-bt">Send</button>
            </fieldset>
        </from>
    </section>
        `;
    }
}