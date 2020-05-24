<template>
  <div id="app" >
    <el-container>
      <el-header>
        <screen-button :screen-button="option.button" @screen="screen" class="menu" ></screen-button>
        <test class="menu"></test>
      </el-header>
      <el-container>
          <veer :option="option" @nice="good"  class="side"></veer>
        <el-main>
          <card-img :option="cardImg" class="side-main"></card-img>
        </el-main>
      </el-container>
    </el-container>
 </div>
</template>

<script>
import Mock from '../node_modules/mockjs/dist/mock.js'
// 开始生成测试数据
const demoDataMatch = []
const demoDataTime = []
const demoDataHot = []
const matchBase = parseInt((Math.random() * 60), 10) + 10
const timeBase = parseInt((Math.random() * 60), 10) + 10
const hotBase = parseInt((Math.random() * 60), 10) + 10
const demoDataNum = 30
for (let i = 0; i < demoDataNum; i++) {
  const likeNum = Mock.mock('@integer(1000, 2000)')
  const downLoadNum = Mock.mock('@integer(60, 100)')
  demoDataMatch.push({
    thumbUrl: `https://picsum.photos/id/${matchBase + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${matchBase + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${matchBase + i}/300/200`,
    likeNum: `${likeNum}`,
    downLoadNum: `${downLoadNum}`
  })
  demoDataTime.push({
    thumbUrl: `https://picsum.photos/id/${timeBase + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${timeBase + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${timeBase + i}/300/200`,
    likeNum: `${likeNum}`,
    downLoadNum: `${downLoadNum}`
  })
  demoDataHot.push({
    thumbUrl: `https://picsum.photos/id/${hotBase + i}/300/200`,
    imgUrl: `https://picsum.photos/id/${hotBase + i}/600/400`,
    authorUrl: `https://picsum.photos/id/${hotBase + i}/300/200`,
    likeNum: `${likeNum}`,
    downLoadNum: `${downLoadNum}`
  })
}
export default {
  data: function () {
    return {
      option: {
        drawerWidth: '250px',
        backgroundColor: '#f4f4f4',
        button: {
          name: '筛选',
          screen: true
        },
        sortWay: {
          name: '排序方式',
          icon: 'el-icon-sort',
          list: [
            { id: 1, name: '最佳匹配', icon: '' },
            { id: 2, name: '最新时间', icon: '' },
            { id: 3, name: '最热', icon: '' }
          ]
        },
        composition: {
          name: '构图',
          icon: 'el-icon-menu',
          list: [
            { id: 1, name: '全部', icon: '' },
            { id: 2, name: '横向', icon: 'el-icon-right' },
            { id: 3, name: '竖向', icon: 'el-icon-top' },
            { id: 4, name: '方形', icon: 'el-icon-copy-document' },
            { id: 5, name: '全景横向', icon: '' },
            { id: 6, name: '全景竖向', icon: '' }
          ]
        },
        national: {
          name: '民族',
          icon: 'el-icon-user-solid',
          list: [
            { id: 1, name: '全部' },
            { id: 2, name: '中国人' },
            { id: 3, name: '亚洲人' },
            { id: 4, name: '东方人' },
            { id: 5, name: '白色人种' },
            { id: 6, name: '黑色人种' },
            { id: 7, name: '混血人' },
            { id: 8, name: '中东人' }
          ]
        },
        number: {
          name: '人数',
          icon: 'el-icon-s-custom',
          list: [
            { id: 1, name: '全部' },
            { id: 2, name: '没有人' },
            { id: 3, name: '一个人' },
            { id: 4, name: '两个人' },
            { id: 5, name: '三个人' },
            { id: 6, name: '一群人' }
          ]
        },
        age: {
          name: '年龄',
          icon: 'el-icon-star-on',
          list: [
            { id: 1, name: '全部' },
            { id: 2, name: '婴儿' },
            { id: 3, name: '儿童' },
            { id: 4, name: '少年' },
            { id: 5, name: '青年' },
            { id: 6, name: '中年' },
            { id: 7, name: '老年' }
          ]
        },
        gender: {
          name: '姓别',
          icon: 'el-icon-view',
          list: [
            { id: 1, name: '全部' },
            { id: 2, name: '男人' },
            { id: 3, name: '女人' }
          ]
        }
      },
      cardImg: {
        cardSpan: 4,
        imgHeight: 200,
        fitModel: 'fill',
        preview: true,
        data: demoDataMatch,
        authorClick: function (item, index) {
          this.$message.success('开始加载同一用户上传的图片数据:' + index)
          console.log(JSON.stringify(item))
          this.option.data = demoDataMatch.slice(demoDataNum / 2)
        },
        iconLoveClick: function (item, index) {
          item.likeNum++
          console.log(JSON.stringify(item))
        },
        downLoadClick: function (item, index) {
          item.downLoadNum++
          console.log(JSON.stringify(item))
        },
        searchClick: function (item, index) {
          this.$message.success('开始搜索同类相似图片:' + index)
          console.log(JSON.stringify(item))
        }
      }
    }
  },
  methods: {
    screen () {
      this.option.button.screen = !this.option.button.screen
    },
    good (e) {
      if (e === '最热') {
        this.cardImg.cardSpan = 3
        console.log(this.cardImg.cardSpan)
        this.cardImg.data = demoDataHot
      } else if (e === '最佳匹配') {
        console.log(e)
        this.cardImg.data = demoDataMatch
      } else if (e === '最新时间') {
        this.cardImg.data = demoDataTime
      }
    },
    imageClick: function (item, index) {
      this.$message.success('图片点击后外部插件放大查看')
      this.$HxVueImagePreview(demoDataMatch, index)
      console.log(JSON.stringify(item))
    },
    changeOption () {
      this.$message.success('开始加载据:')
      this.option.data = demoDataMatch
    }
  }
}

</script>

<style lang="scss">
  #app{
    background-color: #545c64;
  }
  .menu{
    display: inline-block;
  }
  .test{
    display: inline-block;
    top: 50px;
  }
  .side{
    margin-left: 19px;
  }
.side-main{
  top: 69px;
}
</style>
