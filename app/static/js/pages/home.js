import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Home");
    }

    async getHtml() {
        return `
            <h1>Welcome!</h1> 

            <p>Here you will get to know me, get to know my skilles. If you have a project you want me to work on, donmt hassitate to contact me.</p> 
        `;
    }
}