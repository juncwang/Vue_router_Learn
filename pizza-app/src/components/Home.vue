<template>
    <div class="row">
        <div id="home" class="col-sm-12 text-center">
            <div class="background">
                <h1>欢迎大家品尝pizza</h1>
                <h2>这里有你非常喜欢的pizza</h2>
                <button v-on:click="goToMenu" class="btn btn-success">Let's order!</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        goToMenu:function(){
            // 跳转到上一次浏览的页面
            // this.$router.go(-1)

            // 跳转到指定的组建
            // this.$router.replace('/menu')

            // 指定跳转路由的名字
            // this.$router.replace({ name: 'menuLink'})

            // 通过 push 进行跳转
            // this.$router.push('/menu')
            this.$router.push({ name: 'menuLink'})
        }
    }
}
</script>

<style scoped>
#home {
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541518094913&di=ec6fab40786d82d5d87b0361eee7260b&imgtype=0&src=http%3A%2F%2Fatt.bbs.duowan.com%2Fforum%2F201309%2F27%2F121732olrimy3dkxgrmdyl.jpg");
    background-size: 100%;
    height: 85vh;
    padding: 10%;
}

h1,h2 {
    margin: 6%;
}

.background {
    background: #eee;
    opacity: .8;
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px 0;
}
</style>
