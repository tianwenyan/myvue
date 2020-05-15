<template>
  <div>



  	<myheader></myheader>

		
		
		
		
		
		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">商品检索</h3>
				<div class="row">
					<div v-for="item in goodslist" class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" :src="'http://localhost:8000/static/upload/'+item.img"	width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a :href="'http://localhost:8080/item?id='+item.id">
						<!-- {{ item.name | myfilter}} -->
						<div v-html="$options.filters.myfilter(item.name)"></div>
						</a></h4>
						<p><span class="emphasis">${{ item.price }}</span></p>
					</div>
			
				</div>

				<!-- 简单版分页容器 -->
				<div>
					<Pagination layout='pager,jumper' small @change="get_goods" v-model="pagination"></Pagination>
				</div>
			</div>
			

			
		</section>
		
		<div class="divider"></div>
		
		
		
		<footer class="footer">

		<div class="container">
			@v3u.cn
		</div>
		
		
	</footer>
    
  </div>
  
</template>


 
<script>

//导入组件
import myheader from './myheader.vue'

export default {
  data () {
    return {
	  msg: "这是一个变量",
	  text:'',
	  
	  //分页器变量
	  pagination:{
		  //当前页
		  page:1,
		  size:2,
		  total:3,
	  },
	  //商品列表
	  goodslist:[],
	  //自主分页
	  goodslist_self:[],
	  
     
    }
  },
  //注册组件标签
  components:{

  	'myheader':myheader

  },
  mounted:function(){
	  //传递公共变量
	  window.that = this;

	  //接收参数
	  var text = this.$route.query.text;

	  this.text = text;

	  //判断
	  if(text.indexOf(" ")){

		  text = text.split(" ")

		  //格式转换
		  text = JSON.stringify(text)

	  };

	  this.text = text

	  console.log(text.split(" "));	  

	  this.get_goods();
	 

   
  
},
// 自定义过滤器
filters:{

	myfilter:function(value){

		console.log(window.that.text);
	

		value = value.replace(new RegExp(window.that.text,'g'),'<span class="highlight">'+window.that.text+'</span>');
		
		return value;

        	 
	}

},
  methods:{

	  

	 

	  //获取商品
	  get_goods:function(){

		  //发送请求
		  this.axios.get('http://localhost:8000/goodslist/',{params:{page:this.pagination.page,size:this.pagination.size,text:this.text}}

		  ).then((result)=>{

			  console.log(this.text);

			 
			//   for(let i=0;i<result.data.data.length;i++){

            // 		result.data.data[i]['name'] = result.data.data[i]['name'].replace(new RegExp(this.text,'g'),'<span class="highlight">'+this.text+'</span>');

        	//  }

        // console.log(result.data.data);
			  console.log(result.data.data);

			  this.pagination.total = result.data.total
			  this.goodslist = result.data.data;

		  })



	  },

	 


	  
  	
     
  }
}


</script>
 
<style>

.highlight{
  color:red;
}

</style>