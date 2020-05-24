<template>
    <div>
      <el-menu
        menu-trigger="click"
        mode="vertical"
        class="el-menu-vertical"
        background-color="#545c64">
      <el-submenu index="1" menu-trigger="click" class="caption">
        <template slot="title" >
          <i :class="foldOption.icon"></i>
          <span class="caption-inner">{{foldOption.name}}</span>
        </template>
        <form method="post">
          <label v-for="item in foldOption.list" :key="item.id" class="options">
            <input type="radio" name="gender" :value=item.name class="options-inner"> &nbsp;&nbsp;{{item.name}}
            <br/>
          </label>
        </form>
      </el-submenu>
        <hr/>
      </el-menu>
    </div>
</template>

<script>
export default {
  name: 'foldList',
  props: {
    foldOption: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>

<style scoped>
  .caption{
    margin-left: 20px;
  }
  .caption-inner{
    font-size: 16px;
    color: aliceblue;
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
