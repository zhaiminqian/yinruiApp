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
                    <p><span class="type">所在地：</span><span @click="OptCity" class="text">{{cityObj.province}} {{cityObj.city}} {{cityObj.area}}</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li id="carBtn">
                    <p><span class="type">是否有车：</span><span @click="OptCar"  class="text">{{carObj.msg}}</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li id="carTypeBtn">
                    <p><span class="type">车型：</span><span @click="OptCarType" class="text">{{carTypeObj.msg}}</span><a href="javascript:;" class="openNext"></a></p>
                </li>
                <li class="marginTop">
                    <p><span class="type">驾龄：</span><span class="text"><input type="text" placeholder="请输入您的驾龄（只需填写数字即可）" v-model="drivingAge"></span></p>
                </li>
                <li id="carYearBtn">
                    <p><span class="type">曾有车型：</span><span @click="carOld"  class="text">{{oldCarTypeObj.msg}}</span><a href="javascript:;" class="openNext"></a></p>
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
                        <mt-button type="default" @click="cityNo">取消</mt-button>
                        <mt-button type="primary" @click="cityYes">确定</mt-button>
                    </div>
                    <div>
                        <mt-picker :slots="cityObj.slots" @change="onCityChange"></mt-picker>
                    </div>
                </div>
            </mt-popup>
            <!-- 是否有车 数据 -->
            <mt-popup v-model="carObj.popupVisible" position="bottom">
                <div class="picker">
                    <div class="optBtn">
                        <mt-button type="default" @click="carNo">取消</mt-button>
                        <mt-button type="primary" @click="carYes">确定</mt-button>
                    </div>
                    <div>
                        <mt-picker :slots="carObj.slots" @change="onCarChange"></mt-picker>
                    </div>
                </div>
            </mt-popup>
            <!-- carType 数据 -->
            <mt-popup v-model="carTypeObj.popupVisible" position="bottom">
                <div class="picker">
                    <div class="optBtn">
                        <mt-button type="default" @click="carTypeNo">取消</mt-button>
                        <mt-button type="primary" @click="carTypeYes">确定</mt-button>
                    </div>
                    <div>
                        <mt-picker :slots="carTypeObj.slots" @change="onCarTypeChange"></mt-picker>
                    </div>
                </div>
            </mt-popup>
            <!-- 曾经拥有 carType 数据 -->
            <mt-popup v-model="oldCarTypeObj.popupVisible" position="bottom">
                <div class="picker">
                    <div class="optBtn">
                        <mt-button type="default" @click="oldCarTypeNo">取消</mt-button>
                        <mt-button type="primary" @click="oldCarTypeYes">确定</mt-button>
                    </div>
                    <div>
                        <mt-picker :slots="oldCarTypeObj.slots" @change="onOldCarTypeChange"></mt-picker>
                    </div>
                </div>
            </mt-popup>
            <!-- 上传驾照 -->
            <div class="driving">
                <h3>上传驾照</h3>
                <div class="filebox">
                    <label for="file" class="z_file_label"><img :src="fileObj.drivingLicense" alt="" id="ImgPr" class="z_file_img"></label>
                    <input type="file" name="file" id='file' @change="fileOne" class="z_file_input" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple="multiple"/>
                    <span>建议图像比列 1：1，宽度不小于1080像素。</span>
                </div>
                <h3 class="marginTop">上传行驶本</h3>
                <div class="filebox">
                    <label for="file2" class="z_file_label"><img :src="fileObj.drivingBook" id="ImgPr2" alt="" class="z_file_img"></label>
                    <input type="file" name="file" id="file2"  @change="fileTwo" class="z_file_input" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple="multiple"/>
                    <span>建议图像比列 1：1，宽度不小于1080像素。</span>
                </div>
            </div>
            <!-- 保存 -->
            <div class="confirm">
                <a href="javascript:;" @click="SubData">确认</a>
            </div>
        </div>
    </div>
</template>
<script>
    import { Toast } from 'mint-ui';
    import LoginHeader from '@/components/login/LoginHeader.vue'
    import myaddress from './city.json'
    import fileimg from '../../assets/images/fileimg.png';
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
                    province:"省",
                    city:"市",
                    area:"区",
                    optProvince:"",
                    optCity:"",
                    optArea:""
                },
                carObj:{
                    popupVisible:false,
                    slots:[
                        {
                            flex: 1,
                            values: ['是','否'],
                            className: 'slot1',
                            textAlign: 'center'
                        }
                    ],
                    msg:"请选择您是否有车",
                    car:""
                },
                carTypeObj:{
                    popupVisible:false,
                    slots:[
                        {
                            flex: 1,
                            values: ['小轿车','中型车','大客车','拖拉机','自行车'],
                            className: 'slot1',
                            textAlign: 'center'
                        }
                    ],
                    msg:"请选择您的车型",
                    carType:""
                },
                drivingAge:"",
                oldCarTypeObj:{
                    popupVisible:false,
                    slots:[
                        {
                            flex: 1,
                            values: ['无车','小轿车','中型车','大客车','拖拉机','自行车'],
                            className: 'slot1',
                            textAlign: 'center'
                        }
                    ],
                    msg:"请选择您的曾有车型",
                    oldCarType:""
                },
                fileObj:{
                    drivingLicense:fileimg,
                    drivingBook:fileimg
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
                this.sexObj.sex = values[0];
            },
            // 确认选择性别
            sexYes(){
                this.sexObj.msg = this.sexObj.sex;
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
                if(myaddress[values[0]]){
                    picker.setSlotValues(1,Object.keys(myaddress[values[0]]));
                    picker.setSlotValues(2,myaddress[values[0]][values[1]]); 
                }
                this.cityObj.optProvince = values[0];
                this.cityObj.optCity = values[1];
                this.cityObj.optArea = values[2];
            },
            // 确认选择城市
            cityYes(){
                this.cityObj.popupVisible = !this.cityObj.popupVisible;
                this.cityObj.province = this.cityObj.optProvince;
                this.cityObj.city = this.cityObj.optCity;
                this.cityObj.area = this.cityObj.optArea;
            },
            // 取消选择城市
            cityNo(){
                this.cityObj.popupVisible = !this.cityObj.popupVisible;
            },
            // 是否有车
            OptCar(){
                this.carObj.popupVisible = !this.carObj.popupVisible;
            },
            // 是否有车数据切换
            onCarChange(picker, values){
                this.carObj.car = values[0];
            },
            // 确认选择 车
            carYes(){
                this.carObj.msg = this.carObj.car;
                this.carObj.popupVisible = !this.carObj.popupVisible;
                if(this.carObj.msg == "否"){
                    this.carTypeObj.msg = "无车";
                }
            },
            carNo(){
                this.carObj.popupVisible = !this.carObj.popupVisible;
            },
            // 选择 车的类型
            OptCarType(){
                this.carTypeObj.popupVisible = !this.carTypeObj.popupVisible;
            },
            // 车的类型 数据切换
            onCarTypeChange(picker, values){
                this.carTypeObj.carType = values[0];
            },
            // 确认选择车类型
            carTypeNo(){
                this.carTypeObj.popupVisible = !this.carTypeObj.popupVisible;
            },
            carTypeYes(){
                this.carTypeObj.msg = this.carTypeObj.carType;
                this.carTypeObj.popupVisible = !this.carTypeObj.popupVisible;
            },
            // 曾经拥有的车型
            carOld(){
                this.oldCarTypeObj.popupVisible = !this.oldCarTypeObj.popupVisible;
            },
            onOldCarTypeChange(picker, values){
                this.oldCarTypeObj.oldCarType = values[0];
            },
            oldCarTypeYes(){
                this.oldCarTypeObj.msg = this.oldCarTypeObj.oldCarType;
                this.oldCarTypeObj.popupVisible = !this.oldCarTypeObj.popupVisible;
            },
            oldCarTypeNo(){
                this.oldCarTypeObj.popupVisible = !this.oldCarTypeObj.popupVisible;
            },
            // 上传图片
            fileOne(e){
                let file = e.target.files[0];
                let imgSize = file.size/1024;
                // console.log(file);
                // console.log(imgSize);
                if(imgSize > 200){
                    alert('请上传大小不要超过200KB的图片');
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = ()=>{
                        let dataURL = reader.result;
                        this.fileObj.drivingLicense = dataURL;
                        // console.log(dataURL);

                        // 下面 写 axios 逻辑； 
                    }
                }
            },
            fileTwo(e){
                let file = e.target.files[0];
                let imgSize = file.size/1024;
                // console.log(file);
                // console.log(imgSize);
                if(imgSize > 200){
                    alert('请上传大小不要超过200KB的图片');
                }else{
                    var reader = new FileReader();
                    reader.readAsDataURL(file); // 读出 base64
                    reader.onloadend = ()=>{
                        let dataURL = reader.result;
                        this.fileObj.drivingBook = dataURL;
                        // console.log(dataURL);
                        // 下面 写 axios 逻辑； 
                    }
                }
            },
            SubData(){
                if(this.userNickName != "" && this.sexObj.msg != "请选择您的性别" && this.userName != "" && this.cityObj.province != "省" && this.carObj.msg != "请选择您是否有车" && this.carTypeObj.msg != "请选择您的车型" && this.drivingAge != "" && this.oldCarTypeObj.msg != "请选择您的曾有车型" && this.fileObj.drivingLicense != fileimg && this.fileObj.drivingBook != fileimg){
                    alert('全部填写好了')
                }else{
                    if(this.userNickName == ""){
                        Toast("请输入您的昵称");
                    }else if(this.sexObj.msg == "请选择您的性别"){
                        Toast("请选择您的性别");
                    }else if(this.userName == ""){
                        Toast("请输入您的姓名");
                    }else if(this.cityObj.province == "省"){
                        Toast("请输入您的所在地");
                    }else if(this.carObj.msg == "请选择您是否有车"){
                        Toast("请选择您是否有车");
                    }else if(this.carTypeObj.msg == "请选择您的车型"){
                        Toast("请选择您的车型");
                    }else if(this.drivingAge == ""){
                        Toast("请输入您的驾龄");
                    }else if(this.oldCarTypeObj.msg == "请选择您的曾有车型"){
                        Toast("请选择您的曾有车型");
                    }else if(this.fileObj.drivingLicense == fileimg){
                        Toast("请上传您的驾照");
                    }else if(this.fileObj.drivingBook == fileimg){
                        Toast("请上传您的行使本");
                    }
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
        /* height: 1.4rem; */
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
