sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function (JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function () {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
						createTodoModel: function() {
			var oData = [
				{
					"task": "do laundry",
					"description": "laundry at saturday 10 pm",
					"status": 1
				},
				{
					"task": "Pay Bills",
					"description": "Pay Bills for my home rent",
					"status": 2
				},
				{
					"task": "Exercise",
					"description": "Going to gym in the eevening",
					"status": 3
				}
			];
			var oModel = new JSONModel(oData);
			return oModel;
		}

	};
});