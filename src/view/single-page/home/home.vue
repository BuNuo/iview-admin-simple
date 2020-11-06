<template>
  <div class="echarts">
    <Spin fix v-if="loading"></Spin>
    <div :style="{height:'100%',width:'100%'}" ref="myEchart">
    </div>
  </div>
</template>

<script>
import echarts from 'echarts'
import 'echarts/map/js/china.js'
export default {
  name: 'home',
  components: {
  },
  data () {
    return {
      provinces: ['shanghai', 'hebei', 'shanxi', 'neimenggu', 'liaoning', 'jilin', 'heilongjiang', 'jiangsu', 'zhejiang', 'anhui', 'fujian', 'jiangxi', 'shandong', 'henan', 'hubei', 'hunan', 'guangdong', 'guangxi', 'hainan', 'sichuan', 'guizhou', 'yunnan', 'xizang', 'shanxi1', 'gansu', 'qinghai', 'ningxia', 'xinjiang', 'beijing', 'tianjin', 'chongqing', 'xianggang', 'aomen'],
      provincesText: ['上海', '河北', '山西', '内蒙古', '辽宁', '吉林', '黑龙江', '江苏', '浙江', '安徽', '福建', '江西', '山东', '河南', '湖北', '湖南', '广东', '广西', '海南', '四川', '贵州', '云南', '西藏', '陕西', '甘肃', '青海', '宁夏', '新疆', '北京', '天津', '重庆', '香港', '澳门'],
      loading: false
    }
  },
  mounted () {
    this.initEcharts()
    window.addEventListener('resize', this.chartResize())
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.chartResize())
  },
  methods: {
    chartWrapperDom () {
      if (echarts && this.$refs.myEchart) {
        return echarts.init(this.$refs.myEchart)
      }
      return null
    },
    chartResize () {
      this.$nextTick(() => {
        if (this.chartWrapperDom()) {
          this.chartWrapperDom().resize()
        }
      })
    },
    initEcharts (Chinese_) {
      let that = this
      let myChart = echarts.init(this.$refs.myEchart) // 这里是为了获得容器所在位置
      myChart.setOption({ // 进行相关配置
        backgroundColor: '#02AFDB',
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        visualMap: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: false,
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            type: 'map',
            mapType: Chinese_ || 'china',
            label: {
              normal: {
                show: true, // 是否显示对应地名
                textStyle: {
                  color: 'rgba(0,0,0,0.4)'
                }
              }
            },
            itemStyle: {
              normal: {
                borderColor: 'rgba(0, 0, 0, 0.2)'
              },
              emphasis: {
                areaColor: null,
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
            data: []
          }
        ]
      }, true)
      myChart.off('click')
      myChart.on('click', function (param) {
        for (var i = 0; i < that.provincesText.length; i++) {
          if (param.name === that.provincesText[i]) {
            // 显示对应省份的方法
            that.showProvince(that.provinces[i], that.provincesText[i])
            break
          }
        }
      })
      myChart.on('dblclick', function () {
        that.loading = true
        that.initEcharts('china')
        that.loading = false
      })
    },
    showProvince (pyName, Chinese_) {
      // 需要的时候引入，不要一开始全部直接引入
      this.loading = true
      let provinceInit = import('echarts/map/js/province/' + pyName + '.js')
      provinceInit.then(res => {
        this.initEcharts(Chinese_)
        this.loading = false
      })
    }
  }
}
</script>

<style lang="less">
.count-style{
  font-size: 50px;
}
.echarts{
  width: 100%;
  height: 100%;
}
</style>
