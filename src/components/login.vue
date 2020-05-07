<template>
  <div>

	  <myheader></myheader>

	
	
<Breadcrumb :datas='datas'></Breadcrumb>
	<section class="featured-block text-center">
		
		<div class="container">
			<table>
				<tr>
					<td>
						用户名：
					</td>
					<td>
						<input type="text" v-model="username" placeholder="请输入用户名">
					</td>
				</tr>

				<tr>
					<td>
						密码：
					</td>
					<td>
						<input type="text" v-model="password" placeholder="请输入密码">
					</td>
				</tr>

				

				<tr>
					<td>
						手机号：
					</td>
					<td>
						<input type="text" v-model="phone" placeholder="请输入手机号">
					</td>
				</tr>

				<tr>
					<td>
						验证码：
					</td>

					<td>
						<input type="text" v-model="code" placeholder="请输入验证码">
					</td>
				</tr>

				<tr>
					<td></td>
					<td>
						<img class="imgcode" alt='点击刷新' id='mycode' :src='src' @click="changeimg">
					</td>

				</tr>

				<tr>
					<td></td>
					<td>
						<!-- 滑块验证码 -->

						<drag-verify
						:width = 'width'
						:height='height'
						:text='text'
						ref="Verify"

						></drag-verify>
					</td>
				</tr>


				<tr>
					<td></td>
					<td><Button color="green" @click="submit">登录</Button>

						&emsp;&emsp;
						<img class="imgcode" src="http://localhost:8000/static/sina.png" @click="sina">
						<img class="imgcode" src="http://localhost:8000/static/dingding.png" @click="dingding" />

					
					</td>

				</tr>

				
			</table>			
			
	
		</div>
	</section>
	

	<myfooter></myfooter>
	
	
	
    
  </div>
  
</template>



<script>
import myheader from './myheader'
import myfooter from './myfooter'
// 导入滑块验证码
import dragVerify from 'vue-drag-verify';


export default {
  data () {
    return {
	  msg: "这是一个变量",
	  //声明滑块验证码相关数据
	  width:320,
	  height:42,
	  text:'请将滑块拖动到右边',
	  //表单数据
	  username:'',
	  password:'',
	  phone:'',
	  code:'',
	  src:'http://localhost:8000/mycode/',
	 
	  datas:[{title:'首页',route:{name:'index'}},{title:'登陆页面'}]
    }
  },
  components:{
	  'myheader':myheader,
	  'myfooter':myfooter,
	  'dragVerify':dragVerify
  },
  mounted:function(){

   
  
},
  methods:{
	  //钉钉登录
  	dingding:function(){

  			let appid = 'dingoaukgkwqknzjvamdqh';
    		let redirect_uri = 'http://localhost:8000/dingding_back/';

  			//进行跳转
  			window.location.href = 'https://oapi.dingtalk.com/connect/qrconnect?appid='+appid+'&response_type=code&scope=snsapi_login&state=STATE&redirect_uri='+redirect_uri;

  	},
	  //新浪微博三方登录
  	sina:function(){


  		//拼接url
  		let clinet_id = 3827484432;

  		let url = "https://api.weibo.com/oauth2/authorize?client_id=3827484432&redirect_uri=http://127.0.0.1:8000/md_admin/weibo";

  		//跳转
  		window.location.href = url;


  	},
	  //刷新验证码
		changeimg:function(){
			// 随机字符串
			var num = Math.ceil(Math.random()*100)
			// 赋值地址
			this.src = this.src + '?code=' +num;
		},

	  //定义提交事件
	  submit:function(){

		  //判断是否拖动
		  console.log(this.$refs.Verify.isPassing);
		  if(this.$refs.Verify.isPassing == false){
			  this.$Message('请拖动滑块')
			  return false
			  
		  }
		  //非空验证
		  if(this.username == ''){
			  this.$Message('您没有输入用户名')
			  return false;
		  }

		  if(this.password == ''){
			  this.$Message('您没有输入密码')
			  return false
		  }

		  
		  //请求后台接口 
		  this.axios.get('http://localhost:8000/login/',
		  	{params:{username:this.username,password:this.password,code:this.code}}

		  ).then((result)=>{

			  console.log(result);

			  if(result.data.code==200){
				  localStorage.setItem('username',result.data.username);
				  localStorage.setItem('uid',result.data.uid);
				  localStorage.setItem('jwt',result.data.jwt);
				  this.$Message(result.data.message);
				  //跳转页面
				  this.$router.push('/')


			  }else{

				  this.$Notice(result.data.message);
			  }

			  
		  })
	  }

     
  } 
}


</script>
 
<style>


td {
	padding: 10px;
}
.imgcode {
	cursor: pointer;
}

</style>