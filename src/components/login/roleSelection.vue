<template>
    <div>
        <login-header style="background:#fff;border-bottom: none"></login-header>
        <div class="common-width wrapper">
            <h1 class="title">请选择您的身份</h1>
            <div class="char">
                <a href="javascript:;" class="block char-logo" @click="selectRole">
                    <img src="../../assets/images/i-user.png" alt="">
                </a>
                <h2 class="char-text">我是车主</h2>
            </div>
            <div class="char">
                <a href="javascript:;" class="block char-logo" @click="selectRole">
                    <img src="../../assets/images/i-firm.png" alt="">
                </a>
                <h2 class="char-text">我是厂商</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginHeader from '@/components/login/LoginHeader.vue'
    export default {
        methods: {
            selectRole(){
                this.$router.push('/index');
            }
        },
        components: {
            LoginHeader
        }
    }
</script>

<style scoped>
    .wrapper {
        margin-top: 5vh;
        font-size: .36rem;
        color: #333;
        text-align: center;
    }
    .title {
        margin-bottom: 8vh;
    }
    .char {
        margin-bottom: 8vh;
    }
    .char-logo {
        width: 2.24rem;
        height: 2.24rem;
        margin: 0 auto;
        border: 1px solid transparent;
        border-radius: 100%;
        overflow: hidden;
        display: block;
    }
    .char-logo:hover {
        border-color: #f6b900;
    }
    .char-text {
        margin-top: 0.2rem;
    }
</style>
