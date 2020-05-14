<template>
  <div>

	  <myheader></myheader>

	
	
<Breadcrumb :datas='datas'></Breadcrumb>
	<section class="featured-block text-center">
		
		<div class="container">
			<table>

				<tr>
					<td>
						商品分类：
					</td>
					<td>
						<Select v-model="selected" :datas='category'></Select>

					</td>
				</tr>
				

				<tr>
					<td>
						商品名称：
					</td>
					<td>
						<input type="text" v-model="name" placeholder="请输入商品名称">

					</td>
				</tr>

				
				<tr>
					<td>
						商品价格：
					</td>
					<td>
						<input type="number" v-model="price">

					</td>
				</tr>

				<tr>
					<td>
						颜色：
					</td>
					<td>
						<input type="text" v-model="color">

					</td>
				</tr>
				<tr>
					<td>
						尺码：
					</td>
					<td>
						<input type="text" v-model="size">

					</td>
				</tr>
				<tr>
					<td>
						季节:
					</td>
					<td>
						<input type="text" v-model="season">

					</td>
				</tr>

				
				
				<tr>
					<td>
						
					</td>
					<td>
						<Button @click="submit" color='red'>添加商品</Button>

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
	  //分类默认选中
	  selected:'衣服',
	  //商品分类
	  category:[],
	  //商品id和name
	  goods_dict:{},
	  name:'',
	  price:0,
	  color:'',
	  size:'',
	  season:'',
	 
	  datas:[{title:'首页',route:{name:'index'}},{title:'添加商品'}]
    }
  },
  components:{
	  'myheader':myheader,
	  'myfooter':myfooter,
	  
  },
  mounted:function(){

	  this.get_category();

	  

},
  methods:{

	  //获取商品分类
	  get_category:function(){

		  this.axios.get('http://localhost:8000/categorylist/'

		  ).then((result)=>{

			  console.log(result);
			  var mycate = [];
				//   二次处理
				for(let i=0;i<result.data.length;i++){

					mycate.push(result.data[i]['name']);

					//反相赋值
					this.goods_dict[result.data[i]['name']] = result.data[i]['id'];


				}

				//赋值操作
				this.category = mycate;

			})
	  },

	  //添加商品逻辑
	  submit:function(){
		console.log(this.selected);

		console.log(this.goods_dict[this.selected]);
		
		//   将普通字段转换为json
		var param = {};

		param['color'] = this.color;
		param['size'] = this.size;
		param['season'] = this.season;

		console.log(param);

		// 转换为字符串
		param = JSON.stringify(param);
		console.log(param);

		this.axios.get('http://localhost:8000/insertgoods/',{params:{name:this.name,price:this.price,params:param,cid:this.goods_dict[this.selected]}}
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
.imgcode {
	cursor: pointer;
}


</style>