// ==UserScript==
// @name        reader-techug
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  去除程序师文章页面的广告和侧边栏，并自动展开文章
// @author       toknow-gh
// @updateURL    https://github.com/toknow-gh/userjs/blob/master/reader-techug.user.js
// @installURL   https://github.com/toknow-gh/userjs/blob/master/reader-techug.user.js
// @downloadURL  https://github.com/toknow-gh/userjs/blob/master/reader-techug.user.js
// @match        https://www.techug.com/post/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    $('#content0').css('maxHeight', '100%');
    $('#rest').click();

    var header = document.querySelector("#masthead");
    var title = document.querySelector("h1.entry-title");
    var content = document.querySelector("#content0");
    var body = document.querySelector("body");
    var related_cell = document.querySelector("div.qr_table");

    // remove ads
    var ads = content.querySelectorAll("a[href*='taobao']");
    for(var ad of ads) {ad.parentNode.removeChild(ad);}

    while(body.firstChild) {body.firstChild.remove();}

    var main_div = document.createElement("div");
    header.setAttribute("style", "margin:auto");
    main_div.setAttribute("style", "width:750px; margin:auto");
    title.setAttribute("style", "text-align:center");
    body.appendChild(header);
    body.appendChild(main_div);

    main_div.appendChild(title);
    main_div.appendChild(content);
    main_div.appendChild(related_cell);
})();