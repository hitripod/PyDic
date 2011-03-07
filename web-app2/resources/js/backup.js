
Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {

        

var test = new  function() {
                            //demos.Data.update('');
                            //Ext.getBody().mask(false, '<div class="demos-loading">Loading&hellip;</div>');
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
                           };





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
                title: 'About',
                //html: '<h1>Bottom Tabs</h1><p>Docking tabs to the bottom will automatically change their style. The tabs below are type="light", though the standard type is dark. Badges (like the 4 &amp; Long title below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>',
                text: 'JSONP',
                handler: function() {
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
                           },





        var tabpanel = new Ext.TabPanel({
            tabBar: {
                dock: 'bottom',
                layout: {
                    pack: 'center'
                }
            },
                iconCls: 'info',
                cls: 'card1'
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

var makeJSONPRequest = function() {
    //demos.Data.update('');
    //Ext.getBody().mask(false, '<div class="demos-loading">Loading&hellip;</div>');
    Ext.util.JSONP.request({
        url: 'http://pydictionary.appspot.com/test',
        callbackKey: 'callback',
        params: {
            key: '23f6a0ab24185952101705',
            q: '94301', // Palo Alto
            format: 'json',
            num_of_days: 5
        },
        callback: function(result) {
            alert()
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
};

//Ext.util.JSONP.request({
//url: 'http://pydictionary.appspot.com/test',
//callbackKey: 'callback',
//params: {
//id:'someID",
//},
//scope: this,
//callback: function(data) {
//do something with the returned JSON object
//})
