<template>
<div class="layout">
  <el-button type="info"  :icon="[ScreenButton.screen ? 'el-icon-s-unfold':'el-icon-s-fold' ]"
             :class="[ScreenButton.screen ? 'button-unfold':'button-fold']"
             style="background: #545c64 ; border: 1px solid #eee"
             @click="screen">{{ScreenButton.name}}</el-button>
</div>
</template>

<script>
export default {
  name: 'ScreenButton',
  props: {
    ScreenButton: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    screen: function () {
      console.log('123')
      this.$emit('screen')
    }
  }
}
</script>

<style scoped lang="scss">
  .layout{
  }
  .button-unfold{
    width: 300px;
    height: 59px;
  }
  .button-fold{
    width: 300px;
    height: 59px;
  }
</style>
