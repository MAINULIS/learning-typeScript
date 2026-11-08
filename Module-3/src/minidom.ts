
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
        return `<input id=${this.id} type=${this.type} placeholder=${this.placeholder} />`
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
            return `<button id=${this.id}>${this.label}</button>`
        }
    }

const emailInput = new Input("email", "email", "Enter Your Active Email")
const passInput = new Input("email", "email", "Enter Your Active Email")

const submitBtn = new Button ("submit-btn", "submit")

console.log(emailInput);
console.log(passInput.render());
console.log(submitBtn);