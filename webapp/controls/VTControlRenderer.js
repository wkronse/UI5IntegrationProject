sap.ui.define([],

    function() {

        var VTControlRenderer = {};

        VTControlRenderer.render = function(oRm, oControl) {

            
            oRm.write("<div>");
            oRm.write (oControl.getProperty("Property1"));
            oRm.write("</div>");
        };

        return VTControlRenderer;

    }, true);