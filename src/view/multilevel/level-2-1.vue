<template>
   <i-input :value.sync="value" v-only-number="{max:100,min:0,precision:2}" placeholder="请输入..." style="width: 300px"></i-input>
</template>
<script>
export default {
  name: 'level_2_1',
  props: ['query'],
  data () {
    return {
      value: ''
    }
  },
  created () {
    console.log(this.$route.query)
    console.log(this.query)
  }
}
</script>
