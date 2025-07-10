var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_MUNICIPIOSSANTACRUZ_1 = new ol.format.GeoJSON();
var features_MUNICIPIOSSANTACRUZ_1 = format_MUNICIPIOSSANTACRUZ_1.readFeatures(json_MUNICIPIOSSANTACRUZ_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MUNICIPIOSSANTACRUZ_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MUNICIPIOSSANTACRUZ_1.addFeatures(features_MUNICIPIOSSANTACRUZ_1);
var lyr_MUNICIPIOSSANTACRUZ_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MUNICIPIOSSANTACRUZ_1, 
                style: style_MUNICIPIOSSANTACRUZ_1,
                popuplayertitle: 'MUNICIPIOS SANTA CRUZ',
                interactive: true,
                title: '<img src="styles/legend/MUNICIPIOSSANTACRUZ_1.png" /> MUNICIPIOS SANTA CRUZ'
            });
var format_PRODUCCINDECAADEAZUCAR2022VERANO_2 = new ol.format.GeoJSON();
var features_PRODUCCINDECAADEAZUCAR2022VERANO_2 = format_PRODUCCINDECAADEAZUCAR2022VERANO_2.readFeatures(json_PRODUCCINDECAADEAZUCAR2022VERANO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRODUCCINDECAADEAZUCAR2022VERANO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRODUCCINDECAADEAZUCAR2022VERANO_2.addFeatures(features_PRODUCCINDECAADEAZUCAR2022VERANO_2);
var lyr_PRODUCCINDECAADEAZUCAR2022VERANO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRODUCCINDECAADEAZUCAR2022VERANO_2, 
                style: style_PRODUCCINDECAADEAZUCAR2022VERANO_2,
                popuplayertitle: 'PRODUCCIÓN DE CAÑA DE AZUCAR 2022 VERANO',
                interactive: true,
    title: 'PRODUCCIÓN DE CAÑA DE AZUCAR 2022 VERANO<br />\
    <img src="styles/legend/PRODUCCINDECAADEAZUCAR2022VERANO_2_0.png" /> 5 - 24000<br />\
    <img src="styles/legend/PRODUCCINDECAADEAZUCAR2022VERANO_2_1.png" /> 24000 - 73000<br />\
    <img src="styles/legend/PRODUCCINDECAADEAZUCAR2022VERANO_2_2.png" /> 73000 - 143000<br />\
    <img src="styles/legend/PRODUCCINDECAADEAZUCAR2022VERANO_2_3.png" /> 143000 - 243000<br />\
    <img src="styles/legend/PRODUCCINDECAADEAZUCAR2022VERANO_2_4.png" /> 243000 - 549538<br />' });
var format_PRODUCCINDEMAIZ2024INVIERNO_3 = new ol.format.GeoJSON();
var features_PRODUCCINDEMAIZ2024INVIERNO_3 = format_PRODUCCINDEMAIZ2024INVIERNO_3.readFeatures(json_PRODUCCINDEMAIZ2024INVIERNO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRODUCCINDEMAIZ2024INVIERNO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRODUCCINDEMAIZ2024INVIERNO_3.addFeatures(features_PRODUCCINDEMAIZ2024INVIERNO_3);
var lyr_PRODUCCINDEMAIZ2024INVIERNO_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRODUCCINDEMAIZ2024INVIERNO_3, 
                style: style_PRODUCCINDEMAIZ2024INVIERNO_3,
                popuplayertitle: 'PRODUCCIÓN DE MAIZ 2024 INVIERNO',
                interactive: true,
    title: 'PRODUCCIÓN DE MAIZ 2024 INVIERNO<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024INVIERNO_3_0.png" /> 2 - 380<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024INVIERNO_3_1.png" /> 380 - 1400<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024INVIERNO_3_2.png" /> 1400 - 3200<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024INVIERNO_3_3.png" /> 3200 - 5800<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024INVIERNO_3_4.png" /> 5800 - 12883<br />' });
var format_PRODUCCINDEMAIZ2024VERANO_4 = new ol.format.GeoJSON();
var features_PRODUCCINDEMAIZ2024VERANO_4 = format_PRODUCCINDEMAIZ2024VERANO_4.readFeatures(json_PRODUCCINDEMAIZ2024VERANO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRODUCCINDEMAIZ2024VERANO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRODUCCINDEMAIZ2024VERANO_4.addFeatures(features_PRODUCCINDEMAIZ2024VERANO_4);
var lyr_PRODUCCINDEMAIZ2024VERANO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRODUCCINDEMAIZ2024VERANO_4, 
                style: style_PRODUCCINDEMAIZ2024VERANO_4,
                popuplayertitle: 'PRODUCCIÓN DE MAIZ 2024 VERANO',
                interactive: true,
    title: 'PRODUCCIÓN DE MAIZ 2024 VERANO<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024VERANO_4_0.png" /> 2 - 380<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024VERANO_4_1.png" /> 380 - 1400<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024VERANO_4_2.png" /> 1400 - 3200<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024VERANO_4_3.png" /> 3200 - 5800<br />\
    <img src="styles/legend/PRODUCCINDEMAIZ2024VERANO_4_4.png" /> 5800 - 12883<br />' });
var format_PRODUCCINDESOYA2023INVIERNO_5 = new ol.format.GeoJSON();
var features_PRODUCCINDESOYA2023INVIERNO_5 = format_PRODUCCINDESOYA2023INVIERNO_5.readFeatures(json_PRODUCCINDESOYA2023INVIERNO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRODUCCINDESOYA2023INVIERNO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRODUCCINDESOYA2023INVIERNO_5.addFeatures(features_PRODUCCINDESOYA2023INVIERNO_5);
var lyr_PRODUCCINDESOYA2023INVIERNO_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRODUCCINDESOYA2023INVIERNO_5, 
                style: style_PRODUCCINDESOYA2023INVIERNO_5,
                popuplayertitle: 'PRODUCCIÓN DE SOYA 2023 INVIERNO',
                interactive: true,
    title: 'PRODUCCIÓN DE SOYA 2023 INVIERNO<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023INVIERNO_5_0.png" /> 3 - 9700<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023INVIERNO_5_1.png" /> 9700 - 40000<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023INVIERNO_5_2.png" /> 40000 - 95000<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023INVIERNO_5_3.png" /> 95000 - 175000<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023INVIERNO_5_4.png" /> 175000 - 472112<br />' });
var format_PRODUCCINDESOYA2023VERANO_6 = new ol.format.GeoJSON();
var features_PRODUCCINDESOYA2023VERANO_6 = format_PRODUCCINDESOYA2023VERANO_6.readFeatures(json_PRODUCCINDESOYA2023VERANO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PRODUCCINDESOYA2023VERANO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PRODUCCINDESOYA2023VERANO_6.addFeatures(features_PRODUCCINDESOYA2023VERANO_6);
var lyr_PRODUCCINDESOYA2023VERANO_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PRODUCCINDESOYA2023VERANO_6, 
                style: style_PRODUCCINDESOYA2023VERANO_6,
                popuplayertitle: 'PRODUCCIÓN DE SOYA 2023 VERANO',
                interactive: true,
    title: 'PRODUCCIÓN DE SOYA 2023 VERANO<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023VERANO_6_0.png" /> 3 - 9700<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023VERANO_6_1.png" /> 9700 - 40000<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023VERANO_6_2.png" /> 40000 - 95000<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023VERANO_6_3.png" /> 95000 - 175000<br />\
    <img src="styles/legend/PRODUCCINDESOYA2023VERANO_6_4.png" /> 175000 - 472112<br />' });
var format_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7 = new ol.format.GeoJSON();
var features_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7 = format_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.readFeatures(json_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.addFeatures(features_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7);
var lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7, 
                style: style_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7,
                popuplayertitle: 'POTENCIAL LECHERO BASADO EN DISTRIBUCIÓN DE GANADO BOVINO',
                interactive: true,
    title: 'POTENCIAL LECHERO BASADO EN DISTRIBUCIÓN DE GANADO BOVINO<br />\
    <img src="styles/legend/POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7_0.png" /> 1 - 3400<br />\
    <img src="styles/legend/POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7_1.png" /> 3400 - 12000<br />\
    <img src="styles/legend/POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7_2.png" /> 12000 - 31000<br />\
    <img src="styles/legend/POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7_3.png" /> 31000 - 70000<br />\
    <img src="styles/legend/POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7_4.png" /> 70000 - 130948<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_MUNICIPIOSSANTACRUZ_1.setVisible(true);lyr_PRODUCCINDECAADEAZUCAR2022VERANO_2.setVisible(false);lyr_PRODUCCINDEMAIZ2024INVIERNO_3.setVisible(false);lyr_PRODUCCINDEMAIZ2024VERANO_4.setVisible(false);lyr_PRODUCCINDESOYA2023INVIERNO_5.setVisible(false);lyr_PRODUCCINDESOYA2023VERANO_6.setVisible(false);lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_MUNICIPIOSSANTACRUZ_1,lyr_PRODUCCINDECAADEAZUCAR2022VERANO_2,lyr_PRODUCCINDEMAIZ2024INVIERNO_3,lyr_PRODUCCINDEMAIZ2024VERANO_4,lyr_PRODUCCINDESOYA2023INVIERNO_5,lyr_PRODUCCINDESOYA2023VERANO_6,lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7];
lyr_MUNICIPIOSSANTACRUZ_1.set('fieldAliases', {'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', });
lyr_PRODUCCINDECAADEAZUCAR2022VERANO_2.set('fieldAliases', {'Depto': 'Depto', 'Provincia': 'Provincia', 'Municipio': 'Municipio', 'Comunidad': 'Comunidad', 'Cultivo': 'Cultivo', 'Estación': 'Estación', 'Producció': 'Producció', 'Superficie': 'Superficie', 'Rendimient': 'Rendimient', });
lyr_PRODUCCINDEMAIZ2024INVIERNO_3.set('fieldAliases', {'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'comunidad': 'comunidad', 'producto': 'producto', 'estacion': 'estacion', 'produccion': 'produccion', 'superficie': 'superficie', 'rendimient': 'rendimient', });
lyr_PRODUCCINDEMAIZ2024VERANO_4.set('fieldAliases', {'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'comunidad': 'comunidad', 'producto': 'producto', 'estacion': 'estacion', 'produccion': 'produccion', 'superficie': 'superficie', 'rendimient': 'rendimient', });
lyr_PRODUCCINDESOYA2023INVIERNO_5.set('fieldAliases', {'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'comunidad': 'comunidad', 'producto': 'producto', 'estacion': 'estacion', 'produccion': 'produccion', 'superficie': 'superficie', 'rendimient': 'rendimient', });
lyr_PRODUCCINDESOYA2023VERANO_6.set('fieldAliases', {'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'comunidad': 'comunidad', 'producto': 'producto', 'estacion': 'estacion', 'produccion': 'produccion', 'superficie': 'superficie', 'rendimient': 'rendimient', });
lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.set('fieldAliases', {'departamen': 'departamen', 'provincia': 'provincia', 'municipio': 'municipio', 'comunidad': 'comunidad', 'producto': 'producto', 'cabezas': 'cabezas', });
lyr_MUNICIPIOSSANTACRUZ_1.set('fieldImages', {'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', });
lyr_PRODUCCINDECAADEAZUCAR2022VERANO_2.set('fieldImages', {'Depto': 'TextEdit', 'Provincia': 'TextEdit', 'Municipio': 'TextEdit', 'Comunidad': 'TextEdit', 'Cultivo': 'TextEdit', 'Estación': 'TextEdit', 'Producció': 'TextEdit', 'Superficie': 'TextEdit', 'Rendimient': 'TextEdit', });
lyr_PRODUCCINDEMAIZ2024INVIERNO_3.set('fieldImages', {'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'comunidad': 'TextEdit', 'producto': 'TextEdit', 'estacion': 'TextEdit', 'produccion': 'TextEdit', 'superficie': 'TextEdit', 'rendimient': 'TextEdit', });
lyr_PRODUCCINDEMAIZ2024VERANO_4.set('fieldImages', {'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'comunidad': 'TextEdit', 'producto': 'TextEdit', 'estacion': 'TextEdit', 'produccion': 'TextEdit', 'superficie': 'TextEdit', 'rendimient': 'TextEdit', });
lyr_PRODUCCINDESOYA2023INVIERNO_5.set('fieldImages', {'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'comunidad': 'TextEdit', 'producto': 'TextEdit', 'estacion': 'TextEdit', 'produccion': 'TextEdit', 'superficie': 'TextEdit', 'rendimient': 'TextEdit', });
lyr_PRODUCCINDESOYA2023VERANO_6.set('fieldImages', {'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'comunidad': 'TextEdit', 'producto': 'TextEdit', 'estacion': 'TextEdit', 'produccion': 'TextEdit', 'superficie': 'TextEdit', 'rendimient': 'TextEdit', });
lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.set('fieldImages', {'departamen': 'TextEdit', 'provincia': 'TextEdit', 'municipio': 'TextEdit', 'comunidad': 'TextEdit', 'producto': 'TextEdit', 'cabezas': 'TextEdit', });
lyr_MUNICIPIOSSANTACRUZ_1.set('fieldLabels', {'departamen': 'inline label - always visible', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', });
lyr_PRODUCCINDECAADEAZUCAR2022VERANO_2.set('fieldLabels', {'Depto': 'inline label - always visible', 'Provincia': 'inline label - always visible', 'Municipio': 'inline label - always visible', 'Comunidad': 'inline label - always visible', 'Cultivo': 'inline label - always visible', 'Estación': 'inline label - always visible', 'Producció': 'inline label - always visible', 'Superficie': 'inline label - always visible', 'Rendimient': 'inline label - always visible', });
lyr_PRODUCCINDEMAIZ2024INVIERNO_3.set('fieldLabels', {'departamen': 'inline label - always visible', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'comunidad': 'inline label - always visible', 'producto': 'inline label - always visible', 'estacion': 'inline label - always visible', 'produccion': 'inline label - always visible', 'superficie': 'inline label - always visible', 'rendimient': 'inline label - always visible', });
lyr_PRODUCCINDEMAIZ2024VERANO_4.set('fieldLabels', {'departamen': 'inline label - always visible', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'comunidad': 'inline label - always visible', 'producto': 'inline label - always visible', 'estacion': 'inline label - always visible', 'produccion': 'inline label - always visible', 'superficie': 'inline label - always visible', 'rendimient': 'inline label - always visible', });
lyr_PRODUCCINDESOYA2023INVIERNO_5.set('fieldLabels', {'departamen': 'inline label - always visible', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'comunidad': 'inline label - always visible', 'producto': 'inline label - always visible', 'estacion': 'inline label - always visible', 'produccion': 'inline label - always visible', 'superficie': 'inline label - always visible', 'rendimient': 'inline label - always visible', });
lyr_PRODUCCINDESOYA2023VERANO_6.set('fieldLabels', {'departamen': 'inline label - always visible', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'comunidad': 'inline label - always visible', 'producto': 'inline label - always visible', 'estacion': 'inline label - always visible', 'produccion': 'inline label - always visible', 'superficie': 'inline label - always visible', 'rendimient': 'inline label - always visible', });
lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.set('fieldLabels', {'departamen': 'inline label - always visible', 'provincia': 'inline label - always visible', 'municipio': 'inline label - always visible', 'comunidad': 'inline label - always visible', 'producto': 'inline label - always visible', 'cabezas': 'inline label - always visible', });
lyr_POTENCIALLECHEROBASADOENDISTRIBUCINDEGANADOBOVINO_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});