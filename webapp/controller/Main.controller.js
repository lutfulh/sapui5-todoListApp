sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("Home.todoLIstApp.controller.Main", {
		onInit: function () {

		},
		
				onPressItem: function (oEvent) {
			var oView = this.getView();
			var oDialog = oView.byId("idTaskDialog");
			// create dialog lazily
			if (!oDialog) {
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment("mytodo.mytodo.fragment.TaskDialog", this);
				oView.addDependent(oDialog);
			}
			var sPath = oEvent.getSource().getBindingContext("todo").getPath();

			oDialog.bindElement({
				path: sPath,
				model: "todo"
			});
			oDialog.open();
		},

		onPressOk: function (oEvent) {
			var oDialog = oEvent.getSource().getParent();
			oDialog.close();
			oDialog.destroy();
		}
	});
});