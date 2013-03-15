/*global window:true, _:true, Backbone:true, jQuery:true, umobile:true, config:true, console:true, Handlebars:true */
(function ($, _, Backbone, umobile, config) {
	'use strict';

	/**
	...

	@class Login
	@submodule view
	@namespace view
	@constructor
	**/
	umobile.view.Login = umobile.view.Screen.extend({
		/**
		Object hash of valid DOM selectors for
		the Login screen.

		@property selectors
		@type Object
		**/
		selectors: {
			template: '#views-partials-login'
		}
	});

})(jQuery, _, Backbone, umobile, config);