<template>
<div>
    <section class="header text-center">
		<nav class="navbar navbar-expand-lg navbar-custom">
			<div class="container"><a class="navbar-brand" href="/"><i class="fas fa-shopping-bag primary-color mr-1"></i>{{ $t('m.index') }}</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-1" aria-controls="navbar-1" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
				<div class="collapse navbar-collapse pull-xs-right justify-content-end" id="navbar-1">
					<ul class="navbar-nav mt-2 mt-md-0">
						<li class="nav-item active"><a class="nav-link" href="#">{{ $t('m.2')}} <span class="sr-only">(current)</span></a></li>
						<li class="nav-item dropdown mega-menu"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{{ $t('m.3')}} </a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown">
								<div class="container">
									<div class="divider"></div>
									<div class="row">
										<div class="col-md-2">
											<h6 class="text-uppercase">Women's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link active" href="#">Active</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-2">
											<h6 class="text-uppercase">Men's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-2">
											<h6 class="text-uppercase">Girl's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-2">
											<h6 class="text-uppercase">Boy's</h6>
											<ul class="nav flex-column">
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
												<li class="nav-item"><a class="nav-link" href="#">Link item</a></li>
											</ul>
										</div>
										<div class="col-md-4">
											<h6 class="text-uppercase">Featured Items</h6>
											<div class="row">
												<div class="col-6 text-center"><a href="item.html">
													<img src="images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
													<h6 class="mb-0"><a href="item.html">Product Name</a></h6>
													<p><span class="emphasis">$49.00</span></p>
													<a href="#" class="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
										</div>
												<div class="col-6 text-center"><a href="item.html">
													<img src="images/placeholder-product.jpg" alt="" class="img-fluid mt-2 mb-3"></a>
													<h6 class="mb-0"><a href="item.html">Product Name</a></h6>
													<p><span class="emphasis">$49.00</span></p>
													<a href="#" class="btn btn-sm btn-outline-secondary mt-0">Buy Now</a>
										</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages </a>
							<div class="dropdown-menu" aria-labelledby="navbarDropdown"><a class="dropdown-item" href="index.html">Homepage</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="catalog.html">Catalog</a>
								<a class="dropdown-item" href="item.html">Item Detail</a>
								<a class="dropdown-item" href="cart.html">Cart</a>
								<div class="dropdown-divider"></div>
								<a class="dropdown-item" href="contact.html">Contact</a>

							</div>
						</li>
						<li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li>
					<li class="nav-item dropdown">

						<!--  -->
						<Search @search='search' v-model="text"></Search>


						



						<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-shopping-cart"></i> <span class="badge badge-pill badge-primary">3</span></a>
							<div class="dropdown-menu dropdown-menu-right dropdown-cart" aria-labelledby="navbarDropdown">
								<h6>3 Items <span class="emphasis">$147.00</span></h6>
								<div class="dropdown-divider"></div>
								<ul class="shopping-cart-items">
									<li class="row">

										<div class="col-3">
											<img src="images/placeholder-product.jpg" width="60">
										</div>
										<div class="col-9">
											<h6><a href="item.html">Product Name</a></h6>
											<span class="text-muted">1x</span>
											<span class="emphasis">$49.00</span></div>
									</li>
									<li class="row">
										<div class="col-3">
											<img src="images/placeholder-product.jpg" width="60">
										</div>
										<div class="col-9">
											<h6><a href="item.html">Product Name</a></h6>
											<span class="text-muted">1x</span>
											<span class="emphasis">$49.00</span></div>
									</li>
									<li class="row">
										<div class="col-3">
											<img src="images/placeholder-product.jpg" width="60">
										</div>
										<div class="col-9">
											<h6><a href="item.html">Product Name</a></h6>
											<span class="text-muted">1x</span>
											<span class="emphasis">$49.00</span></div>
									</li>
								</ul>
								
								<a href="cart.html" class="btn btn-lg btn-full-width btn-primary" style="margin: 0;">View Cart</a></div>
						</li>
					</ul>
				</div>
			</div>

			<div v-if="username==''">

				<router-link to='/login' >登 录</router-link>

				/

				<router-link to='/register' >注 册</router-link>
				

			</div>

			<div v-else>
				
				{{ $t('m.1') }}:<a href="/myprofile">{{ username }}</a>

				&nbsp;&nbsp;

				<Button color="black" @click="logout">{{ $t('m.logout') }}</Button>

			</div>

			<div>

				<!-- 开关标签 -->
				<h-switch @change="lang_change" v-model="lang">{{ $t('m.4') }}</h-switch>
			</div>

			<div>

				<!-- 开关标签 -->
				<h-switch @change="change_back" v-model="light">暗夜/白天</h-switch>
			</div>
 


		</nav>
	</section>
</div>
    
</template>

<script>
export default {
	data(){
		return {
			//用户名
			username:'',
			text:'',
			// 开关变量
			lang:'1',
			//暗黑变量
			light:true,
		}
	},
	//监听属性,检测页面变化、
	watch:{
		$route(to,from){
			//手动刷新
			this.$router.go(0);
		}
	},
	//钩子方法  created
		mounted:function(){

			this.change_back();

			this.iflange();

			
			// this.$i18n.locale = 'zh';

			//接收三方参数
			var sina_id = this.$route.query.sina_id;
			var user_id = this.$route.query.uid;

			if(sina_id){
				//自动帮助用户进行登录操作
				localStorage.setItem('username',sina_id);
				localStorage.setItem('uid',user_id);
			}


			//判断是否登录
			var uname = localStorage.getItem("username");

			if(uname==null){

				//没登录
				this.username = '';

			}else{

				//登录
				this.username = uname;

			}



		},
	methods:{

		//检索方法
		search:function(){
			//获取输入关键词
			console.log(this.text);
			//进行跳转
			this.$router.push({path:'/search',query:{text:this.text}});
		},

		//切换主题颜色
		change_back:function(){

			//获取样式表
			var styles = getComputedStyle(document.documentElement);

			if(this.light == true){

				document.documentElement.style.setProperty('--bg-color','#fff');
				document.documentElement.style.setProperty('--a-color','black');
				

				
			}else{

				//动态更改
				document.documentElement.style.setProperty('--bg-color','#292a2d');
				document.documentElement.style.setProperty('--a-color','white');
				

				
				
			}
			
		},


		//判断语言
		iflange:function(){
			var lang_locale = localStorage.getItem('lang');

			if(lang_locale){
				this.$i18n.locale = lang_locale;
				if(lang_locale == 'zh'){

					this.lang = 0;

				}else{
					this.lang = 1;
				}
			}else{
				this.$i18n.locale = 'zh';
				this.lang = 0;
			}

		},
		//切换语言
		lang_change:function(){


			console.log(this.lang);
			if(this.lang == true){

				//中文
				this.$i18n.locale = 'en';
				localStorage.setItem('lang','en')

			}else{
				this.$i18n.locale = 'zh'
				localStorage.setItem('lang','zh')
			}


		},

		//登出
  		logout:function(){


			//删除对应的localstorage  .clear()可以全部删除
			localStorage.removeItem("username");
			localStorage.removeItem("uid");
			localStorage.removeItem("jwt");
			localStorage.removeItem("filename");

			//跳转
			this.username = '';
			this.$router.push('/login');


  	}

	}
    
}
</script>

<style>

</style>