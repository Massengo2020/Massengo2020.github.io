ol.proj.proj4.register(proj4);
ol.proj.get("USER:100000").setExtent([294337.482096, 9840557.295082, 302161.010619, 9845783.538832]);
var wms_layers = [];

var format_Sondages_Massengo_2020_0 = new ol.format.GeoJSON();
var features_Sondages_Massengo_2020_0 = format_Sondages_Massengo_2020_0.readFeatures(json_Sondages_Massengo_2020_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Sondages_Massengo_2020_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sondages_Massengo_2020_0.addFeatures(features_Sondages_Massengo_2020_0);cluster_Sondages_Massengo_2020_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Sondages_Massengo_2020_0
});
var lyr_Sondages_Massengo_2020_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Sondages_Massengo_2020_0, 
                style: style_Sondages_Massengo_2020_0,
                interactive: true,
                title: '<img src="styles/legend/Sondages_Massengo_2020_0.png" /> Sondages_Massengo_2020'
            });
var format_Limite_reserve_Massengo_1 = new ol.format.GeoJSON();
var features_Limite_reserve_Massengo_1 = format_Limite_reserve_Massengo_1.readFeatures(json_Limite_reserve_Massengo_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Limite_reserve_Massengo_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_reserve_Massengo_1.addFeatures(features_Limite_reserve_Massengo_1);
var lyr_Limite_reserve_Massengo_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_reserve_Massengo_1, 
                style: style_Limite_reserve_Massengo_1,
                interactive: true,
                title: '<img src="styles/legend/Limite_reserve_Massengo_1.png" /> Limite_reserve_Massengo'
            });
var format_Bornes_Massengo_2 = new ol.format.GeoJSON();
var features_Bornes_Massengo_2 = format_Bornes_Massengo_2.readFeatures(json_Bornes_Massengo_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Bornes_Massengo_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bornes_Massengo_2.addFeatures(features_Bornes_Massengo_2);
var lyr_Bornes_Massengo_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bornes_Massengo_2, 
                style: style_Bornes_Massengo_2,
                interactive: true,
                title: '<img src="styles/legend/Bornes_Massengo_2.png" /> Bornes_Massengo'
            });

lyr_Sondages_Massengo_2020_0.setVisible(true);lyr_Limite_reserve_Massengo_1.setVisible(true);lyr_Bornes_Massengo_2.setVisible(true);
var layersList = [lyr_Sondages_Massengo_2020_0,lyr_Limite_reserve_Massengo_1,lyr_Bornes_Massengo_2];
lyr_Sondages_Massengo_2020_0.set('fieldAliases', {'Id': 'Id', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_Limite_reserve_Massengo_1.set('fieldAliases', {'Layer': 'Layer', });
lyr_Bornes_Massengo_2.set('fieldAliases', {'Id': 'Id', 'X': 'X', 'Y': 'Y', });
lyr_Sondages_Massengo_2020_0.set('fieldImages', {'Id': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', });
lyr_Limite_reserve_Massengo_1.set('fieldImages', {'Layer': 'TextEdit', });
lyr_Bornes_Massengo_2.set('fieldImages', {'Id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Sondages_Massengo_2020_0.set('fieldLabels', {'Id': 'no label', 'x': 'no label', 'y': 'no label', 'z': 'no label', });
lyr_Limite_reserve_Massengo_1.set('fieldLabels', {'Layer': 'inline label', });
lyr_Bornes_Massengo_2.set('fieldLabels', {'Id': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_Bornes_Massengo_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});