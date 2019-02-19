/*jslint browser: true*/
/*global $, window, document, Gauge*/

'use strict';

// Function called once the page has loaded
$(function() {
    create_gauges();
});


// Set up gauge.js gauges on the canvases
function create_gauges() {
    var opts = {
        angle: 0.15, // The span of the gauge arc
        lineWidth: 0.44, // The line thickness
        radiusScale: 1, // Relative radius
        pointer: {
            length: 0.6, // // Relative to gauge radius
            strokeWidth: 0.035, // The thickness
            color: '#000000' // Fill color
        },
        limitMax: false,     // If false, max value increases automatically if value > maxValue
        limitMin: false,     // If true, the min value of the gauge will be fixed
        colorStart: '#6FADCF',   // Colors
        colorStop: '#8FC0DA',    // just experiment with them
        strokeColor: '#E0E0E0',  // to see which ones work best for you
        generateGradient: true,
        highDpiSupport: true     // High resolution support
    };
    
    var canvas = document.getElementById("gauge-environment");
    var gauge = new Gauge(canvas);
    gauge.setOptions(opts);
    
    gauge.maxValue = 7;
    gauge.minValue = 0;
    gauge.animationSpeed = 32; // set animation speed (32 is default value)
    
    
    // just have the environment gauge reflect slider position for now
    $('#days-slider')
        .on('input change', function() {
            var slider_val = $('#days-slider').val();
            $('#num-days').html(slider_val);
            gauge.set(slider_val);
        })
        .change();
}