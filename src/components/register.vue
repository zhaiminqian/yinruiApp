<template>
  <div class="register">
    <!-- 头部 -->
    <div class="loginTitle">
        <a href="javascript:;"></a>
    </div>
    <!-- login -->
    <div class="login-logo">
        <img src="/static/images/login.png" alt="">
    </div>
    <div class="login m-reg">
        <ul>
            <li class="name Regactive">
                <input type="text" id="Name" placeholder="请输入您的昵称">
            </li>
            <li class="phone">
                <input type="text" placeholder="请输入手机号" id="RegPhone"/>
                <span class="prompt"></span>
            </li>
            <li class="passIcon">
                <input type="password" placeholder="请输入密码" id="RegPass"/>
                <span class="prompt"></span>
            </li>
            <li class="passIcon">
                <input type="password" placeholder="再次输入密码" id="RegPassTwo"/>
                <span class="prompt"></span>
            </li>
            <li class="verification">
                <input type="text" id="smsCode" placeholder="短信验证码" />
                <button class="code" data-time="60">获取验证码</button>
            </li>
            <li class="loginBtn">
                <a href="javascript:;" id="regBtn">注册</a>
            </li>
            <li class="regText">
                <p>还没有帐号？<a href="">立即登录</a></p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  @import './../../static/css/info.css';

</style>
