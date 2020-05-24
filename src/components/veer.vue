<template>
  <div class="layout">
<!--    <el-button type="info" :icon="[option.button.screen ?  'el-icon-s-unfold':'el-icon-s-fold']"-->
<!--               :class="[this.option.button.screen? 'button-unfold':'button-fold']"-->
<!--               @click="screen">筛选</el-button>-->
    <transition name="my-menu" >
      <el-aside v-if="option.button.screen" class="menu-inner" style="border: 1px solid #eee">
      <div>
    <simple-list :simple-option="option.sortWay" @simple-button="simple"></simple-list>
    <simple-list :simple-option="option.composition"></simple-list>
    <fold-list :fold-option="option.national"></fold-list>
    <fold-list :fold-option="option.number"></fold-list>
    <fold-list :fold-option="option.age"></fold-list>
    <fold-list :fold-option="option.gender"></fold-list>
      </div>
      </el-aside>
    </transition>
  </div>
  </template>

<script>
export default {
  name: 'veer',
  props: {
    option: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed () {
  },
  data () {
    return {}
  },
  methods: {
    simple (e) {
      console.log(e)
      this.$emit('nice', e)
    }
  }
}
</script>

<style scoped lang="scss">
  .layout{

  }
  .menu-inner{
    width: 350px;
    background-color: #f4f4f4;
  }
  .button-unfold{
    width: 350px;
  }
  .button-fold{
    width: 300px;
  }
  .my-menu-enter-active,.my-menu-leave-active{
    transition: all .3s;
  }
  .my-menu-enter,.my-menu-leave-to{
    opacity: 0;
    width: 0;
  }
</style>
