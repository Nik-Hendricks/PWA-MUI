class Dispatcher{
    constructor(){
        this.events = []
    }

    on(event, callback) {
        // Check if the callback is not a function
        if (typeof callback !== 'function') {
            console.error(`The listener callback must be a function, the given type is ${typeof callback}`);
            return false;
        }
        // Check if the event is not a string
        if (typeof event !== 'string') {
            console.error(`The event name must be a string, the given type is ${typeof event}`);
            return false;
        }
            
        // Create the event if not exists
        if (typeof(this.events[event]) == 'undefined') {
            this.events[event] = {
                listeners: []
            }
        }
            
        this.events[event].listeners.push(callback);
    }

    removeListener(event, callback){
        //check if this event not exists
        if(typeof(this.events[event]) == 'undefined'){
            console.error(`This event: ${event} does not exist`);
            return false;
        }

        this.events[event].listeners = this.events[event].listeners.filter(listener => {
            return listener.toString() !== callback.toString();
        })
    }

    dispatch(event, details){
        //check if this event not exists
        if(this.events[event] === undefined){
            console.error(`This event: ${event} does not exist`);
            return false;
        }

        this.events[event].listeners.forEach((listener) => {
            listener(details);
        })
    }
   
}

const dispatcherSingleton = new Dispatcher();

window.DP = dispatcherSingleton // web

export default window.DP // this will initialise the singleton instantly


