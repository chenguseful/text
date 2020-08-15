var myChartGS = echarts.init(document.getElementById('map'));
//数据纯属虚构
var dataGS = [{
  name: '兰州市',
  value: 50
}, {
  name: '天水市',
  value: 25
}, {
  name: '白银市',
  value: 50
}, {
  name: '定西市',
  value: 90
}, {
  name: '武威市',
  value: 75
}, {
  name: '张掖市',
  value: 75
}, {
  name: '金昌市',
  value: 100
}, {
  name: '酒泉市',
  value: 25
}, {
  name: '嘉峪关市',
  value: 25
}, {
  name: '甘南藏族自治州',
  value: 25
}, {
  name: '陇南市',
  value: 75
}, {
  name: '平凉市',
  value: 25
}, {
  name: '庆阳市',
  value: 10
}, {
  name: '临夏回族自治州',
  value: 10
}];

var optionGS = {
  visualMap: {
    showLabel: true,
    seriesIndex: [0],
    min: 0,
    max: 100,
    calculable: true,
    inRange: {
      color: ['#007aff', '#00baff', '#28c22c', '#f69506', '#f13717']
    },
    textStyle: {
      color: '#7B93A7'
    },
    left: 30,
    bottom: 30,
  },
  geo: {
    map: '甘肃',
    label: {
      normal: {
        show: true,
        textStyle: {
          color: '#fff'
        }
      }
    },
    itemStyle: {
      emphasis: {
        areaColor: '#fff464'
      }
    }
  },
  series: [{
    name: 'mapSer',
    type: 'map',
    geoIndex: 0,
    label: {
      show: true
    },
    data: dataGS
  }]
};

myChartGS.setOption(optionGS);

myChartGS.on('click', function (params) {
  var boxWidth = $('.gc-map-main').width();
  var boxHeight = $('.gc-map-main').height();
  $('.map-al').css('top', (params.event.offsetY / boxHeight * 100 + '%')).css('left', (params.event.offsetX / boxWidth * 100 + '%'))
});

$(window).resize(function () {
  myChartGS.resize();
})