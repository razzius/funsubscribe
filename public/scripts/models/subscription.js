define([
	"jquery",
	"underscore",
	"backbone",
	"events",			// event aggregator

	], function ( $, _, Backbone, vent ) { 
		var Subscription = Backbone.Model.extend({ 
			defaults: { 
			},

			initialize: function () { 
			},

			// idAttribute: 

			validate: function () { 
			}
		});

		return Subscription;
	}
);


