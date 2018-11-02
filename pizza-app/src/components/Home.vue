<template>
    <div class="container">
        <h1>Home</h1>
        <button v-on:click="goToMenu" class="btn btn-success">Let's order!</button>
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
