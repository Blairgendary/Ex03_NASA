var app = new Framework7 ({
    
    root: '#app',
    
    routes: [
    {
        path:'/',
        url:  'index.html',
    },
    {
        path: '/page2/',
        url: 'pages/page2.html',
    },
    {
        path: '/page3/',
        url: 'pages/page3.html',
    },
    {
        path: 'today',
        url: '../imgs/today.png',
    }
    ]
});

var mainView = app.view.create('.view-main');