Start the server using `node server` and you have a playground for all of the custom components. within this library consists custom HTML elements and a template for getting started with the custom routing sytem and view manager.


in `/public/index.html` you will see the main html file loaded for this whole webapp. this html page ultimately will host every custom page we make ourselves. all the body consists of is
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