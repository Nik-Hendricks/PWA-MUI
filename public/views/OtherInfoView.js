import {View} from '/views/View.js';

class OtherInfoView extends View{
    constructor(){
        super();
    }

    connectedCallback(){
        this.classList.add('view')
        this.innerHTML = `  
                            `




        window.DP.dispatch("VIEW_LOAD")
    }
}

window.customElements.define('other-info-view', OtherInfoView);
export{OtherInfoView};