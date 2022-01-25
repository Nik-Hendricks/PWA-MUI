import {Component} from '/js/components/Component.js';

class Card2 extends Component {
    constructor(){
        super();
        this.initialHTML = '<div class="card-2"></div>'
    }

    connectedCallback(){
        var children = this.innerHTML
        this.innerHTML = this.initialHTML;
        this.root_el = this.get_root_child();
        this.root_el.innerHTML = children;
    }
}

window.customElements.define('card-item-2', Card2);
export{Card2}
