<template>
    <div>
      <el-menu
        menu-trigger="click"
        mode="vertical"
        class="el-menu-vertical"
        background-color="#545c64">
        <el-menu-item index="1" class="caption">
          <i :class="SimpleOption.icon"></i>
          <span slot="title" >{{SimpleOption.name}}</span>
        </el-menu-item>
        <label v-for="item in SimpleOption.list" :key="item.id" class="options">
          <input type="radio" name="gender" :value=item.name class="options-inner" @click="simple(item.name)" > &nbsp;&nbsp;{{item.name}}
          <i :class="item.icon"></i>
          <br/>
        </label>
        <hr/>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'SimpleList',
  props: {
    SimpleOption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    simple (e) {
      console.log(e)
      this.$emit('simple-button', e)
    }
  }
}
</script>

<style scoped>
  .caption{
    font-size: 16px;
    color: aliceblue;
    margin-left: 20px;
  }
  .options{
    color: aliceblue;
    font-size: 15px;
    font-weight: normal;
    margin-left: 40px;
  }
  .options-inner{
    margin-top: 10px;
  }

</style>
