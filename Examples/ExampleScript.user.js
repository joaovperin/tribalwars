// ==UserScript==
// @name                Example Script
// @version     	    1.0.0
// @description         This is an example script
// @author              joaovperin
// @icon                https://i.imgur.com/7WgHTT8.gif
// @include             https://**.tribalwars.com.*/game.php?**&screen=info_village*
// @downloadURL         https://raw.githubusercontent.com/joaovperin/TribalWars/stable/UserScripts/ExampleScript.user.js
// @updateURL           https://raw.githubusercontent.com/joaovperin/TribalWars/stable/UserScripts/ExampleScript.user.js
// ==/UserScript==

/**
 * Credits to ?? To me!
 *
 * @author joaovperin
 */
(async (ModuleLoader) => {

    // Dependency loading
    await ModuleLoader.loadModule('utils/event-utils');

    //****************************** Configuration ******************************//
    const myParameter = true;
    //*************************** End Configuration ***************************//

    // Your script goes here...
    if (myParameter) {
        console.log('foo');
        return;
    }
    console.log('bar');


})({
    // ModuleLoader functions
    loadModule: name => {
        const modulePath = name.replace('.', '/');
        return $.ajax({
            method: "GET",
            url: `https://raw.githubusercontent.com/joaovperin/TribalWars/master/Framework/${modulePath}.js`,
            dataType: "text"
        }).done(res => eval(res)).fail(req => console.error("Fail loading module '", name, "'."));
    }
});