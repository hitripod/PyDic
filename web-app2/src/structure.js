//var wordList2;
var wordArray = new Array();
var wordArray2 = new Array();
var b = new function() { 
            $.get(
                "http://pydictionary.appspot.com/fetch",
                {paramOne : 1, paramX : 'abc'},
                function(data) {
                    wordList = eval('(' + data + ')');
                    //alert('in callback' + wordList.words[0]);
                    var i;
                    for (i=0;i<=10;i++) {
                        wordArray[i] = {word: wordList.words[i]}
                    }
                    //alert(wordArray);
                    wordList = eval('(' + data + ')');
                    //alert('in callback' + wordList.words[0]);


                    var i;
                    //for (i=0;i<=3;i++) {
                        var entry = new Object();
                        entry.text = "WordList";
                        entry.cls = "launchscreen";
                        var items = new Array();
                        var i = new Object();
                        i.text = "speculative";
                        i.leaf = true;
                        items.push(i);
                        var i2 = new Object();
                        i2.text = "No Use";
                        i2.leaf = true;
                        items.push(i2);
                        entry.items = items;


                        //entry.items = 'src/demos/list.js';
                        //entry.leaf = true;
                        //wordArray2[i]=entry;
                        sink.StructureStore.add(entry);

                    //}   
                    //alert(wordArray);
                    //alert('in setup');
                    //alert(wordArray2[1].source);
                    //alert(wordArray2[2].source);
                }   
);}; 

//var wordArray2 = [{
//        text: 'List',
//        card: demos.List,
//        source: 'src/demos/list.js',
//        leaf: true
//}];
//wordArray2[1]= {
//        text: 'Form',
//        card: demos.List,
//        source: 'src/demos/list.js',
//        leaf: true
//};
//var b = new function(){
//        //alert(hh);
//        $.get(
//                "http://localhost:8080/fetch",
//                {paramOne : 1, paramX : 'abc'},
//                function(data) {
//                    wordList = eval('(' + data + ')');
//                    //alert('in callback' + wordList.words[0]);
//                    var i;
//                    for (i=0;i<=3;i++) {
//                        var entry = new Object();
//                        entry.text = 'List';
//                        entry.card = demos.List;
//                        entry.source = 'src/demos/list.js';
//                        entry.leaf = true;
//                        entry = {text: 'List', card: demos.List, source: 'src/demos/list.js', leaf: true}
//                        wordArray2[i]=entry;
//wordArray2[1]= {
//        text: 'Fuck',
//        card: demos.List,
//        source: 'src/demos/list.js',
//        leaf: true
//};
    //    text: 'Forms',
    //    card: demos.Forms,
    //    source: 'src/demos/forms.js',
    //    leaf: true
//
//                    }   
//                    //alert(wordArray);
//                    alert(wordArray2.valueOf());
//                    //alert(wordArray2[1].source);
//                    //alert(wordArray2[2].source);
//                }   
//            )   
//}; 
//sink.Structure = [{
//    text: 'User Interface',
//    cls: 'launchscreen',
//    items: //wordArray2
//    [{
//        text: 'Buttons',
//        card: demos.Buttons,
//        source: 'src/demos/buttons.js',
//        leaf: true
//    },
//    {
//        text: 'Forms',
//        card: demos.Forms,
//        source: 'src/demos/forms.js',
//        leaf: true
//    },
//    {
//        text: 'List',
//        card: demos.List,
//        source: 'src/demos/list.js',
//        leaf: true
//    },
//    {
//        text: 'Nested List',
//        card: demos.NestedList,
//        source: 'src/demos/nestedlist.js',
//        leaf: true
//    },
//    {
//        text: 'Icons',
//        card: demos.Icons,
//        source: 'src/demos/icons.js',
//        leaf: true
//    },
//    {
//        text: 'Toolbars',
//        card: demos.Toolbars,
//        source: 'src/demos/toolbars.js',
//        leaf: true
//    },
//    {
//        text: 'Carousel',
//        card: demos.Carousel,
//        source: 'src/demos/carousel.js',
//        leaf: true
//    },
//    {
//        text: 'Tabs',
//        card: demos.Tabs,
//        source: 'src/demos/tabs.js',
//        leaf: true
//    },
//    {
//        text: 'Bottom Tabs',
//        card: demos.BottomTabs,
//        source: 'src/demos/bottomtabs.js',
//        leaf: true
//    },
//    /*{
//        text: 'Picker',
//        card: demos.Picker,
//        source: 'src/demos/picker.js',
//        leaf: true
//    },*/
//    {
//        text: 'Map',
//        card: demos.Map,
//        source: 'src/demos/map.js',
//        leaf: true
//    },
//    {
//        text: 'Overlays',
//        card: demos.SheetsOverlays,
//        source: 'src/demos/sheets_overlays.js',
//        leaf: true
//    }]
//},
//{
//    text: 'Animations',
//    source: 'src/demos/animations.js',
//    card: Ext.is.Phone ? false : demos.Animations,
//    items: [{
//        text: 'Slide',
//        card: demos.Animations.slide,
//        preventHide: true,
//        cardSwitchAnimation: 'slide',
//        leaf: true
//    },
//    {
//        text: 'Slide (cover)',
//        card: demos.Animations.slidecover,
//        preventHide: true,
//        cardSwitchAnimation: {
//            type: 'slide',
//            cover: true
//        },
//        leaf: true
//    },
//    {
//        text: 'Slide (reveal)',
//        card: demos.Animations.slidereveal,
//        preventHide: true,
//        cardSwitchAnimation: {
//            type: 'slide',
//            reveal: true
//        },
//        leaf: true
//    },
//    {
//        text: 'Pop',
//        card: demos.Animations.pop,
//        preventHide: true,
//        cardSwitchAnimation: {
//            type: 'pop',
//            scaleOnExit: true
//        },
//        leaf: true
//    },
//    {
//        text: 'Fade',
//        card: demos.Animations.fade,
//        preventHide: true,
//        cardSwitchAnimation: {
//            type: 'fade',
//            duration: 600
//        },
//        leaf: true
//    },
//    {
//        text: 'Flip',
//        card: demos.Animations.flip,
//        preventHide: true,
//        cardSwitchAnimation: {
//            type: 'flip',
//            duration: 400
//        },
//        leaf: true
//    },
//    {
//        text: 'Cube',
//        card: demos.Animations.cube,
//        preventHide: true,
//        cardSwitchAnimation: {
//            type: 'cube',
//            duration: 400
//        },
//        leaf: true
//    }]
//},
//{
//    text: 'Touch Events',
//    card: demos.Touch,
//    source: 'src/demos/touch.js',
//    leaf: true
//},
//{
//    text: 'Data',
//    items: [
//        {
//            text: 'Nested Loading',
//            card: demos.Data.nestedLoading,
//            source: 'src/demos/data/nestedLoading.js',
//            leaf: true
//        },
//        {
//            text: 'JSON P',
//            card: demos.Data.jsonp,
//            source: 'src/demos/data/jsonp.js',
//            leaf: true
//        },
//        {
//            text: 'YQL',
//            card: demos.Data.yql,
//            source: 'src/demos/data/yql.js',
//            leaf: true
//        },
//        {
//            text: 'AJAX',
//            card: demos.Data.ajax,
//            source: 'src/demos/data/ajax.js',
//            leaf: true
//        }
//    ]
//},
//{
//    text: 'Media',
//    items: [{
//        text: 'Video',
//        card: demos.Video,
//        source: 'src/demos/video.js',
//        leaf: true
//    }, {
//        text: 'Audio',
//        card: demos.Audio,
//        source: 'src/demos/audio.js',
//        leaf: true
//    }]
//}
//];

if (!Ext.is.Android) {
    //sink.Structure.push({
    //    text: 'Simulator',
    //    leaf: true,
    //    card: demos.Simulator,
    //    source: 'src/demos/simulator.js'
    //});
            //$.get(
                //"http://localhost:8080/fetch",
                //{paramOne : 1, paramX : 'abc'},
                //function(data) {
                //    wordList = eval('(' + data + ')');
                //    //alert('in callback' + wordList.words[0]);
                //    var i;
                //    for (i=0;i<=10;i++) {
                //        wordArray[i] = {word: wordList.words[i]}
                //    }   
                //    //alert(wordArray);
                //    wordList = eval('(' + data + ')');
                //    //alert('in callback' + wordList.words[0]);


                //    var i;
                //    for (i=0;i<=3;i++) {
                //        var entry = new Object();
                //        entry.text = wordList.words[i];
                //        entry.card = demos.List;
                //        entry.source = 'src/demos/list.js';
                //        entry.leaf = true;
                //        wordArray2[i]=entry;

                //    }   
                //    //alert(wordArray);
                //    //alert('in setup');
                //    //alert(wordArray2[1].source);
                //    //alert(wordArray2[2].source);
                //);

//alert('sink.Structure' + sink.Structure);
//    sink.Structure.push({
//        text: 'XXXX',
//        leaf: true,
//        card: demos.List,
//        source: 'src/demos/list.js'
//    });
//    });
    //sink.Structure.push({
    //    text: 'YYY',
    //    leaf: true,
    //    card: demos.Simulator,
    //    source: 'src/demos/simulator.js'
    //});

}


Ext.regModel('Demo', {
    fields: [
        {name: 'text', type: 'string'},
        {name: 'card', type: 'object'},
        {name: 'source',      type: 'string'},
        {name: 'cls', type: 'string'},
        {name: 'leaf', type: 'boolean'},
        //{name: 'cardSwitchAnimation', type: 'object'}
    ]
});

function callback() {
alert('success');
    

}

sink.StructureStore = new Ext.data.TreeStore({
    model: 'Demo',
    //root: {
    //    items: sink.Structure
    //},
    //proxy: {
    //    type: 'scripttag',
    //    url: 'http://localhost:8080/fetch',
    //    callbackParam: 'callback',
    //    callbackPrefix: 'callback',
    //    reader: {
    //        type: 'tree',
    //        root: 'items'
    //    }
    //}
    proxy: {
        type: 'ajax',
        url: 'structure.json',
        reader: {        
            type: 'tree',
            root: 'items'
        }                
    },
    autoLoad: true
});
