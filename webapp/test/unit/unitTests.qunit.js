/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sap/employeeList/Employees/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});