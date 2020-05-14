<template>
  <div>



  	<myheader></myheader>

		
		<div id="carousel" class="carousel slide" data-ride="carousel">
		
	
			<div class="carousel-inner">
			
				<!--Text only with background image-->
				<div class="carousel-item active">
					

					<!--轮播图-->

					<Carousel :height="700" @change="changeimg" @click="clickimg" pageTheme="circle" :datas="imgs"></Carousel>


				</div>
				
				
			
			</div>
		</div>
		<section class="collections text-center ">
			<div class="container-fluid">
				<div class="row">
					<div class="collection col-md-6 alt-background">
						<div class="container container-right text-center">
							<div>
								<h1>Women's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-secondary">Browse Women's</a>
							</div>
						</div>
					</div>
					<div class="collection col-md-6 bg-secondary inverted">
						<div class="container container-left text-center">
							<div>
								<h1>Men's</h1>
								<p class="lead">Spring/Summer 2018 Collection</p>
								<a href="catalog.html" class="btn btn-outline-white">Browse Men's</a>
							</div>
						</div>
					</div>
				</div>
			</div>
    </section>
    
		<section class="featured-block text-center">
			<div class="container">
				<div class="row justify-center">
					<div class="col-md-6 text-center">
						<img class="mt-4 mb-4 img-fluid" src="../assets/images/placeholder-jacket.png" style="width: 100%;">
					</div>
					<div class="col-md-6 text-center text-md-left">
						<h2 class="mb-3">Spring/Summer Collection 2018</h2>
						<p class="lead mt-2 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus erat sed sem sagittis cursus.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Suspendisse cursus erat sed sem sagittis cursus. Etiam porta sem malesuada magna mollis euismod.</p>
						<a href="#" class="btn btn-md btn-outline-primary mt-3">Shop Now</a>
					</div>
				</div>
			</div>
		</section>
		
		<section class="products text-center">
			<div class="container">
				<h3 class="mb-4">商品列表</h3>
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
						<h4><a :href="'http://localhost:8080/item?id='+item.id">{{ item.name }}</a></h4>
						<p><span class="emphasis">${{ item.price }}</span></p>
					</div>
			
				</div>

				<!-- 简单版分页容器 -->
				<div>
					<Pagination layout='pager,jumper' small @change="get_goods" v-model="pagination"></Pagination>
				</div>
			</div>
			<div class="container">
				<h3 class="mb-4">商品列表</h3>
				<div class="row">
					<div v-for="item in goodslist_self" class="col-sm-6 col-md-3 col-product">
						<figure>
							<img class="rounded-corners img-fluid" :src="'http://localhost:8000/static/upload/'+item.img"	width="240" height="240">
							<figcaption>
								<div class="thumb-overlay"><a href="item.html" title="More Info">
									<i class="fas fa-search-plus"></i>
								</a></div>
							</figcaption>
						</figure>
						<h4><a :href="'http://localhost:8080/item?id='+item.id">{{ item.name }}</a></h4>
						<p><span class="emphasis">${{ item.price }}</span></p>
					</div>
			
				</div>

				

				<!-- 自主分页容器 -->
				<div>
					<a @click="get_goods_self(1)">首页</a>
					<Button v-show="lastpage" @click="get_goods_self(lastpage)">上一页</Button>
					&emsp;&emsp;
					<!-- <span v-for="index in allpage">
						<a @click="get_goods_self(index)">{{ index }}</a>&emsp;&emsp;
					</span> -->
					<span v-for='item in last_page'>
						<a @click="get_goods_self(item)">{{ item }}</a>
					</span>
					&emsp;&emsp;

					<a @click="get_goods_self(page)">{{ page }}</a>
					&emsp;&emsp;

					<span v-for='item in next_page'>
						<a @click="get_goods_self(item)">{{ item }}</a>
					</span>



					<Button v-show="nextpage"  @click="get_goods_self(nextpage)">下一页</Button>
					&emsp;&emsp;
					<a @click="get_goods_self(allpage)">尾页</a>


				</div>
			</div>

			
		</section>
		
		<div class="divider"></div>
		
		<section class="cta text-center">
			<div class="container">
				<h3 class="mt-0 mb-4">Sign up now to save 10% on your first order</h3>
				<form class="subscribe">
					<div class="form-group row pt-3">
						<div class="col-sm-8 mb-3">
							<input type="text" class="form-control" id="inputName" placeholder="Your Name">
						</div>
						<div class="col-sm-4">
							<button type="submit" class="btn btn-lg btn-outline-primary">Sign me up</button>
						</div>
					</div>
				</form>
			</div>
		</section>
		
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
	  //分页偏移
	  last_page:[],
	  next_page:[],
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
	  //商品总数
	  total_self:0,
	  //上一页
	  lastpage:0,
	  //下一页
	  nextpage:0,
	  //当前页
	  page:1,
	  //总页数
	  allpage:0,
	  //每页展示数
	  size:1,
      //轮播图图片
      imgs:[ ]
    }
  },
  //注册组件标签
  components:{

  	'myheader':myheader

  },
  mounted:function(){

	  this.get_carousel();

	  this.get_goods();
	  this.get_goods_self(1);

   
  
},
  methods:{

	  //获取商品
	  get_goods:function(){

		  //发送请求
		  this.axios.get('http://localhost:8000/goodslist/',{params:{page:this.pagination.page,size:this.pagination.size}}

		  ).then((result)=>{

			  console.log(result);
			  this.pagination.total = result.data.total
			  this.goodslist = result.data.data;

		  })



	  },

	  //自主分页
	  get_goods_self:function(page){
		  this.page = page;

		  //发送请求
		  this.axios.get('http://localhost:8000/goodslist/',{params:{page:page,size:this.size}}

		  ).then((result)=>{

			  console.log(result);
			  this.total_self = result.data.total
			  //商品总数
			  this.goodslist_self = result.data.data;
			  

			  //判断上一页
			  if(page==1){
				  this.lastpage = 0;
			  }else{
				  this.lastpage = page -1
			  }

			  //计算总页数
			  this.allpage = Math.ceil(this.total_self/this.size);

			  //判断下一页
			  if(page == this.allpage){
				  this.nextpage = 0;
			  }else{
				  this.nextpage = page + 1
			  }

			  //设置偏移
			  var move_page = 1;

			  var my_list = [];

			  //计算左侧偏移量
			  for(let i=page-move_page;i<page;i++){

				  if(i > 0){

					  my_list.push(i);
					  
				  }
			  }

			  //计算右侧偏移量
			  var my_next = [];
			  for(let i=page+1;i<page+move_page;i++){

				  if(i < this.allpage){

					  my_next.push(i);
					  
				  }
			  }

			  console.log(my_next);
			  this.last_page = my_list;
			  this.next_page = my_next;
		  })



	  },




	  //获取轮播图接口
	  get_carousel:function(){
		  this.axios.get('http://localhost:8000/getcarousel/'
		  ).then((result)=>{
			  console.log(result)

			  var mylist = [];

			//   遍历数组
			for(let i=0,l=result.data.length; i<l;i++){

				console.log(result.data[i]);
				mylist.push({title:result.data[i].name,link:result.data[i].src,image:result.data[i].img});

			}

			// console.log(mylist);
			this.imgs = mylist;

		  })
	  },

  	//点击轮播图
  	clickimg:function(index,data){

  		//alert(data.link);

  		//跳转
  		window.location.href = data.link;

  	},
  	//切换轮播图
  	changeimg:function(index,data){

  		// console.log(data);

  	}

     
  }
}


</script>
 
<style>



</style>