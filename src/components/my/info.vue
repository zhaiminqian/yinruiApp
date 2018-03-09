<template>
    <div>
        <login-header style="position: fixed;">
            <span slot="title">基本信息</span>
        </login-header>
        <!-- 个人信息页面 -->
        <div class="info headPad">
            <ul>
                <li>
                    <p><span class="type">昵称：</span><span class="text"><input type="text" placeholder="请输入您的昵称" v-model="userNickName"></span></p>
                </li>
                <li id="sexBtn">
                    <p><span class="type">性别：</span><span @click="OptSex" class="text">{{sexObj.msg}}</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li>
                    <p><span class="type">真实姓名：</span><span class="text"><input type="text" placeholder="请输入您的姓名" v-model="userName"></span></p>
                </li>
                <li id="cityBtn">
                    <p><span class="type">所在地：</span><span @click="OptCity" class="text">北京市 北京市 朝阳区</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li id="carBtn">
                    <p><span class="type">是否有车：</span><span id="car"  class="text">是</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li id="carTypeBtn">
                    <p><span class="type">车型：</span><span id="carType" class="text">中型车</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li class="marginTop">
                    <p><span class="type">驾龄：</span><span class="text"><input type="number" value="" placeholder="请输入您的驾龄"></span></p>
                </li>
                <li id="carYearBtn">
                    <p><span class="type">曾有车型：</span><span id="carYear"  class="text">中型车</span><a href="javascript:;" class="openNext"></a></p>
                </li>
            </ul>
            <!-- sex 数据 -->
            <mt-popup v-model="sexObj.popupVisible" position="bottom">
                <div class="picker">
                    <div class="optBtn">
                        <mt-button type="default" @click="sexNo">取消</mt-button>
                        <mt-button type="primary" @click="sexYes">确定</mt-button>
                    </div>
                    <div>
                        <mt-picker :slots="sexObj.slots"  @change="onSexChange"></mt-picker>
                    </div>
                </div>
            </mt-popup>
            <!-- city 数据 -->
            <mt-popup v-model="cityObj.popupVisible" position="bottom">
                <div class="picker">
                    <div class="optBtn">
                        <mt-button type="default">取消</mt-button>
                        <mt-button type="primary">确定</mt-button>
                    </div>
                    <div>
                        <mt-picker :slots="cityObj.slots" @change="onCityChange"></mt-picker>
                    </div>
                </div>
            </mt-popup>
            <!-- 上传驾照 -->
            <div class="driving">
                <h3>上传驾照</h3>
                <div class="filebox">
                    <label for="file" class="z_file_label"><img src="images/fileimg.png" alt="" id="ImgPr" class="z_file_img"></label>
                    <input type="file" name="file" id="file" class="z_file_input" value="" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple="multiple"/>
                    <span>建议图像比列 1：1，宽度不小于1080像素。</span>
                </div>
                <h3 class="marginTop">上传行驶本</h3>
                <div class="filebox">
                    <label for="file2" class="z_file_label"><img src="images/fileimg.png" id="ImgPr2" alt="" class="z_file_img"></label>
                    <input type="file" name="file" id="file2" class="z_file_input" value="" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple="multiple"/>
                    <span>建议图像比列 1：1，宽度不小于1080像素。</span>
                </div>
            </div>
            <!-- 保存 -->
            <div class="confirm">
                <a href="javascript:;">确认</a>
            </div>
        </div>
    </div>
</template>
<script>
    import LoginHeader from '@/components/login/LoginHeader.vue'
    import myaddress from './city.json'
    // import { Picker } from 'mint-ui'
    // Vue.component(Picker.name, Picker);
    export default {
        data () {
            return {
                userNickName:"",
                sexObj:{
                    slots:[
                        {
                            flex: 1,
                            values: ['男','女'],
                            className: 'slot1',
                            textAlign: 'center'
                        }
                    ],
                    popupVisible:false,
                    msg:"请选择您的性别",
                    sex:""
                },
                userName:"",
                cityObj:{
                    popupVisible:false,
                    slots:[
                        {
                            flex: 1,
                            defaultIndex: 1, 
                            values: Object.keys(myaddress),
                            className: 'slot1',
                            textAlign: 'left'
                        },
                        {
                            divider: true,
                            content: '-',
                            className: 'slot2'
                        },
                        {
                            flex: 1,
                            values: [],
                            className: 'slot3',
                            textAlign: 'center'
                        },
                        {
                            divider: true,
                            content: '-',
                            className: 'slot4'
                        },
                        {
                            flex: 1,
                            values: [],
                            className: 'slot5',
                            textAlign: 'right'
                        }

                    ],
                }

            }
        },
        methods: {
            // 选择性别
            OptSex(){
                this.sexObj.popupVisible = !this.sexObj.popupVisible;
            },
            // 选择 性别 （数据） 
            onSexChange(picker, values){
                this.sexObj.sex = values;
            },
            // 确认选择性别
            sexYes(){
                this.sexObj.msg = this.sexObj.sex.toString();
                this.sexObj.popupVisible = !this.sexObj.popupVisible;
            },
            // 取消选择性别
            sexNo(){
                this.sexObj.popupVisible = !this.sexObj.popupVisible;
            },
            // 选择城市
            OptCity(){
                this.cityObj.popupVisible = !this.cityObj.popupVisible;
            },
            // 城市切换数据
            onCityChange(picker, values){
                console.log(myaddress[values[0]]);
                if(myaddress[values[0]]){
                    picker.setSlotValues(1,Object.keys(myaddress[values[0]]));
                    picker.setSlotValues(2,myaddress[values[0]][values[1]]); 
                }
            }

        },
        mounted () {
            this.$nextTick(()=>{
                this.cityObj.slots[0].defaultIndex = 0;
            })
            
        },
        components: {
            LoginHeader
        }
    }
</script>

<style scoped>
    /* 底部 popup样式 */
    .mint-popup{
        width: 100%;
    }
    .picker{
        height: 220px;
        background: #ffffff;
        width: 100%;
    }
    .picker .optBtn{
        line-height: 0;
        background: #eeeeee;
        padding: 5px 10px;
    }
    .picker .optBtn button{
        padding: 5px 10px;
        font-size: 12px;
        height: auto;
    }
    .picker .optBtn button:nth-child(2){
        float: right;
    }
    .picker .optData{
        position: relative;
        height: 100%;
    }
    .picker .optScroll{
        transform: translateY(72px);
        margin-top: 0;
    }
    .picker-item{
        font-size: 16px;
        text-align: center;
        cursor: pointer;
    }
    .picker-center-highlight{
        height: 36px;
    }
    /* 内容样式 */
    .headPad{
        padding: 0.24rem 0;
        margin-bottom: 1rem;
        padding-top: 0.88rem;
    }
    .info li{
        padding: 0.37rem 0.22rem;
        background: #fff;
        border-bottom: 1px solid #eeeeee;
        position: relative;
    }
    .info li.marginTop{
        margin-top: 0.1rem;
    }
    .info li input[type="text"]{
        line-height: normal;
        width: 100%;
        border: none;
        height: auto;
        padding: 0;
        margin-bottom: 0;
        font-size: 0.28rem;
    }
    .info li input[type="number"]{
        line-height: normal;
        width: 100%;
        border: none;
        height: auto;
        padding: 0;
        margin-bottom: 0;
        font-size: 0.28rem;
    }
    .info li p{
        font-size: 0.28rem;
        color: #333;
        margin-bottom: 0px;
    }
    .info li p span{
        display: inline-block;
    }
    .info li p span.type{
        width: 1.5rem;
    }
    .info li p span.text{
        width: 5.5rem;
    }
    .info li a.openNext{
        position: absolute;
        right: 0.22rem;
    }
    .info li a.openNext::before{
        content: "";
        width: 0.14rem;
        height: 0.25rem;
        display: inline-block;
        background: url(../../assets/images/opennext.png) no-repeat center;
        background-size: cover;
    }
    /* 上传驾照 */
    .info .driving{
        margin-top: 0.1rem; 
        background: #fff;
        padding: 0.35rem 0.22rem; 
    }
    .info .driving .filebox{
        margin-top: 0.2rem;
    }
    .info .driving .filebox::before{
        display: block;
        content: "";
        clear: both;
        height: 0;
    }
    .info .driving .filebox::after{
        display: block;
        content: "";
        clear: both;
        height: 0;
    }
    .info .driving h3{
        font-size: 0.28rem;
        color: #333;
    }
    .info .driving h3.marginTop{
        margin-top: 0.7rem;
    }
    .info .driving .z_file_input{
        display: none;
    }
    .info .driving .z_file_label{
        display: block;
        width: 1.4rem;
        height: 1.4rem;
        float: left;
    }
    .info .driving .filebox span{
        float: left;
        font-size: 0.24rem;
        color: #b5b5b5;
        padding-left: 0.2rem;
        margin-top: 0.46rem;
    }
    /* 确认按钮 */

    .info .confirm{
        text-align: center;
        margin-top: 0.45rem;
    }
    .info .confirm a{
        display: inline-block;
        width: 4.8rem;
        height: 0.8rem;
        font-size: 0.3rem;
        color: #fff;
        background: #f6b900;
        text-align: center;
        line-height: 0.8rem;
        border-radius: 5px;
    }
</style>
