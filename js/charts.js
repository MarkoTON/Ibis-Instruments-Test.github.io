Highcharts.chart('container', {
    
    title: {
        text: 'Solar Employment Growth by Sector, 2010-2016'
    },
    
    chart: {
        height: (9 / 23 * 100) + '%' // 16:9 ratio
    },
    
    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },
    
    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },
    
    series: [{
        name: 'Installation',
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
    }, {
        name: 'Manufacturing',
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
    }, {
        name: 'Project Development',
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
    }, {
        name: 'Other',
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
    }],
    
    responsive: {
        rules: [{
            condition: {
                maxHeight: 300
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }
    
});

Highcharts.chart('container2', {
    chart: {
        type: 'spline',
        height: (9 / 23 * 100) + '%' // 16:9 ratio
    },
    title: {
        text: 'Snow depth at Vikjafjellet, Norway'
    },
    subtitle: {
        text: 'Irregular time data in Highcharts JS'
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
        month: '%e. %b',
        year: '%b'
    },
    title: {
        text: 'Date'
    }
},
yAxis: {
    title: {
        text: 'Snow depth (m)'
    },
    min: 0
},
tooltip: {
    headerFormat: '<b>{series.name}</b><br>',
    pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
},

plotOptions: {
    spline: {
        marker: {
            enabled: true
        }
    }
},

colors: ['#6CF', '#39F', '#06C', '#036', '#000'],

// Define the data points. All series have a dummy year
// of 1970/71 in order to be compared on the same x axis. Note
// that in JavaScript, months start at 0 for January, 1 for February etc.
series: [{
    name: "Winter 2014-2015",
    data: [
        [Date.UTC(1970, 10, 25), 0],
        [Date.UTC(1970, 11,  6), 0.25],
        [Date.UTC(1970, 11, 20), 1.41],
        [Date.UTC(1970, 11, 25), 1.64],
        [Date.UTC(1971, 0,  4), 1.6],
        [Date.UTC(1971, 0, 17), 2.55],
        [Date.UTC(1971, 0, 24), 2.62],
        [Date.UTC(1971, 1,  4), 2.5],
        [Date.UTC(1971, 1, 14), 2.42],
        [Date.UTC(1971, 2,  6), 2.74],
        [Date.UTC(1971, 2, 14), 2.62],
        [Date.UTC(1971, 2, 24), 2.6],
        [Date.UTC(1971, 3,  1), 2.81],
        [Date.UTC(1971, 3, 11), 2.63],
        [Date.UTC(1971, 3, 27), 2.77],
        [Date.UTC(1971, 4,  4), 2.68],
        [Date.UTC(1971, 4,  9), 2.56],
        [Date.UTC(1971, 4, 14), 2.39],
        [Date.UTC(1971, 4, 19), 2.3],
        [Date.UTC(1971, 5,  4), 2],
        [Date.UTC(1971, 5,  9), 1.85],
        [Date.UTC(1971, 5, 14), 1.49],
        [Date.UTC(1971, 5, 19), 1.27],
        [Date.UTC(1971, 5, 24), 0.99],
        [Date.UTC(1971, 5, 29), 0.67],
        [Date.UTC(1971, 6,  3), 0.18],
        [Date.UTC(1971, 6,  4), 0]
    ]
}, {
    name: "Winter 2015-2016",
    data: [
        [Date.UTC(1970, 10,  9), 0],
        [Date.UTC(1970, 10, 15), 0.23],
        [Date.UTC(1970, 10, 20), 0.25],
        [Date.UTC(1970, 10, 25), 0.23],
        [Date.UTC(1970, 10, 30), 0.39],
        [Date.UTC(1970, 11,  5), 0.41],
        [Date.UTC(1970, 11, 10), 0.59],
        [Date.UTC(1970, 11, 15), 0.73],
        [Date.UTC(1970, 11, 20), 0.41],
        [Date.UTC(1970, 11, 25), 1.07],
        [Date.UTC(1970, 11, 30), 0.88],
        [Date.UTC(1971, 0,  5), 0.85],
        [Date.UTC(1971, 0, 11), 0.89],
        [Date.UTC(1971, 0, 17), 1.04],
        [Date.UTC(1971, 0, 20), 1.02],
        [Date.UTC(1971, 0, 25), 1.03],
        [Date.UTC(1971, 0, 30), 1.39],
        [Date.UTC(1971, 1,  5), 1.77],
        [Date.UTC(1971, 1, 26), 2.12],
        [Date.UTC(1971, 3, 19), 2.1],
        [Date.UTC(1971, 4,  9), 1.7],
        [Date.UTC(1971, 4, 29), 0.85],
        [Date.UTC(1971, 5,  7), 0]
    ]
}, {
    name: "Winter 2016-2017",
    data: [
        [Date.UTC(1970, 9, 15), 0],
        [Date.UTC(1970, 9, 31), 0.09],
        [Date.UTC(1970, 10,  7), 0.17],
        [Date.UTC(1970, 10, 10), 0.1],
        [Date.UTC(1970, 11, 10), 0.1],
        [Date.UTC(1970, 11, 13), 0.1],
        [Date.UTC(1970, 11, 16), 0.11],
        [Date.UTC(1970, 11, 19), 0.11],
        [Date.UTC(1970, 11, 22), 0.08],
        [Date.UTC(1970, 11, 25), 0.23],
        [Date.UTC(1970, 11, 28), 0.37],
        [Date.UTC(1971, 0, 16), 0.68],
        [Date.UTC(1971, 0, 19), 0.55],
        [Date.UTC(1971, 0, 22), 0.4],
        [Date.UTC(1971, 0, 25), 0.4],
        [Date.UTC(1971, 0, 28), 0.37],
        [Date.UTC(1971, 0, 31), 0.43],
        [Date.UTC(1971, 1,  4), 0.42],
        [Date.UTC(1971, 1,  7), 0.39],
        [Date.UTC(1971, 1, 10), 0.39],
        [Date.UTC(1971, 1, 13), 0.39],
        [Date.UTC(1971, 1, 16), 0.39],
        [Date.UTC(1971, 1, 19), 0.35],
        [Date.UTC(1971, 1, 22), 0.45],
        [Date.UTC(1971, 1, 25), 0.62],
        [Date.UTC(1971, 1, 28), 0.68],
        [Date.UTC(1971, 2,  4), 0.68],
        [Date.UTC(1971, 2,  7), 0.65],
        [Date.UTC(1971, 2, 10), 0.65],
        [Date.UTC(1971, 2, 13), 0.75],
        [Date.UTC(1971, 2, 16), 0.86],
        [Date.UTC(1971, 2, 19), 1.14],
        [Date.UTC(1971, 2, 22), 1.2],
        [Date.UTC(1971, 2, 25), 1.27],
        [Date.UTC(1971, 2, 27), 1.12],
        [Date.UTC(1971, 2, 30), 0.98],
        [Date.UTC(1971, 3,  3), 0.85],
        [Date.UTC(1971, 3,  6), 1.04],
        [Date.UTC(1971, 3,  9), 0.92],
        [Date.UTC(1971, 3, 12), 0.96],
        [Date.UTC(1971, 3, 15), 0.94],
        [Date.UTC(1971, 3, 18), 0.99],
        [Date.UTC(1971, 3, 21), 0.96],
        [Date.UTC(1971, 3, 24), 1.15],
        [Date.UTC(1971, 3, 27), 1.18],
        [Date.UTC(1971, 3, 30), 1.12],
        [Date.UTC(1971, 4,  3), 1.06],
        [Date.UTC(1971, 4,  6), 0.96],
        [Date.UTC(1971, 4,  9), 0.87],
        [Date.UTC(1971, 4, 12), 0.88],
        [Date.UTC(1971, 4, 15), 0.79],
        [Date.UTC(1971, 4, 18), 0.54],
        [Date.UTC(1971, 4, 21), 0.34],
        [Date.UTC(1971, 4, 25), 0]
    ]
}]
});

Highcharts.chart('container3', {
    chart: {
        type: 'spline',
        height: (9 / 23 * 100) + '%', // 16:9 ratio
        scrollablePlotArea: {
            minWidth: 600,
            scrollPositionX: 1
        }
    },
    title: {
        text: 'Wind speed during two days'
    },
    subtitle: {
        text: '13th & 14th of February, 2018 at two locations in Vik i Sogn, Norway'
    },
    xAxis: {
        type: 'datetime',
        labels: {
            overflow: 'justify'
        }
    },
    yAxis: {
        title: {
            text: 'Wind speed (m/s)'
        },
        minorGridLineWidth: 0,
        gridLineWidth: 0,
        alternateGridColor: null,
        plotBands: [{ // Light air
            from: 0.3,
            to: 1.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Light air',
                style: {
                    color: '#606060'
                }
            }
        }, { // Light breeze
            from: 1.5,
            to: 3.3,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Light breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Gentle breeze
            from: 3.3,
            to: 5.5,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Gentle breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Moderate breeze
            from: 5.5,
            to: 8,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Moderate breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Fresh breeze
            from: 8,
            to: 11,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'Fresh breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // Strong breeze
            from: 11,
            to: 14,
            color: 'rgba(0, 0, 0, 0)',
            label: {
                text: 'Strong breeze',
                style: {
                    color: '#606060'
                }
            }
        }, { // High wind
            from: 14,
            to: 15,
            color: 'rgba(68, 170, 213, 0.1)',
            label: {
                text: 'High wind',
                style: {
                    color: '#606060'
                }
            }
        }]
    },
    tooltip: {
        valueSuffix: ' m/s'
    },
    plotOptions: {
        spline: {
            lineWidth: 4,
            states: {
                hover: {
                    lineWidth: 5
                }
            },
            marker: {
                enabled: false
            },
            pointInterval: 3600000, // one hour
            pointStart: Date.UTC(2018, 1, 13, 0, 0, 0)
        }
    },
    series: [{
        name: 'Hestavollane',
        data: [
            3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
            6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
            9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
            10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
            10.1
        ]
        
    }, {
        name: 'Vik',
        data: [
            0.2, 0.1, 0.1, 0.1, 0.3, 0.2, 0.3, 0.1, 0.7, 0.3, 0.2, 0.2,
            0.3, 0.1, 0.3, 0.4, 0.3, 0.2, 0.3, 0.2, 0.4, 0.0, 0.9, 0.3,
            0.7, 1.1, 1.8, 1.2, 1.4, 1.2, 0.9, 0.8, 0.9, 0.2, 0.4, 1.2,
            0.3, 2.3, 1.0, 0.7, 1.0, 0.8, 2.0, 1.2, 1.4, 3.7, 2.1, 2.0,
            1.5
        ]
    }],
    navigation: {
        menuItemStyle: {
            fontSize: '10px'
        }
    }
});


Highcharts.chart('container4', {
    chart: {
        type: 'area',
        height: (9 / 23 * 100) + '%'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billions'
        },
        labels: {
            formatter: function () {
                return this.value / 1000;
            }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        name: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        name: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        name: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        name: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
});


Highcharts.chart('container5', {
    chart: {
        type: 'line',
        height: (9 / 23 * 100) + '%'
    },
    title: {
        text: 'Monthly Average Temperature'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
        title: {
            text: 'Temperature (°C)'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Tokyo',
        data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
        name: 'London',
        data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
});


Highcharts.chart('container6', {
    chart: {
        type: 'scatter',
        height: (9 / 23 * 100) + '%',
        margin: [70, 50, 60, 80],
        events: {
            click: function (e) {
                // find the clicked values and the series
                var x = Math.round(e.xAxis[0].value),
                y = Math.round(e.yAxis[0].value),
                series = this.series[0];
                
                // Add it
                series.addPoint([x, y]);
                
            }
        }
    },
    title: {
        text: 'User supplied data'
    },
    subtitle: {
        text: 'Click the plot area to add a point. Click a point to remove it.'
    },
    xAxis: {
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60
    },
    yAxis: {
        title: {
            text: 'Value'
        },
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60,
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    legend: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    plotOptions: {
        series: {
            lineWidth: 1,
            point: {
                events: {
                    'click': function () {
                        if (this.series.data.length > 1) {
                            this.remove();
                        }
                    }
                }
            }
        }
    },
    series: [{
        data: [[20, 20], [80, 80]]
    }]
});


Highcharts.chart('container7', {
    chart: {
        zoomType: 'xy',
        height: (9 / 23 * 100) + '%'
    },
    title: {
        text: 'Average Monthly Weather Data for Tokyo'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[2]
            }
        },
        opposite: true
        
    }, { // Secondary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        }
        
    }, { // Tertiary yAxis
        gridLineWidth: 0,
        title: {
            text: 'Sea-Level Pressure',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        labels: {
            format: '{value} mb',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }
        
    }, {
        name: 'Sea-Level Pressure',
        type: 'spline',
        yAxis: 2,
        data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
        marker: {
            enabled: false
        },
        dashStyle: 'shortdot',
        tooltip: {
            valueSuffix: ' mb'
        }
        
    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: ' °C'
        }
    }]
});


Highcharts.chart('container8', {
    chart: {
        zoomType: 'xy',
        height: (9 / 23 * 100) + '%'
    },
    title: {
        text: 'Average Monthly Temperature and Rainfall in Tokyo'
    },
    subtitle: {
        text: 'Source: WorldClimate.com'
    },
    xAxis: [{
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        crosshair: true
    }],
    yAxis: [{ // Primary yAxis
        labels: {
            format: '{value}°C',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: 'Temperature',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'Rainfall',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        labels: {
            format: '{value} mm',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },
        opposite: true
    }],
    tooltip: {
        shared: true
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 120,
        verticalAlign: 'top',
        y: 100,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || 'rgba(255,255,255,0.25)'
    },
    series: [{
        name: 'Rainfall',
        type: 'column',
        yAxis: 1,
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
        tooltip: {
            valueSuffix: ' mm'
        }
        
    }, {
        name: 'Temperature',
        type: 'spline',
        data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
        tooltip: {
            valueSuffix: '°C'
        }
    }]
});


Highcharts.chart('container10', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container11', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container12', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container13', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container14', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container15', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container16', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});

Highcharts.chart('container17', {
    chart: {
        // plotBackgroundColor: null,
        // plotBorderWidth: 0,
        // plotShadow: false,
        height: (9 / 14 * 100) + '%'
    },
    // title: {
    //     text: 'Browser<br>shares<br>2017',
    //     align: 'center',
    //     verticalAlign: 'middle',
    //     y: 40
    // },
    // tooltip: {
    //     pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    // },
    // plotOptions: {
    //     pie: {
    //         dataLabels: {
    //             enabled: true,
    //             distance: -50,
    //             style: {
    //                 color: 'white'
    //             }
    //         },
    //         startAngle: 0,
    //         endAngle: 360,
    //         center: ['50%', '75%'],
    //         size: '110%'
    //     }
    // },
    series: [{
        type: 'pie',
        // name: 'Browser share',
        innerSize: '50%',
        data: [
            ['Chrome', 58.9],
            ['Firefox', 13.29],
            ['Internet Explorer', 13],
            ['Edge', 3.78],
            ['Safari', 3.42],
            {
                name: 'Other',
                y: 7.5,
                dataLabels: {
                    enabled: false
                }
            }
        ]
    }]
});