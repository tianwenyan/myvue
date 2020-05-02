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
				

				
			</table>			
			
	
		</div>
	</section>
	

	<myfooter></myfooter>
	
	
	
    
  </div>
  
</template>



<script>
import myheader from './myheader'
import myfooter from './myfooter'



export default {
  data () {
    return {
	  msg: "这是一个变量",
	  
	  
	  src:'',
	 
	  datas:[{title:'首页',route:{name:'index'}},{title:'用户中心->我的首页'}]
    }
  },
  components:{
	  'myheader':myheader,
	  'myfooter':myfooter,
	  
  },
  mounted:function(){

   
  
},
  methods:{
	 
	  
	  //定义提交事件
	  upload:function(e){

		  //获取文件
		  let file = e.target.files[0];

		  //声明表单参数
		  let param = new FormData();

		  param.append('file',file,file.name);

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