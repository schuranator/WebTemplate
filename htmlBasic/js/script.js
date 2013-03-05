var App = {
	init: function () {
		this.cache();
		this.bindListeners();
	},
	cache: function(){
	
		App.dom = {};
		App.dom.page = $("#page");
		App.dom.header = $("#page #header");
		App.dom.main = $("#page #main");
		App.dom.footer = $("#page #footer");
	
		App.dom.doc = $(document);
		App.dom.win = $(window);
	
		App.win = {};
		App.win.w = 0;
		App.win.h = 0;
	},
	bindListeners: function(){
		//$().on('click',function);
	}
};