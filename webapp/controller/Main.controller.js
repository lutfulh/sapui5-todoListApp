sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/Dialog",
	"sap/ui/core/Fragment"
], function (Controller) {
	"use strict";

	return Controller.extend("Home.todoLIstApp.controller.Main", {
		onInit: function () {

		},
		
		onPressItem: function (oEvent) {
			var oView = this.getView();
		
	
			this.oDialog = sap.ui.xmlfragment("Home.todoLIstApp.fragments.TaskDialog", this);
			oView.addDependent(this.oDialog);
			var sPath = oEvent.getSource().getBindingContext("todo").getPath();
					
			this.oDialog.bindElement({
				path: sPath,
				model: "todo"
			});
		 this.oDialog.open();
			
		},

		onPressOk: function (oEvent) {
			var oDialog = oEvent.getSource().getParent();
			oDialog.close();
			oDialog.destroy();
		},
		
		onAdd: function(oEvent){
			var oView = this.getView();
			this._oDialog = sap.ui.xmlfragment("Home.todoLIstApp.fragments.AddTask", this);
			oView.addDependent(this._oDialog);
		    this._oDialog.open();
		},
		
		onPressAddTask: function(oEvent){
			var oData = this.getView().getModel("todo").oData;
			var taskTitle = sap.ui.getCore().byId("taskTitle").getValue();
			var taskDetail = sap.ui.getCore().byId("taskDetail").getValue();
			oData.push({	"task": taskTitle,
					"description": taskDetail});
			var oDialog = oEvent.getSource().getParent();
			oDialog.close();
			oDialog.destroy();
			this.getView().getModel("todo").refresh(true);
		},
		
		onDelete: function(oEvent){
			var sPath = oEvent.getSource().getBindingContext("todo").getPath();
			var index = sPath.substr(1);
			var oData = this.getView().getModel("todo").oData;
			oData.splice(index, 1);
			var oDialog = oEvent.getSource().getParent();
			oDialog.close();
			oDialog.destroy();
			this.getView().getModel("todo").refresh(true);
		}
	});
});