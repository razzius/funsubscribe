define([
	"jquery",
	"underscore",
	"backbone",
	"events",			// event aggregator

	], function ( $, _, Backbone, vent ) { 
		var Service = Backbone.Model.extend({ 
			defaults: { 
			},

			initialize: function () { 
			},

			validate: function () { 
			}
		});

		return Service;
	}
);


