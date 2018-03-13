<template>
    <div class="editbox">
        <login-header>
            <span slot="title">编辑问题</span>
            <a href="javascript:;" slot="ok" class="ok" :class="{active:okAtive}" @click="problemOk">完成</a>
        </login-header>
        <!-- 编辑页面 -->
        <div class="edit headPad">
            <div class="fileimg">
                <label for="file" class="z_file_label" id=""><img :src="addImg" alt="" id="ImgPr" class="z_file_img"></label>
                <input type="file" name="file" id="file" class="z_file_input" @change="fileImg" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple="multiple"/>
            </div>
            <div class="problem">
                <input type="text" placeholder="请输入问题的标题" v-model="problemTitle">
            </div>
            <div class="sketch">
                <textarea placeholder="添加问题描述（选填），问题提交后可能会 被管理员重新编辑" v-model="problemContent"></textarea>
            </div>
        </div>
    </div>
</template>

<script>
    import LoginHeader from '@/components/login/LoginHeader.vue'
    import addimg from '../../assets/images/addimg.png'
    export default {
        data () {
            return {
                addImg:addimg,
                problemTitle:"",
                problemContent:""
            }
        },
        methods:{
            fileImg(e){
                let file = e.target.files[0];
                let imgSize = file.size/1024;
                if(imgSize > 200){
                    alert('请上传大小不要超过200KB的图片');
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = ()=>{
                        let dataURL = reader.result;
                        this.addImg = dataURL;
                    }
                }
            },
            problemOk(){
                if(this.okAtive){
                    alert('提交数据成功');
                }else{
                    return false;
                }
            }
        },
        computed: {
            okAtive(){
                if(this.addImg != addimg && this.problemTitle != "" && this.problemContent != ""){
                    return true;
                }else{
                    return false;
                }
            }
        },
        components: {
            LoginHeader
        }
    }
</script>

<style scoped>
    .editbox{
        background: #eeeeee;   
    }
    input{
        background: none;
		border: none;
    }
    textarea{
        background: none;
		border: none;
    }
    /* 编辑问题页面 */
    .edit .fileimg{
        background: #fff;
        padding: 0.34rem 0.22rem;
    }
    .edit .fileimg .z_file_input{
        display: none;
    }
    .edit .problem{
        background: #fff;
        padding: 0 0.22rem;
    }
    .edit .problem input{
        font-size: 0.42rem;
        color: #333333;
        width: 100%;
    }
    .edit .sketch{
        background: #fff;
        padding: 0 0.22rem;
        height: 8rem;
        width: 100%;
        margin-top: 4px;
        padding-top: 0.3rem;
    }
    .edit .sketch textarea{
        font-size: 0.36rem;
        color: #333333;
        width: 100%;
        height: 100%;
    }
</style>

