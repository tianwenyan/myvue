<template>
<div>
    <table>
        <tr>
            <td>
                用户名：
            </td>
            <td>
                <input type="text" placeholder="请输入用户名"  v-model="username">
            </td>
        </tr>
        <tr>
            <td>
                密码：
            </td>
            <td>
                <input type="password" placeholder="请输入密码"  v-model="password">
            </td>
        </tr>
        <tr>
            <td>
                
            </td>
            <td>
                <Button @click="submit">提交</Button>
            </td>
        </tr>
    </table>
</div>

    
</template>

<script>
export default {
    data(){
        return{
            username:'',
            password:'',
        }
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
		  this.axios.get('http://localhost:8000/register1/',
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

</style>