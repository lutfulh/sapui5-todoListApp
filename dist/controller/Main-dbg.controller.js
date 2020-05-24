sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/Filter",
	"sap/m/Dialog",
	"sap/ui/core/Fragment"

], function (Controller, Filter) {
	"use strict";

	return Controller.extend("Home.todoLIstApp.controller.Main", {
		
		onInit: function () {
			// set explored app's demo model on this sample
		

		},
		onSearch: function (oEvent) {
			// add filter for search
			var aFilters = [];

			var sQuery = oEvent.getSource().getValue();
			if (sQuery) {
				var filters = new Filter("task", sap.ui.model.FilterOperator.Contains, sQuery);
				aFilters.push(filters);

			}
			var oList = this.byId("idList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilters);

		},
		onAdd: function (oEvent) {

			var oView = this.getView();
			this._oDialog = sap.ui.xmlfragment("Home.todoLIstApp.fragments.AddTask", this);
			oView.addDependent(this._oDialog);
			this._oDialog.open();
		},

		onPressAddTask: function (oEvent) {
			var oModel = this.getView().getModel("todo");
			var oData = oModel.getData();

			var taskTitle = sap.ui.getCore().byId("taskTitle").getValue();

			var taskDetail = sap.ui.getCore().byId("taskDetail").getValue();

			if (taskTitle.length > 0 && taskDetail.length > 0) {
				oData.Todos.push({
					"task": taskTitle,
					"description": taskDetail,
					"id": oData.Todos.length + 1
				});
			}

			var oDialog = oEvent.getSource().getParent();
			oDialog.close();
			oDialog.destroy();
			this.getView().getModel("todo").refresh(true);
		},
		onPressOk: function (oEvent) {
			var oDialog = oEvent.getSource().getParent();
			oDialog.close();
			oDialog.destroy();s
		},
		handleDelete: function (oEvent) {
			
			var oList= oEvent.getSource();
		    var sBindingPath=oEvent.getParameter("listItem").getBindingContextPath()
		    var selectedIndex = sBindingPath.split("/")[2];
		  	var oModel = this.getView().getModel("todo").getData();
		  	oModel.Todos.splice(selectedIndex,1)
		    this.getView().getModel("todo").refresh(true);
			console.log(oModel);
		}

	});
});