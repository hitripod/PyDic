Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        var tabpanel = new Ext.TabPanel({
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
            fullscreen: true,
            ui: 'light',
            cardSwitchAnimation: {
                type: 'slide',
                cover: true
            },
            
            defaults: {
                scroll: 'vertical'
            },
            items: [{
//------------------------
                title: 'About',
                html: "<h1>" + wordList.words[0] + "</h2>",
               //     new function() {
               //                  Ext.util.JSONP.request({
               //                 //url: 'http://pydictionary.appspot.com/test',
               //                 url: 'http://localhost:8080/test',
               //                 callbackKey: 'callback',
               //                 params: {
               //                     //key: '23f6a0ab24185952101705',
               //                     //q: '94301', // Palo Alto
               //                     //format: 'json',
               //                     //num_of_days: 5
               //                 },  
               //                 callback: function(result) {

               //                     alert(result.str)
               //                     //var weather = result.data.weather;
               //                     //if (weather) {
               //                     //    demos.Data.update(weatherTpl.applyTemplate(weather));
               //                     //    demos.Data.scroller.scrollTo({x: 0, y: 0});
               //                     //} 
               //                     //else {
               //                     //    alert('There was an error retrieving the weather.');
               //                     //} 
               //                     //Ext.getBody().unmask();
               //                 }   
               //             });  
               //             return '<h1>Favorites Card</h1>';
               // },
                iconCls: 'info',
                
                cls: 'card1'
//------------------------
            }, {
                title: 'Favorites',
                html: '<h1>Favorites Card</h1>',
                iconCls: 'favorites',
                cls: 'card2',
                badgeText: '4'
            }, {
                title: 'Downloads',
                id: 'tab3',
                html: '<h1>Downloads Card</h1>',
                badgeText: 'Text can go here too, but it will be cut off if it is too long.',
                cls: 'card3',
                iconCls: 'download'
            }, {
                title: 'Settings',
                html: '<h1>Settings Card</h1>',
                cls: 'card4',
                iconCls: 'settings'
            }, {
                title: 'User',
                html: '<h1>User Card</h1>',
                cls: 'card5',
                iconCls: 'user'
            }]
        });
    }
});

function req() {
                Ext.util.JSONP.request({
               //url: 'http://pydictionary.appspot.com/test',
               url: 'http://localhost:8080/test',
               callbackKey: 'callback',
               params: {
                   //key: '23f6a0ab24185952101705',
                   //q: '94301', // Palo Alto
                   //format: 'json',
                   //num_of_days: 5
               },  
               callback: function(result) {

                   alert(result.str)
                   //var weather = result.data.weather;
                   //if (weather) {
                   //    demos.Data.update(weatherTpl.applyTemplate(weather));
                   //    demos.Data.scroller.scrollTo({x: 0, y: 0});
                   //} 
                   //else {
                   //    alert('There was an error retrieving the weather.');
                   //} 
                   //Ext.getBody().unmask();
               }   
           });  
           return '<h1>Return Value</h1>';
}

var wordList;
$(document).ready(function(){
        hh = req(); 
        alert(hh);
        $.get(
                "http://localhost:8080/fetch",
                {paramOne : 1, paramX : 'abc'},
                function(data) {
                    wordList = eval('(' + data + ')');
                    alert(wordList.words[0])
                }
            );
        
        });


