
sap.ui.define(["sap/ui/core/Control",
    "./VTControlRenderer"
], function(Control, VTControlRenderer) {

    var VTControl = Control.extend("com.cerner.scp.augero.integration.UI5IntegrationProject.controls.VTControl", {
        metadata: {
            properties: {
                Property1: {
                    type: "string"
                }
            }
        },
        init: function() {
            //var libraryPath = jQuery.sap.getModulePath("com.cerner.scp.augero.integration.UI5IntegrationProject");
            //jQuery.sap.includeStyleSheet(libraryPath + "/css/controlStryle.css");
        }
    });

    return VTControl;
});