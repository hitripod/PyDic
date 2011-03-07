Ext.regModel('WordList', {
    fields: ['word']
});

demos.ListStore = new Ext.data.Store({
    model: 'WordList',

    sorters: 'word',
    getGroupString : function(record) {
        return record.get('word')[0];
    },
    data: new Array(),
    clearOnPageLoad: true
});



//var sourceConfig = { 
//    items: [this.codeBox],
//    bodyCls: 'ux-code',
//    scroll: {
//        direction: 'both',
//        eventTarget: 'parent'
//    }   
//};


demos.List = new Ext.TabPanel ({
    items: [{
        title: 'Simple',
        layout: 'card',
        //Ext.is.Phone ? 'fit' : {
        //    type: 'vbox',
        //    align: 'center',
        //    pack: 'center'
        //},
        cls: 'demo-list',
        items: [{
            width: Ext.is.Phone ? undefined : 300,
            height: 500,
            xtype: 'list',
            store: demos.ListStore,
            itemTpl: '<div class="wordlist"><strong>{word}</strong></div>',
            //listener:{}
            //onItemTap: function(item, index, e) {
//----------//--------------- test addSubView--------------------------
            //Ext.regModel('Contact', {
            //    fields: ['firstName', 'lastName']
            //});
            //
            //var store = new Ext.data.JsonStore({
            //    model  : 'Contact',
            //    sorters: 'lastName',
            //
            //    getGroupString : function(record) {
            //        return record.get('lastName')[0];
            //    },
            //
            //    data: [
            //        {firstName: 'Tommy',   lastName: 'Maintz'},
            //        {firstName: 'Rob',     lastName: 'Dougan'},
            //        {firstName: 'Ed',      lastName: 'Spencer'},
            //        {firstName: 'Jamie',   lastName: 'Avins'},
            //        {firstName: 'Aaron',   lastName: 'Conran'},
            //        {firstName: 'Dave',    lastName: 'Kaneda'},
            //        {firstName: 'Michael', lastName: 'Mullany'},
            //        {firstName: 'Abraham', lastName: 'Elias'},
            //        {firstName: 'Jay',     lastName: 'Robinson'}
            //    ]
            //});
            //
            //var list = new Ext.List({
            //    //fullscreen: false,

            //    floating     : true,
            //    width        : 380,
            //    height       : 420,
            //    centered     : true,
            //    modal        : true,
            //    hideOnMaskTap: false,

            //    
            //    itemTpl : '<div class="wordlist2"><strong>{firstName} {lastName}</strong></div>',
            //    onItemTap: function(item, index, e) {
            //    alert("dismiss");
            //    demos.List.remove(list);
            //    },
            //    grouped : true,
            //    indexBar: true,
            //    
            //    store: store
            //});
            //list.show();
//----------//--------------- test addSubView--------------------------
            //            }
        }]
    }, {
        title: 'Grouped',
        layout: Ext.is.Phone ? 'fit' : {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        cls: 'demo-list',
        items: [{
            width: Ext.is.Phone ? undefined : 300,
            height: 500,
            xtype: 'list',
            store: demos.ListStore,
            itemTpl: '<div class="wordlist"><strong>{word}</strong></div>',
            grouped: true,
            indexBar: true
        }]
    }, {
        title: 'Disclosure',
        layout: Ext.is.Phone ? 'fit' : {
            type: 'vbox',
            align: 'center',
            pack: 'center'
        },
        cls: 'demo-list',
        items: [{
            width: Ext.is.Phone ? undefined : 300,
            height: Ext.is.Phone ? undefined : 500,
            xtype: 'list',
            onItemDisclosure: function(record, btn, index) {
                Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('word'), Ext.emptyFn);
            },
            store: demos.ListStore, //getRange(0, 9),
            itemTpl: '<div class="wordlist"><strong>{word}</strong></div>'
        }]
    }]
});
