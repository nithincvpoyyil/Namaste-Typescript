var version= new Date().getTime();

require.config({
    urlArgs: version,
    baseUrl:"./",
    paths: {
        'jquery': 'libs/jquery'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});

require( ['app-bin/crMain', 'jquery'], function(App, $) {
    new App.CrMain($);
});

var reqConfigObject = {
	"baseUrl": "",
	"waitSeconds": 0,
	"paths": {},
	"shim": {},
	"map": {}
};

reqConfigObject=null;

