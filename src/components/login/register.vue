<template>
	<div class="register">
		<login-header>
			<span slot="title">注册</span>
		</login-header>
		<!-- login -->
		<div class="login-logo">
			<img src="/static/images/login.png" alt="">
		</div>
		<div class="login m-reg">
			<ul>
				<li class="name">
					<input type="text" id="Name" placeholder="请输入您的昵称" v-model="info.name" @blur="nameB" :class="{active:msg.name.isActive}">
					<span class="prompt">{{msg.name.prompt}}</span>
				</li>
				<li class="phone">
					<input type="text" placeholder="请输入手机号" id="RegPhone" v-model="info.RegPhone" @blur="phoneB" :class="{active:msg.phone.isActive}"/>
					<span class="prompt">{{msg.phone.prompt}}</span>
				</li>
				<li class="passIcon">
					<input type="password" placeholder="请输入密码" id="RegPass" v-model="info.RegPass" @blur="passB" :class="{active:msg.pass.isActive}"/>
					<span class="prompt">{{msg.pass.prompt}}</span>
				</li>
				<li class="passIcon">
					<input type="password" placeholder="再次输入密码" id="RegPassTwo" v-model="info.RegPassTwo" @blur="passTwoB" :class="{active:msg.passTwo.isActive}"/>
					<span class="prompt">{{msg.passTwo.prompt}}</span>
				</li>
				<li class="verification">
					<input type="text" id="smsCode" placeholder="短信验证码" v-model="info.smsCode"  @blur="smsCodeB" :class="{active:msg.smsCode.isActive}" />
					<button class="code" data-time="60"  :disabled="dataTime.disabled" @click='yzm'>{{dataTime.msg}}</button>
					<span class="prompt">{{msg.smsCode.prompt}}</span>
				</li>
				<li class="loginBtn">
					<a href="javascript:;" id="regBtn" @click="rigisterFn">注册</a>
				</li>
				<li class="regText">
					<p>还没有帐号？
						<router-link to='/'>立即登录</router-link>
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { Toast } from 'mint-ui';
import LoginHeader from "@/components/login/LoginHeader";
export default {
  	data() {
		return {
			info: {
				name: "", //昵称
				RegPhone: "", //手机号
				RegPass: "", //密码
				RegPassTwo: "", //再次输入密码
				smsCode: "" //短信验证码
			},
			msg: {
				name: {
					prompt: "",
					isActive: false
				},
				phone: {
					prompt: "",
					isActive: false
				},
				pass: {
					prompt: "",
					isActive: false
				},
				passTwo: {
					prompt: "",
					isActive: false
				},
				smsCode: {
					prompt: "",
					isActive: false
				}
			},
			//倒计时
			dataTime: {
				num: 60,
				msg: "获取验证码",
				disabled: false
			}
		}
  	},
  	methods: {
		// 倒计时60秒
		SetTime() {
			let countdown = this.dataTime.num;
			if (countdown == 0) {
				this.dataTime.msg = "重新获取验证码";
				this.dataTime.disabled = false;
				this.dataTime.num = 60;
				return false;
			} else {
				this.dataTime.msg = countdown + "秒后重新发送";
				this.dataTime.disabled = true;
				countdown--;
				this.dataTime.num = countdown;
			}
			setTimeout(() => {
				this.SetTime();
			}, 1000);
		},
    	//注册按钮点击
    	rigisterFn() {
			//手机号正则
			let regPhone = /^((17[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(19[0-9]))\d{8}$/;
			//密码正则
			let regPass = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
			if (this.info.name == "") {
				Toast("请输入您的昵称");
			} else if (this.info.RegPhone == "") {
				Toast("请输入您的手机号");
			} else if (!regPhone.test(this.info.RegPhone)) {
				Toast("手机号格式不正确");
			} else if (this.info.RegPass == "") {
				Toast("请输入密码");
			} else if (!regPass.test(this.info.RegPass)) {
				Toast("密码格式不正确");
			} else if (this.info.RegPassTwo == "") {
				Toast("请再次输入密码");
			} else if (this.info.RegPass != this.info.RegPassTwo) {
				Toast("两次密码不一致");
			} else if (this.info.smsCode == "") {
				Toast("请输入短信验证码");
			} else {
				Toast("注册成功！");
				this.$router.push('/');
			}
    	},
		//表单失去焦点
		nameB() {
			if (this.info.name == "") {
				this.msg.name.isActive = true;
				this.msg.name.prompt = "请输入您的昵称";
			} else {
				this.msg.name.isActive = false;
				this.msg.name.prompt = "";
			}
		},
		phoneB() {
			//手机号正则
			let regPhone = /^((17[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(19[0-9]))\d{8}$/;
			if (this.info.RegPhone == "") {
				this.msg.phone.isActive = true;
				this.msg.phone.prompt = "请输入您的手机号";
			} else if (!regPhone.test(this.info.RegPhone)) {
				this.msg.phone.isActive = true;
				this.msg.phone.prompt = "手机号格式不正确";
			} else {
				this.msg.phone.isActive = false;
				this.msg.phone.prompt = "";
			}
		},
		passB() {
			//密码正则
			let regPass = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
			if (this.info.RegPass == "") {
				this.msg.pass.isActive = true;
				this.msg.pass.prompt = "请输入密码";
			} else if (!regPass.test(this.info.RegPass)) {
				this.msg.pass.isActive = true;
				this.msg.pass.prompt = "密码格式不正确";
			} else {
				this.msg.pass.isActive = false;
				this.msg.pass.prompt = "";
			}
		},
		passTwoB() {
			//密码正则
			let regPass = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
			if (this.info.RegPassTwo == "") {
				this.msg.passTwo.isActive = true;
				this.msg.passTwo.prompt = "请再次输入密码";
			} else if (this.info.RegPass != this.info.RegPassTwo) {
				this.msg.passTwo.isActive = true;
				this.msg.passTwo.prompt = "两次输入的密码不一致";
			} else {
				this.msg.passTwo.isActive = false;
				this.msg.passTwo.prompt = "";
			}
		},
		smsCodeB() {
			if (this.info.smsCode == "") {
				this.msg.smsCode.isActive = true;
				this.msg.smsCode.prompt = "请输入短信验证码";
			} else {
				this.msg.smsCode.isActive = false;
				this.msg.smsCode.prompt = "";
			}
		},
		//验证码
		yzm() {
			//手机号正则
			let regPhone = /^((17[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(19[0-9]))\d{8}$/;
			if (regPhone.test(this.info.RegPhone)) {
				this.SetTime();
			} else {
				this.$layer.toast({
					icon: "icon-check",
					content: "请输入正确的手机号",
					time: 2000
				});
				this.dataTime.disabled = false;
			}
		}
  	},
	components: {
		LoginHeader
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
	outline: none;
	border: none;
}
.login input + span {
  	display: none !important;
}
.login input.active + span {
  	display: block !important;
}
.login-logo {
	position: absolute;
	left: 0;
	right: 0;
	text-align: center;
	top: 13%;
}
.login-logo img {
	width: 3.4rem;
	height: 1rem;
}

.login {
	position: absolute;
	left: 0;
	right: 0;
	top: 40%;
	padding: 0 1.15rem;
}
.login input[type="text"] {
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
.login input[type="password"] {
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
.login button.code {
	position: absolute;
	right: 0;
	top: 3px;
	font-size: 0.3rem;
	color: #5495ce;
	background: none;
	border: none;
}
.login li {
	margin-bottom: 0.55rem;
	position: relative;
	line-height: 0;
}

.login li input:focus{
  border-bottom: 1px solid #f6bc0b;
}

.login li.active input {
  	border-bottom: 1px solid #f6bc0b;
}
.login li.Regactive input {
  	border-bottom: 1px solid #d6000f;
}
.login li input:focus {
  	border-bottom: 1px solid #f6bc0b;
}
.login .phone::before {
	position: absolute;
	content: "";
	display: block;
	width: 0.26rem;
	height: 0.41rem;
	background: url(/static/images/loginPhone.png) no-repeat center;
	background-size: cover;
	left: 0;
	top: 3px;
}
.login .passIcon::before {
	position: absolute;
	content: "";
	display: block;
	width: 0.29rem;
	height: 0.39rem;
	background: url(/static/images/loginPass.png) no-repeat center;
	background-size: cover;
	left: 0;
	top: 3px;
}
.login .name::before {
	position: absolute;
	content: "";
	display: block;
	width: 0.38rem;
	height: 0.38rem;
	background: url(/static/images/regren.png) no-repeat center;
	background-size: cover;
	left: 0;
	top: 3px;
}
.login .verification::before {
	position: absolute;
	content: "";
	display: block;
	width: 0.23rem;
	height: 0.44rem;
	background: url(/static/images/regyan.png) no-repeat center;
	background-size: cover;
	left: 0;
	top: 3px;
}
.login .loginBtn {
  	line-height: 0;
}
.login .loginBtn a {
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
.login .regText {
	font-size: 0.28rem;
	text-align: center;
	color: #73757a;
}
.login .regText a {
	color: #d6000f;
	display: inline;
}
.login-forgetpass {
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0.5rem;
	text-align: center;
}
.login-forgetpass a {
	display: block;
	font-size: 0.28rem;
	color: #73757a;
}
.m-reg .prompt {
	font-size: 0.24rem;
	color: #d6000f;
	display: inline-block;
	position: absolute;
	bottom: -0.24rem;
}
.m-reg {
  	top: 26%;
}
</style>
