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
					"task": "Do laundry",
					"description": "Laundry at saturday 10 pm"
				},
				{
					"task": "Pay bills",
					"description": "Pay Bills for my home rent"
				}
			];
			var oModel = new JSONModel(oData);
			return oModel;
		}

	};
});