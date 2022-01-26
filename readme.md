Start the server using `node server` and you have a playground for all of the custom components. within this library consists custom HTML elements and a template for getting started with the custom routing sytem and view manager.


in `/public/index.html` you will see the main html file loaded for this whole webapp. This HTML page ultimately will host every custom page we make ourselves. all the body consists of is this.
```html
 <menu-bar-top></menu-bar-top>
 <main-content></main-content>
 <menu-bar-bottom>
     <div class="header-center-button-container">
         <span class="material-icons header-center-button" onclick='window.history.pushState("","","/OtherMagic")'>auto_awesome</span>
     </div>
     <div class="header-center-button-container">
         <span class="material-icons header-center-button" onclick='window.history.pushState("","","/Components")'>auto_awesome_motion</span>                                        
     </div>
     <div class="header-center-button-container">
         <span class="material-icons header-center-button" onclick='window.history.pushState("","","/About")'>info</span>                                        
     </div>
 </menu-bar-bottom>
 <loading-spinner></loading-spinner>
```

it is up to you to define pages for your user. you can see and example of this in the `/js/main.js` file. line 95 is the javascript object for defining routes throughout the app. All of these pages will also need to be imported you can see and an example at `/js/main.js` line 23 

an example of the using the router

```javascript
var routes = {
    "":{
        title: 'Components',
        view:`<components-view></components-view>`
    },
    "Components":{
        title:'Components',
        view:'<components-view></components-view>'
    },
    "OtherMagic":{
        title:'Other Magic',
        view:`<other-magic-view></other-magic-view>`
    },
    "About":{
        title:"Other Info",
        view:`<other-info-view></other-info-view>`
    }
}

window.VM.register(routes)
```

The `title` attribte denotes the text displayed in the `<menu-bar-top>` of every page. 
the `view` attribute denotes the view element name. as denoted at the bottom of every custom view using
```javascript
window.customElements.define('element-name', ElementClass)
```