<template>
  <div>
    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎大家品尝pizza</h1>
          <h2>这里一定有您喜爱的pizza！</h2>
          <button @click="gotomenu" class="btn btn-success">go menu!</button>

        </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    methods: {
      gotomenu() {
        //跳转到上次浏览的页面
        //this.$router.go(-1)
        //跳转指定地址
        //this.$router.replace('/menu')
        //跳转指定路由名字下
        //this.$router.replace({name:'menulink'})
        //通过push进行跳转
        this.$router.push('./menu')
      }
    }
  }
</script>

<style scoped>
#home{
  background: url("../../src/assets/pizza.png ");
  height: 85vh;
  padding: 10%;
}
  h1,h2{
    margin: 6%;
  }
  .background{
    background: #eee ;
    opacity: 0.8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
