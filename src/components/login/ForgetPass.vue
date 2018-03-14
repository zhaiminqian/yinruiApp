<template>
    <div>
        <login-header>
            <span slot="title">忘记密码</span>
        </login-header>
        <div class="forgetPass" :class="{active:forgetPassBoxActive.one}">
            <div class="inputText phone">
                <input type="text" placeholder="请输入手机号" v-model="forget.phone">
            </div>
            <div class="inputText phoneCode">
                <input type="text" placeholder="短信验证码" v-model="forget.phoneCode">
                <button class="code" @click="getPhoneCode" :disabled="dataTime.disabled">{{dataTime.msg}}</button>
            </div>
            <div class="forgetBtn">
                <a href="javascript:;" @click="nextTo">下一步</a>
            </div>
        </div>
        <div class="forgetPass" :class="{active:forgetPassBoxActive.two}">
            <div class="inputText passOne">
                <input type="password" placeholder="请输入新密码" v-model="newPass.pass">
            </div>
            <div class="inputText passOne">
                <input type="password" placeholder="确认新密码" v-model="newPass.passTwo">
            </div>
            <div class="forgetBtn">
                <a href="javascript:;" @click="LoginIn">登录</a>
            </div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import LoginHeader from '@/components/login/LoginHeader.vue'
    export default {
        data () {
            return {
                dataTime:{
                    num:60,
                    msg:"获取验证码",
                    disabled:false,
                },
                forget:{
                    phone:"",
                    phoneCode:""
                },
                forgetPassBoxActive:{
                    one:true,
                    two:false
                },
                newPass:{
                    pass:"",
                    passTwo:""
                }
            }
        },
        methods: {
            getPhoneCode(){
                if(this.forget.phone != "" && this.Cell_phone_reg(this.forget.phone)){
                    this.SetTime(this.dataTime);
                }else{
                    if(this.forget.phone == ""){
                        Toast('手机号不能为空');
                    }else if(!Cell_phone_reg(this.forget.phone)){
                        Toast('手机号格式不正确');
                    }
                }
            },
            // 下一步
            nextTo(){
                if(this.forget.phone != "" && this.Cell_phone_reg(this.forget.phone) && this.forget.phoneCode != ""){
                    // ajax
                    this.forgetPassBoxActive.one = false;
                    this.forgetPassBoxActive.two = true;
                }else{
                    if(this.forget.phone == ""){
                        Toast('手机号不能为空');
                    }else if(!Cell_phone_reg(this.forget.phone)){
                        Toast('手机号格式不正确');
                    }else if(this.forget.phoneCode == ""){
                        Toast('请输入短信验证码');
                    }
                }
            },
            // 登录
            LoginIn(){
                if(this.newPass.pass != "" && this.Strong_password_reg(this.newPass.pass) && this.newPass.passTwo == this.newPass.pass){
                    // ajax
                    // 请求数据 
                    this.setCookie("loginState",1,2000);
                    this.$router.push('/index');
                }else{
                    if(this.newPass.pass == ""){
                        Toast('请输入密码');
                    }else if(!this.Strong_password_reg(this.newPass.pass)){
                        Toast('密码格式不正确');
                    }else if(this.newPass.passTwo != this.newPass.pass){
                        Toast('俩次密码输入不正确');
                    }
                }
            },
            // 倒计时60秒
            SetTime(obj){
                let countdown = this.dataTime.num;
                if(countdown == 0){
                    obj.msg = "重新获取验证码";
                    obj.disabled = false;
                    obj.num = 60;
                    return false;
                }else{
                    obj.msg =  countdown + "秒后重新发送";
                    obj.disabled = true;
                    countdown -- ;
                    obj.num = countdown;
                }
                setTimeout(()=>{
                    this.SetTime(obj);
                },1000)
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
            setCookie(name,value,iday){
                let odate=new Date();
                odate.setDate(odate.getDate()+iday);
                document.cookie=name+"="+value+";expires="+odate;
            }
        },
        components: {
            LoginHeader
        }
    }
</script>

<style scoped>
input{
    border: none;
}
.forgetPass {
    display: none;    
    padding: 0 1.15rem;
}
.forgetPass.active{
    display: block;
}
.forgetPass input{
    font-size: 0.3rem;
    color: #73757a;
    border-bottom: 1px solid #dedede;
    display: block;
    width: 100%;
    padding-bottom: 10px;
    text-indent: 0.5rem;
    height: 0.7rem;
    line-height: 0.7rem;
}
.forgetPass .inputText{
    margin-top: 0.55rem;
    position: relative;
    line-height: 0;
}
.forgetPass .phone::before{
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
.forgetPass .phoneCode::before{
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
.forgetPass .phoneCode .code{
    position: absolute;
    right: 0;
    top: 3px;
    font-size: 0.3rem;
    color: #5495ce;
    border: none;
    background: none;
}
.forgetPass .forgetBtn{
    line-height: 0;
    margin-top: 0.9rem;
}
.forgetPass .forgetBtn a{
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
.forgetPass .passOne::before{
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
</style>
