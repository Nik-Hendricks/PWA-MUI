import {API2} from '/js/API2.js'

let instance = null;

class UserManager{
    constructor(callback){
        if(!instance){
          instance = this;
        }else{
            return instance;
        }
        this.g_uid = API2.g_uid;
        var scope = this;
        if(API2.getCookie('g_uid') != ""){
            API2.get_user_data().then(user => {})
        }
    }

    get_user(g_uid){
        return new Promise(resolve => {
            API2.get_user_data().then(user => {
                console.log(user)
                resolve(user);
            })
        })
    }

    update_user(data){
        return new Promise(resolve => {
            API2.update_user(data).then(result => {
                resolve(result)
            })
        })
    }

}



export{UserManager}