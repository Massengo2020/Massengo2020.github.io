ol.proj.proj4.register(proj4);
ol.proj.get("USER:100000").setExtent([293686.936906, 9841157.998246, 301874.369026, 9845558.409646]);
var wms_layers = [];

var format_Sondages_Massengo_2020_Modifie_0 = new ol.format.GeoJSON();
var features_Sondages_Massengo_2020_Modifie_0 = format_Sondages_Massengo_2020_Modifie_0.readFeatures(json_Sondages_Massengo_2020_Modifie_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Sondages_Massengo_2020_Modifie_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sondages_Massengo_2020_Modifie_0.addFeatures(features_Sondages_Massengo_2020_Modifie_0);cluster_Sondages_Massengo_2020_Modifie_0 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Sondages_Massengo_2020_Modifie_0
});
var lyr_Sondages_Massengo_2020_Modifie_0 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Sondages_Massengo_2020_Modifie_0, 
                style: style_Sondages_Massengo_2020_Modifie_0,
                interactive: true,
                title: '<img src="styles/legend/Sondages_Massengo_2020_Modifie_0.png" /> Sondages_Massengo_2020_Modifie'
            });
var format_Bornes_proposees_1 = new ol.format.GeoJSON();
var features_Bornes_proposees_1 = format_Bornes_proposees_1.readFeatures(json_Bornes_proposees_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Bornes_proposees_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bornes_proposees_1.addFeatures(features_Bornes_proposees_1);cluster_Bornes_proposees_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Bornes_proposees_1
});
var lyr_Bornes_proposees_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Bornes_proposees_1, 
                style: style_Bornes_proposees_1,
                interactive: true,
                title: '<img src="styles/legend/Bornes_proposees_1.png" /> Bornes_proposees'
            });
var format_Limite_reserve_2 = new ol.format.GeoJSON();
var features_Limite_reserve_2 = format_Limite_reserve_2.readFeatures(json_Limite_reserve_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_Limite_reserve_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_reserve_2.addFeatures(features_Limite_reserve_2);
var lyr_Limite_reserve_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limite_reserve_2, 
                style: style_Limite_reserve_2,
                interactive: true,
                title: '<img src="styles/legend/Limite_reserve_2.png" /> Limite_reserve'
            });

lyr_Sondages_Massengo_2020_Modifie_0.setVisible(true);lyr_Bornes_proposees_1.setVisible(true);lyr_Limite_reserve_2.setVisible(true);
var layersList = [lyr_Sondages_Massengo_2020_Modifie_0,lyr_Bornes_proposees_1,lyr_Limite_reserve_2];
lyr_Sondages_Massengo_2020_Modifie_0.set('fieldAliases', {'Id': 'Id', 'x': 'x', 'y': 'y', 'z': 'z', });
lyr_Bornes_proposees_1.set('fieldAliases', {'Id': 'Id', 'X': 'X', 'Y': 'Y', });
lyr_Limite_reserve_2.set('fieldAliases', {'Text': 'Text', });
lyr_Sondages_Massengo_2020_Modifie_0.set('fieldImages', {'Id': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'z': 'TextEdit', });
lyr_Bornes_proposees_1.set('fieldImages', {'Id': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Limite_reserve_2.set('fieldImages', {'Text': 'TextEdit', });
lyr_Sondages_Massengo_2020_Modifie_0.set('fieldLabels', {'Id': 'inline label', 'x': 'inline label', 'y': 'inline label', 'z': 'inline label', });
lyr_Bornes_proposees_1.set('fieldLabels', {'Id': 'inline label', 'X': 'inline label', 'Y': 'inline label', });
lyr_Limite_reserve_2.set('fieldLabels', {'Text': 'inline label', });
lyr_Limite_reserve_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});