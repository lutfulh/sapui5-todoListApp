sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.employeeList.Employees.controller.Home", {
		onInit: function () {

		},
		//when single item is pressed in the main view, it takes to detail view with another navigation.
		onListItemPress: function(oEvent){
			var oItem = oEvent.getSource();
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail", {
				employeePath: window.encodeURIComponent(oItem.getBindingContext("employee").getPath().substr(1))
		
			});
		}
	});
});