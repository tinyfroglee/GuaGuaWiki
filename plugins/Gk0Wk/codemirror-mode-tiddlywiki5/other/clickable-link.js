!function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)}(function(e){"use strict";var i=/macintosh|mac os x/i.test(navigator.userAgent)?"metaKey":"ctrlKey";e.defineInitHook(function(e){e.on("mousedown",function(e,t){t[i]&&"true"===$tw.wiki.getTiddlerText("$:/plugins/Gk0Wk/codemirror-mode-tiddlywiki5/config/clickable-link").toLowerCase()&&(t.target.classList.contains("cm-externallink")?window.open(t.target.innerText):t.target.classList.contains("cm-internallink")&&(new $tw.Story).navigateTiddler(t.target.innerText))})})});