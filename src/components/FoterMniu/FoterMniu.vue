<template>

  <div class="footer_guide">
    <a class="guide_item" :class="{active:$route.path == '/home'}" @click="goto('/home')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path == '/search'}" @click="goto('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path == '/order'}"  @click="goto('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{active:$route.path == '/people'}" @click="goto('/people')">
      <span class="item_icon">
        <i class="iconfont icon-wo"></i>
      </span>
      <span>我的</span>
    </a>
  </div>
</template>
<script>

 export default{
 	methods:{
 		goto(path){
 			this.$router.replace(path)
 		}
 	}
 }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .active
      color green !important
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>