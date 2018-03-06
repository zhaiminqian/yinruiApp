<template>
    <div>
        <login-header>
            <span slot="title">修改密码</span>
        </login-header>
        <div class="modifypass">
            <div class="item">
                <span>旧密码：</span><input type="password" placeholder="请输入旧密码..." v-model="modifyPass.oldPass">
            </div>
            <div class="item">
                <span>新密码：</span><input type="password" placeholder="请输入新密码..." v-model="modifyPass.newPass">
            </div>
            <div class="item">
                <span>确认密码：</span><input type="password" placeholder="请再次输入密码..." v-model="modifyPass.newPassTwo">
            </div>
        </div>
        <div class="yesBtn">
            <a href="javascript:;" @click="modifyBtn">确认</a>
        </div>
    </div>
</template>

<script>
    import LoginHeader from '@/components/login/LoginHeader.vue'
    export default {
        data () {
            return {
                modifyPass:{
                    oldPass:"",
                    newPass:"",
                    newPassTwo:""
                }
            }
        },
        methods: {
            modifyBtn(){
                if(this.modifyPass.oldPass != "" && this.modifyPass.newPass != "" && this.Strong_password_reg(this.modifyPass.newPass) && this.modifyPass.newPass == this.modifyPass.newPassTwo){

                }else{
                    if(this.modifyPass.oldPass == ""){
                        alert('请输入旧密码');
                    }else if(this.modifyPass.newPass == ""){
                        alert('请输入新密码');
                    }else if(!this.Strong_password_reg(this.modifyPass.newPass)){
                        alert('密码格式不正确');
                    }else if(this.modifyPass.newPass != this.modifyPass.newPassTwo){
                        alert('俩次密码输入不正确');
                    }
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
            }
        },
        components: {
            LoginHeader
        }
    }
</script>

<style scoped>
    .modifypass{
        background: #fff;
    }
    .modifypass .item{
        font-size: 0;
        padding: 0.35rem 0.22rem;
        border-bottom: 1px solid #eeeeee;
    }
    .modifypass input{
        border: none;
        display: inline-block;
        font-size:0.28rem; 
        color: #b5b5b5;
        vertical-align: top;
    }
    .modifypass span{
        display: inline-block;
        font-size: 0.28rem;
        color: #333;
        vertical-align: top;
    }
    .yesBtn{
        font-size: 0;
        margin-top: 0.8rem;
        padding: 0 1.15rem;
        
    }
    .yesBtn a{
        display: inline-block;
        border-radius: 5px;
        font-size: 0.3rem;
        background: #f6b900;
        color: #fff;
        text-align: center;
        width: 100%;
        height: 0.8rem;
        line-height: 0.8rem;
    }
</style>
