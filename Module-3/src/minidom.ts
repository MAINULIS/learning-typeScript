
abstract class UIElement {
    constructor(protected id: string) {}
    abstract render(): string;
}

class Input extends UIElement {
    constructor(
        id:string,
        private type:string,
        private placeholder: string,
    ) {
        super(id);
    }

    render() {
        return `<input id="${this.id}" type="${this.type}" placeholder="${this.placeholder}" />`
    }

}

    class Button extends UIElement {
        constructor(
            id:string,
            private label:string,
        ) {
            super(id)
        }

        render () {
            return `<button id="${this.id}">${this.label}</button>`
        }
    }


    class Form extends UIElement {
        private children: UIElement[] = [];

        appendChild(child: UIElement) {
            this.children.push(child);
        }
        render() {
            const childHTML = this.children.map((child) => child.render()).join("\n ");

            // console.log(childHTML);

            return `<form id="${this.id}" style="border: 1px solid #b3a5a5; padding:20px; display: flex; flex-direction: column; max-width: 300px; border-radius:10px; gap:5px">\n ${childHTML} \n</form>`
        }
    }

const emailInput = new Input("email", "email", "Enter Your Active Email")
const passInput = new Input("password", "password", "Enter Your Password")
const submitBtn = new Button ("submit-btn", "Submit")
const formElement = new Form("Login-form")

formElement.appendChild(emailInput)
formElement.appendChild(passInput)
formElement.appendChild(submitBtn)

console.log(formElement.render());

const rootElement = document.getElementById("root");

if(rootElement) {
    rootElement.innerHTML = formElement.render();
}