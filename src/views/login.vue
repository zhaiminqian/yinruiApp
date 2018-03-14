<template>
    <div>
        <login-header style="background:#fff;border-bottom: none"></login-header>
        <login-in></login-in>
    </div>
</template>
<script>
    import LoginHeader from '@/components/login/LoginHeader.vue'
    import LoginIn from '@/components/login/LoginIn.vue'
    export default {
        components: {
            LoginHeader,
            LoginIn,
        }
    }
</script>
