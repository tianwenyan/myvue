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
					<td></td>
					<td><Button color="green" @click="submit">提交</Button></td>
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
	  //表单数据
	  username:'',
	  password:'',
	  datas:[{title:'首页',route:{name:'index'}},{title:'注册页面'}]
    }
  },
  components:{
	  'myheader':myheader,
	  'myfooter':myfooter
  },
  mounted:function(){

   
  
},
  methods:{

	  //定义提交事件
	  submit:function(){
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
		  this.axios.get('http://localhost:8000/register/',
		  	{params:{username:this.username,password:this.password}}

		  ).then((result)=>{

			  console.log(result);
			  this.$Message(result.data.message);

		  })
	  }

     
  }
}


</script>
 
<style>

td {
	padding: 10px;
}

</style>