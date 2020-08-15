var myChart1 = echarts.init(document.getElementById('bar1'));
var option1 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '18%',
    right: '5%',
    left: '8%',
    bottom: '56'
  },
  xAxis: [{
    type: 'category',
    data: ['兰州', '天水', '白银', '定西', '武威', '张掖', '金昌', '酒泉', '嘉峪关', '甘南', '陇南', '平凉', '庆阳', '临夏'],
    axisLine: {
      lineStyle: {
        color: '#666'
      }
    },
    axisLabel: {
      color: '#666',
      textStyle: {
        fontSize: 11
      },
      formatter: function (val) {
        var list = val.split('');
        var str = ''
        for (var i = 0, s; s = list[i++];) {
          str += s;
          if (!(i % 1)) str += '\n';
        }
        return str
      }
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    axisLabel: {
      formatter: '{value}',
      color: '#666',
      textStyle: {
        fontSize: 11
      },
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#666'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#f5f5f5'
      }
    },
    axisTick: {
      show: false
    }
  }],
  series: [{
    type: 'bar',
    data: [4.8, 4.0, 3.7, 4.2, 2.8, 3.9, 3.2, 2.8, 4.8, 4.0, 3.7, 4.2, 2.8, 3.9],
    barWidth: '30%',
    itemStyle: {
      normal: {
        color: '#007aff'
      }
    },
    label: {
      normal: {
        show: true,
        lineHeight: 18,
        width: 32,
        height: 16,
        backgroundColor: '#e0efff',
        borderWidth: 1,
        borderColor: '#007aff',
        borderRadius: 16,
        position: 'top',
        distance: 5,
        formatter: [
          '{a|{c}}'
        ].join(','),
        rich: {
          a: {
            color: '#007aff',
            align: 'center',
          }
        }
      }
    }
  }]
};
myChart1.setOption(option1);

var myChart2 = echarts.init(document.getElementById('bar2'));
var option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    top: '18%',
    right: '5%',
    left: '8%',
    bottom: '56'
  },
  xAxis: [{
    type: 'category',
    data: ['兰州', '天水', '白银', '定西', '武威', '张掖', '金昌', '酒泉', '嘉峪关', '甘南', '陇南', '平凉', '庆阳', '临夏'],
    axisLine: {
      lineStyle: {
        color: '#666'
      }
    },
    axisLabel: {
      color: '#666',
      textStyle: {
        fontSize: 11
      },
      formatter: function (val) {
        var list = val.split('');
        var str = ''
        for (var i = 0, s; s = list[i++];) {
          str += s;
          if (!(i % 1)) str += '\n';
        }
        return str
      }
    },
    axisTick: {
      show: false
    }
  }],
  yAxis: [{
    axisLabel: {
      formatter: '{value}',
      color: '#666',
      textStyle: {
        fontSize: 11
      },
    },
    axisLine: {
      show: false
    },
    splitLine: {
      lineStyle: {
        color: '#f5f5f5'
      }
    },
    axisTick: {
      show: false
    }
  }],
  series: [{
    type: 'bar',
    data: [4.8, 4.0, 3.7, 4.2, 2.8, 3.9, 3.2, 2.8, 4.8, 4.0, 3.7, 4.2, 2.8, 3.9],
    barWidth: '30%',
    itemStyle: {
      normal: {
        color: '#1dc9b7'
      }
    },
    label: {
      normal: {
        show: true,
        lineHeight: 18,
        width: 32,
        height: 16,
        backgroundColor: '#e4f9f6',
        borderWidth: 1,
        borderColor: '#1dc9b7',
        borderRadius: 16,
        position: 'top',
        distance: 5,
        formatter: [
          '{a|{c}}'
        ].join(','),
        rich: {
          a: {
            color: '#1dc9b7',
            align: 'center',
          }
        }
      }
    }
  }]
};
myChart2.setOption(option2);

$(window).resize(function () {
  myChart1.resize();
  myChart2.resize();
})