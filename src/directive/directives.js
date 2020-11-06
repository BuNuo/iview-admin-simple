import { on } from '@/libs/tools'
const directives = {
  draggable: {
    inserted: (el, binding, vnode) => {
      let triggerDom = document.querySelector(binding.value.trigger)
      triggerDom.style.cursor = 'move'
      let bodyDom = document.querySelector(binding.value.body)
      let pageX = 0
      let pageY = 0
      let transformX = 0
      let transformY = 0
      let canMove = false
      const handleMousedown = e => {
        let transform = /\(.*\)/.exec(bodyDom.style.transform)
        if (transform) {
          transform = transform[0].slice(1, transform[0].length - 1)
          let splitxy = transform.split('px, ')
          transformX = parseFloat(splitxy[0])
          transformY = parseFloat(splitxy[1].split('px')[0])
        }
        pageX = e.pageX
        pageY = e.pageY
        canMove = true
      }
      const handleMousemove = e => {
        let xOffset = e.pageX - pageX + transformX
        let yOffset = e.pageY - pageY + transformY
        if (canMove) bodyDom.style.transform = `translate(${xOffset}px, ${yOffset}px)`
      }
      const handleMouseup = e => {
        canMove = false
      }
      on(triggerDom, 'mousedown', handleMousedown)
      on(document, 'mousemove', handleMousemove)
      on(document, 'mouseup', handleMouseup)
    },
    update: (el, binding, vnode) => {
      if (!binding.value.recover) return
      let bodyDom = document.querySelector(binding.value.body)
      bodyDom.style.transform = ''
    }
  },
  onlyNumber: {
    inserted (el, vDir, vNode) {
      // vDir.value 有指令的参数
      let content
      // 按键按下=>只允许输入 数字/小数点
      el.addEventListener('keypress', event => {
        let e = event || window.event
        let inputKey = String.fromCharCode(typeof e.charCode === 'number' ? e.charCode : e.keyCode)
        let re = /\d|\./
        content = e.target.value
        // 定义方法,阻止输入
        function preventInput () {
          if (e.preventDefault) {
            e.preventDefault()
          } else {
            e.returnValue = false
          }
        }
        if (!re.test(inputKey) && !e.ctrlKey) {
          preventInput()
        } else if (content.indexOf('.') > 0 && inputKey == '.') {
          // 已有小数点,再次输入小数点
          preventInput()
        }
      })
      // 按键弹起=>并限制最大最小
      el.addEventListener('keyup', event => {
        let e = event || window.event
        content = parseFloat(e.target.value)
        if (!content) {
          content = 0.00
        }
        let arg_max = ''
        let arg_min = ''
        if (vDir.value) {
          arg_max = parseFloat(vDir.value.max)
          arg_min = parseFloat(vDir.value.min)
        }
        if (arg_max && content > arg_max) {
          e.target.value = arg_max
          content = arg_max
        }
        if (arg_min && content < arg_min) {
          e.target.value = arg_min
          content = arg_min
        }
      })
      // 失去焦点=>保留指定位小数
      el.addEventListener('focusout', event => { // 此处会在 el-input 的 @change 后执行
        let e = event || window.event
        content = parseFloat(e.target.value)
        if (!content) {
          content = 0.00
        }
        let arg_precision = 0// 默认保留至整数
        if (vDir.value.precision) {
          arg_precision = parseFloat(vDir.value.precision)
        }
        e.target.value = content.toFixed(arg_precision)
      })
    }
  }
}

export default directives
