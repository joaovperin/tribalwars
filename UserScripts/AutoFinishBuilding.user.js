// ==UserScript==
// @name                Auto Finish Buildings
// @description         Auto-click on the 'finish' green button (when it appears)
// @author              joaovperin
// @namespace           joaovperin
// @date                2020-08-09
// @icon                https://i.imgur.com/7WgHTT8.gif
// @include             https://**.tribalwars.com.*/game.php?**&screen=main*
// @version     	    1.0.1
// @updateURL           https://raw.githubusercontent.com/joaovperin/TribalWars/stable/UserScripts/AutoFinishBuilding.user.js
// @downloadURL         https://raw.githubusercontent.com/joaovperin/TribalWars/stable/UserScripts/AutoFinishBuilding.user.js
// @license             GPL-3.0
// @grant               GM_getResourceText
// @grant               GM_addStyle
// @grant               GM_getValue
// @grant               unsafeWindow
// @require             http://code.jquery.com/jquery-1.12.4.min.js
// ==/UserScript==


(() => {
    'use strict';
    //****************************** Configuration ******************************//
    const mediumDelay = 1000;
    const delayRange = 300;
    //*************************** End Configuration ***************************//

    const intervalRange = Math.floor(Math.random() * (mediumDelay - delayRange / 2) + mediumDelay / 2);

    console.log('its hehe starting!!', intervalRange);

    // Loop
    setInterval(() => {

        console.log('Haiou, silver hehe!');

        const tr = $('[id="buildqueue"]').find('tr').eq(1);
        const text = tr.find('td').eq(1).find('span').eq(0).text().split(" ").join("").split("\n").join("");
        const timeSplit = text.split(':');

        // Free completition
        if (timeSplit[0] * 60 * 60 + timeSplit[1] * 60 + timeSplit[2] * 1 < 3 * 60) {
            tr.find('td').eq(2).find('a').eq(2).click();
        }
        // Completed mission
        $('[class="btn btn-confirm-yes"]').click();

    }, intervalRange);

})();