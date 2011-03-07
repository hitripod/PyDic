Ext.regModel('Contact', {
    fields: ['firstName', 'lastName']
});

var ListStore = new Ext.data.Store({
    model: 'Contact',
    sorters: 'firstName',
    getGroupString : function(record) {
        return record.get('firstName')[0];
    },  
    data: [
        {firstName: 'Julio', lastName: 'Benesh'},
        {firstName: 'Julio', lastName: 'Minich'},
        {firstName: 'Tania', lastName: 'Ricco'},
        {firstName: 'Odessa', lastName: 'Steuck'},
        {firstName: 'Nelson', lastName: 'Raber'},
        {firstName: 'Tyrone', lastName: 'Scannell'}
       ]
    
});

demos.List = new Ext.TabPanel ({
    items: [{
        title: 'Simple',
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
            itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>'
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
            itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>',
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
                Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('firstName'), Ext.emptyFn);
            },
            store: demos.ListStore, //getRange(0, 9),
            itemTpl: '<div class="contact"><strong>{firstName}</strong> {lastName}</div>'
        }]
    }]
});

