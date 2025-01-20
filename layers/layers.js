var wms_layers = [];


        var lyr_XYZLayer_0 = new ol.layer.Tile({
            'title': 'XYZ Layer',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_milieuhumidev3r_1 = new ol.format.GeoJSON();
var features_milieuhumidev3r_1 = format_milieuhumidev3r_1.readFeatures(json_milieuhumidev3r_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_milieuhumidev3r_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_milieuhumidev3r_1.addFeatures(features_milieuhumidev3r_1);
var lyr_milieuhumidev3r_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_milieuhumidev3r_1, 
                style: style_milieuhumidev3r_1,
                popuplayertitle: 'milieu-humide-v3r',
                interactive: true,
                title: '<img src="styles/legend/milieuhumidev3r_1.png" /> milieu-humide-v3r'
            });

lyr_XYZLayer_0.setVisible(true);lyr_milieuhumidev3r_1.setVisible(true);
var layersList = [lyr_XYZLayer_0,lyr_milieuhumidev3r_1];
lyr_milieuhumidev3r_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOM': 'NOM', 'TYPE': 'TYPE', 'V_ID_MH': 'V_ID_MH', });
lyr_milieuhumidev3r_1.set('fieldImages', {'OBJECTID': '', 'NOM': '', 'TYPE': '', 'V_ID_MH': '', });
lyr_milieuhumidev3r_1.set('fieldLabels', {'OBJECTID': 'inline label - always visible', 'NOM': 'inline label - always visible', 'TYPE': 'inline label - always visible', 'V_ID_MH': 'inline label - always visible', });
lyr_milieuhumidev3r_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});