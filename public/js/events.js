//events.js 11/29/2021

class EV{
    constructor(){

    }

    on(what, callback){
        return new Promise(resolve => {
            window.DP.on(what, (returnval) => {

            })
            window.DP.dispatch(what, )
        })
    }

    getContext(){
        return new Promise(resolve {
            
        })
    }
}

window.DP.on("GET_CONTEXT", () => {

})