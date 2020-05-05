<template>
  <div>

	  <myheader></myheader>

	
	
<Breadcrumb :datas='datas'></Breadcrumb>
	<section class="featured-block text-center">
		
		<div class="container">
			<table>
				<div>
					<!-- <img :src="src"> -->
					<Avatar :src='src' :width='150' fit='fill'></Avatar>
				</div>

				<tr>
					<td>
						用户头像：
					</td>
					<td>
						<input type="file" @change="upload">

					</td>
				</tr>
				<tr>
					<td>
						七牛云上传：
					</td>
					<td>
						<input type="file" @change="upload_qiniu">

					</td>
				</tr>
				<tr>
					<td>
						
					</td>
					<td>
						<video id='video' v-show="videosrc" width='300' height='200' :src="videosrc" controls="controls" autoplay="autoplay" muted></video>
						<br>
						<Button @click="changepic" color="red">{{ mybutton }}</Button>
						&nbsp;&nbsp;
						<Button @click='quanpin' color='red'>{{mybutton1}}</Button>
		
						<br>
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

//导入文件
import {config,formatXml} from '../config.js';

export default {
  data () {
    return {
	  msg: "这是一个变量",
	//   七牛云
	  token:'',
	  src:'',
	  //视频播放地址
	  videosrc:'',
	  mybutton:'进入画中画',
	  mybutton1:'进入全屏模式',
	 
	  datas:[{title:'首页',route:{name:'index'}},{title:'用户中心->我的首页'}]
    }
  },
  components:{
	  'myheader':myheader,
	  'myfooter':myfooter,
	  
  },
  mounted:function(){

	  this.get_token();

   
  
},
  methods:{
	//定义全屏模式
	  quanpin:function(){
		  //判断是否处于全屏界面
		  if(video != document.webkitFullscreenElement){
			  //尝试进入全屏界面
			  video.webkitRequestFullScreen();
		  }else{
			  document.webkitExitFullscreen();
		  }

	  },
	  //定义画中画切换
  	changepic:function(){


  			//判断是否处于画中画界面
  			if(video !== document.pictureInPictureElement){

  				//尝试进入画中画模式
  				video.requestPictureInPicture();

  				this.mybutton = '退出画中画';


  			}else{

  				//退出画中画
  				document.exitPictureInPicture();

  				this.mybutton = '进入画中画';
  			}



  	},
	  get_token:function(){
		  
		//   请求后台接口
		this.axios.get('http://localhost:8000/qiniu/'
		).then((result)=>{

			console.log(result);
			this.token = result.data.token;
			console.log(this.token)

		});
	  },
	  upload_qiniu:function(e){

  		//获取文件
  		let file = e.target.files[0];

  		//声明表单参数
  		let param = new FormData();

  		param.append('file',file,file.name);
  		param.append('token',this.token);

  		//自定义axios
  		const axios_qiniu = this.axios.create({withCredentials:false});

  		//发送请求
  		axios_qiniu({
  			method:'POST',
  			url:'http://up-z1.qiniup.com/',
  			data:param,
  			timeout:30000
  		}).then(result =>{

  			console.log(result);
  			this.src = "http://q9uh9g7l7.bkt.clouddn.com/"+result.data.key;
  			// this.videosrc = "http://q9uh9g7l7.bkt.clouddn.com/"+result.data.key;
  			this.videosrc = config['baseurl']+result.data.key;

  		});

  	},
	 
	  
	  //定义提交事件
	  upload:function(e){

		  //获取文件
		  let file = e.target.files[0];

		  //声明表单参数
		  let param = new FormData();

		  param.append('file',file,file.name);
		  param.append('uid',localStorage.getItem('uid'))


		  //声明请求头
		  let config = {headers:{'Content-Type':'multipart/form-data'}}
		  
		  		  

		  
		  //请求后台接口 
		  this.axios.post('http://localhost:8000/upload/',
		  	param,config
		  ).then((result)=>{

			  console.log(result);
			  this.src = 'http://localhost:8000/static/upload/'+result.data.filename;

						  
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