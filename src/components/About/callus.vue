<template>
  <div class="card text-dark bg-light mb-3">
    <div class="card-header">联系我们</div>
    <div class="card-body">
      <h4>联系我们</h4>
      <p class="card-text">18622490058@163.com</p>

      <router-link :to="{name: 'phonelink'}" class="nav-link" >phone</router-link>
      <router-link :to="{name: 'personlink'}" class="nav-link" >person</router-link>
<router-view></router-view>
    </div>
  </div>
</template>

<script>
    export default {
methods:{
  gotophone(){
    this.$router.push('./phone')
  },
  gotoperson(){
    this.$router.push('./person')
  },
}
    }
</script>

<style scoped>

</style>
