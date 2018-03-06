$(function(){
    // 登录注册页面
    $('.m-log li').find('input').focus(function(){
        $(this).parent('li').addClass('active').siblings().removeClass('active');
    })
    $('#loginBtn').on('touchstart',function(){
        if( Cell_phone_reg($('#LoginPhone').val()) && $('#LoginPhone').val() != "" && $('#LoginPass').val() != ""  && Strong_password_reg($('#LoginPass').val())){
            $('#LoginPhone').val('');
            $('#LoginPass').val('');
        }else{
            if($('#LoginPhone').val() == ""){
                layer.msg('手机号不能为空');
            }else if(!Cell_phone_reg($('#LoginPhone').val())){
                layer.msg('手机号格式不正确')
            }else if($('#LoginPass').val() == ""){
                layer.msg('密码不能为空');
            }else if(!Strong_password_reg($('#LoginPass').val())){
                layer.msg('密码格式不正确');
            }
        }
    })
    // 注册页面
    $('.m-reg li').find('input').focus(function(){
        $(this).parent('li').addClass('Regactive').siblings().removeClass('Regactive');
    })
    $('#RegPhone').blur(function(){
        if(Cell_phone_reg($(this).val()) == false){
            $(this).next('span').text('手机格式为11位数字组成');
        }else{
            $(this).next('span').text('');
        }
    })
    $('#RegPass').blur(function(){
        if(Strong_password_reg($(this).val()) == false){
            $(this).next('span').text('字母和数字的组合，长度在8-10之间');
        }else{
            $(this).next('span').text('');
        }
    })
    $('#RegPassTwo').blur(function(){
        if($(this).val() != $('#RegPass').val()){
            $(this).next('span').text('俩次密码输入不正确');
        }else{
            $(this).next('span').text('');
        }
    })
    // 手机验证码发送短信
    $('.m-reg li').find('.code').on('click',function(){
        if($('#RegPhone').val() != "" && Cell_phone_reg($('#RegPhone').val())){
            settime($(this));
            console.log($(this));
        }else{
            if($('#RegPhone').val() == ""){
                layer.msg('手机号不能为空');
            }else if(!Cell_phone_reg($('#RegPhone').val())){
                layer.msg('手机号格式不正确');
            }
        }
    })
    // 立即注册
    $('#regBtn').on('touchstart',function(){
        if($('#Name').val() !='' && $('#RegPhone').val() != "" && Cell_phone_reg($('#RegPhone').val()) && $('#RegPass').val() != "" && Strong_password_reg($('#RegPass').val()) && $('#smsCode').val() != "" && $('#RegPassTwo').val() == $('#RegPass').val()){
            // 可以注册
            $('#Name').val('');
            $('#RegPhone').val("");
            $('#RegPass').val("");
            $('#RegPassTwo').val("");
            $('#smsCode').val(""); 
        }else {
            if($('#Name').val() ==''){
                layer.msg('请输入昵称');
            }else if($('#RegPhone').val() == "" ){
                layer.msg('请输入手机号');
            }else if (!Cell_phone_reg($('#RegPhone').val())){
                layer.msg('手机号格式不正确');
            }else if ($('#RegPass').val() == ""){
                layer.msg('请输入密码');
            }else if (!Strong_password_reg($('#RegPass').val())){
                layer.msg('密码格式不正确');
            }else if($('#smsCode').val() == ""){
                layer.msg('请输入短信验证码');
            }else if($('#RegPassTwo').val() != $('#RegPass').val()){
                layer.msg('俩次密码输入不正确');                
            }
        }
    })
    // 找回密码页面
    $('.forgetPass').find('.code').click(function(){
        if($('#forgetPhone').val() != "" && Cell_phone_reg($('#forgetPhone').val())){
            settime($(this));
        }else{
            if($('#forgetPhone').val() == ""){
                layer.msg('手机号不能为空');
            }else if(!Cell_phone_reg($('#forgetPhone').val())){
                layer.msg('手机号格式不正确');
            }
        }
    })
    $('#next').on('touchstart',function(){
        if($('#forgetPhone').val() != "" && Cell_phone_reg($('#forgetPhone').val()) && $('#forgetPhoneCode').val() != ""){
            // 请求数据成功后 添加 代码：
            $('.forgetPass')[0].className = 'forgetPass';
            $('.forgetPass')[1].className = 'forgetPass active';
        }else{
            if($('#forgetPhone').val() == ""){
                layer.msg('手机号不能为空');
            }else if(!Cell_phone_reg($('#forgetPhone').val())){
                layer.msg('手机号格式不正确');
            }else if($('#forgetPhoneCode').val() == ""){
                layer.msg('请输入短信验证码');
            }
        }
    })
    $('#forgetLogin').on('touchstart',function(){
        if($('#forgetPass').val() != '' &&  Strong_password_reg($('#forgetPass').val()) && $('#forgetPass').val() == $('#forgetPassTwo').val()) {
            $('#forgetPass').val('');
            $('#forgetPassTwo').val('');
        }else {
            if($('#forgetPass').val() == ''){
                layer.msg('请输入密码');
            }else if(!Strong_password_reg($('#forgetPass').val())){
                layer.msg('密码格式不正确');
            }else if($('#forgetPass').val() != $('#forgetPassTwo').val()){
                layer.msg('俩次密码输入不正确');
            }
        }
    })
    // 修改密码页面
    $('#modifyBtn').on('touchstart',function(){
        if($('#oldPass').val() != "" && $('#newPass').val() != "" && Strong_password_reg($('#newPass').val()) && $('#newPass').val() == $('#newPassTwo').val()){
            $('#oldPass').val("");
            $('#newPass').val("");
            $('#newPassTwo').val("");
        }else {
            if($('#oldPass').val() == ""){
                layer.msg('请输入旧密码');
            }else if($('#newPass').val() == ""){
                layer.msg('请输入新密码');
            }else if(!Strong_password_reg($('#newPass').val())){
                layer.msg('密码格式不正确');
            }else if($('#newPass').val() != $('#newPassTwo').val()){
                layer.msg('俩次密码输入不正确');
            }
        }
    })

})
function Cell_phone_reg(value) {
    var reg = /^((17[0-9])|(13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9])|(19[0-9]))\d{8}$/;
    if (value == '') {
        return;
    }else{
        return reg.test(value);
    }
}
/**
 * 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
 */
function Strong_password_reg(value) {
	var reg = /^(?=.*\d)(?=.*[a-zA-Z]).{6,16}$/;
	if (value == '') {
		return;
	}else{
		return reg.test(value);
	}
}
function settime(obj) {
    var countdown=obj.attr('data-time');
    if (countdown == 0) {
        obj.text("重新获取验证码");
        obj.removeAttr('disabled');
        obj.attr('data-time','60');
        return countdown = 60;
    } else {
        obj.text(countdown + "秒后重新发送"); 
        obj.attr('disabled', 'disabled');
        countdown--;
        obj.attr('data-time',countdown);
    }
    setTimeout(function () {
        settime(obj)
    }, 1000)
}