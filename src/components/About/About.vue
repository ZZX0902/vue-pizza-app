<template>
  <div>
    <div class="row mb-5">
      <div class="col-4">
        <!--导航-->
        <div class="list-group mb-5">
          <router-link tag="li" class="nav-link" :to="{name:'calluslink'}">
            <a class="list-group-item list-group-item-action">联系我们</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'newslink'}">
            <a class="list-group-item list-group-item-action">新闻</a>
          </router-link>
          <router-link tag="li" class="nav-link" :to="{name:'historylink'}">
            <a class="list-group-item list-group-item-action">历史订单</a>
          </router-link>


          <router-link tag="li" class="nav-link" :to="{name:'deliverylink'}">
            <a class="list-group-item list-group-item-action">快递信息</a>
          </router-link>

        </div>
      </div>
      <div class="col-5 ">
        <!--导航内容-->
        <router-view></router-view>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "About"
  }
</script>

<style scoped>

</style>
