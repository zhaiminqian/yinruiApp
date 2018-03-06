<template>
    <div>
        <div class="login-logo">
            <img src="../../assets/images/login.png" alt="">
        </div>
        <div class="login">
            <ul>
                <li class="phone" :class="{active:LoginInActive.one}">
                    <input type="text" placeholder="请输入手机号" v-model="loginIn.phone" @focus="PhoneGetFocus" />
                </li>
                <li class="passIcon" :class="{active:LoginInActive.two}">
                    <input type="password" placeholder="请输入密码" v-model="loginIn.pass" @focus="PassGetFocus"/>
                </li>
                <li class="loginBtn">
                    <a href="javascript:;" @click="LoginBtn">登录</a>
                </li>
                <li class="regText">
                    <p>还没有帐号？<a href="javascript:;" @click="SwitchReg">立即注册</a></p>
                </li>
            </ul>
        </div>
        <div class="login-forgetpass">
            <router-link to='/ForgetPass'>忘记密码？</router-link> 
        </div>
    </div> 
</template>
<script>
    export default {
        data () {
            return {
                loginIn:{
                    phone:"",
                    pass:""
                },
                LoginInActive:{
                    one:true,
                    two:false
                }

            }
        },
        methods: {
            // 请输入手机获取焦点
            PhoneGetFocus(){
                this.LoginInActive.one = true;
                this.LoginInActive.two = false;
            },
            // 输入密码获取焦点
            PassGetFocus(){
                this.LoginInActive.one = false;
                this.LoginInActive.two = true;
            },
            // 登录
            LoginBtn(){
                if(this.loginIn.phone != "" && this.Cell_phone_reg(this.loginIn.phone) && this.loginIn.pass != "" && this.Strong_password_reg(this.loginIn.pass)){
                    // 请求数据 
                }else{
                    if(this.loginIn.phone == ""){
                        alert('手机号不能为空');
                    }else if(!this.Cell_phone_reg(this.loginIn.phone)){
                        alert('手机号格式不正确');
                    }else if(this.loginIn.pass == ""){
                        alert('密码不能为空');
                    }else if(!this.Strong_password_reg(this.loginIn.pass)){
                        alert('密码格式不正确');
                    }
                }
            },
            // 手机号验证
            Cell_phone_reg(value){
                let reg = /^((17[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(19[0-9]))\d{8}$/;
                if (value == '') {
                    return;
                }else{
                    return reg.test(value);
                }
            },
            //密码验证
            Strong_password_reg(value){
                let reg = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
                if (value == '') {
                    return;
                }else{
                    return reg.test(value);
                }
            },
            // 注册
            SwitchReg(){

            }
        }
    }
</script>
<style scoped>
.login-logo{
    position: absolute;
    left: 0;
    right: 0;
    text-align: center;
    top: 15%;
}
.login-logo img{
    width: 3.4rem;
    height: 1rem;
}
.login{
    position: absolute;
    left: 0;
    right: 0;
    top: 40%;
    padding: 0 1.15rem;
}
.login input{
    border: none;
}
.login input[type='text']{
    font-size: 0.3rem;
    color: #73757a;
    border-bottom: 1px solid #dedede;
    display:block;
    width: 100%;
    padding-bottom: 10px;
    text-indent: 0.5rem;
    height: 0.7rem;
    line-height: 0.7rem;
    
}
.login input[type='password']{
    font-size: 0.3rem;
    color: #73757a;
    border-bottom: 1px solid #dedede;
    display:block;
    width: 100%;
    padding-bottom: 10px;
    text-indent: 0.5rem;
    height: 0.7rem;
    line-height: 0.7rem;
}
.login button.code{
    position: absolute;
    right: 0;
    top: 3px;
    font-size: 0.3rem;
    color: #5495ce;

}
.login li{
    margin-bottom: 0.55rem;
    position: relative;
    line-height: 0;
}
.login li.active input{
    border-bottom: 1px solid #f6bc0b;
}
.login li.Regactive input{
    border-bottom: 1px solid #d6000f;
}
.login .phone::before{
    position: absolute;
    content: "";
    display: block;
    width: 0.26rem;
    height: 0.41rem;
    background: url(../../assets/images/loginPhone.png) no-repeat center;
    background-size: cover;
    left: 0;
    top: 3px;
}
.login .passIcon::before{
    position: absolute;
    content: "";
    display: block;
    width: 0.29rem;
    height: 0.39rem;
    background: url(../../assets/images/loginPass.png) no-repeat center;
    background-size: cover;
    left: 0;
    top: 3px;
}
.login .name::before{
    position: absolute;
    content: "";
    display: block;
    width: 0.38rem;
    height: 0.38rem;
    background: url(../../assets/images/regren.png) no-repeat center;
    background-size: cover;
    left: 0;
    top: 3px;
}
.login .verification::before{
    position: absolute;
    content: "";
    display: block;
    width: 0.23rem;
    height: 0.44rem;
    background: url(../../assets/images/regyan.png) no-repeat center;
    background-size: cover;
    left: 0;
    top: 3px;
}
.login .loginBtn{
    line-height: 0;
}
.login .loginBtn a{
    display: inline-block;
    width: 100%;
    height: 0.8rem;
    color: #fff;
    font-size: 0.3rem;
    background: #f6bc0b;
    border-radius: 5px;
    text-align: center;
    line-height: 0.8rem;
}
.login .regText{
   font-size: 0.28rem;
   text-align: center;
   color:  #73757a;
}
.login .regText a{
    color: #d6000f;
    display: inline;
}
.login-forgetpass{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0.5rem;
    text-align: center;
}
.login-forgetpass a{
    display: block;
    font-size: 0.28rem;
    color: #73757a;
}
</style>
