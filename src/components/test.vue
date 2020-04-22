<template>
    <div>
        <!-- 购物车 -->
        <table>
            <tr>
                <td>名称</td>
                <td>数量</td>
                <td>价格</td>
            </tr>
            <tr v-for="(item,index) in tlist">

                <td>
                    {{item.text}}
                </td>
                <td>
                    <button @click="minus(index,'-')">-</button>
                    <input type="number" v-model="item.num">
                    <button @click="minus(index,'+')">+</button>
                </td>
                <td>
                    {{item.price}}
                </td>


            </tr>
        </table>
        总数量：{{ totalCount(0) }}
        总价：{{ totalCount(1) }}
        
    </div>   


</template>


<script>
export default {
    data(){
        return{
            tlist:[{text:'汽车',num:1,price:10},{text:'化妆品',num:1,price:7},{text:'衣服',num:1,price:1},{text:'牛奶',num:1,price:5}],

        }
    },
    //监听属性
    watch:{

    },
    //计算属性
    computed:{
        
    },
    
    //自定义方法
    methods:{

        // 汇总数量
        totalCount:function(type){

            //默认数量
            let total = 0; 

            //默认价格
            let totalprice = 0;

            //遍历
            for(let i=0,l=this.tlist.length;i<l;i++){
                //总数量
                total += parseInt(this.tlist[i].num);
                //总价格相加
                totalprice +=(this.tlist[i].num * this.tlist[i].price);
            }

            if(type==0){

                return total;
            }else{
                return totalprice;

            }

        },
        //购物车减法
        minus:function(index,type){
            if(type=='-'){
            if(this.tlist[index].num > 0){
            this.tlist[index].num--;
            }

        }else{
            this.tlist[index].num++;
        }
        },
        

    },
}
</script>

<style>

</style>