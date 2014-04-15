/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/


Ext.application({
    name: 'Test',

    launch: function() {   
   //set font size for html tag for responsive design
    var minPx = Math.min(window.innerWidth,window.innerHeight);
    //if assume the design is base on 320 width and base font size is 14px
    var zoomFontsize = Math.round(minPx / 320 * 14);
    document.documentElement.style.fontSize = zoomFontsize + 'px';
    console.log('Minium width or height is :' + minPx + "; default fontsize is " + zoomFontsize + 'px;');
       
    }

});


