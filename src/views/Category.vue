<template>
    <div class="category">
     <van-nav-bar  title="分类" left-arrow>
        <van-icon name="search" slot="right" />
     </van-nav-bar>
     <div class="content">
         <div class="left">
             <div class="item" v-for="(item,index) in cate" :key="index">
                 {{item.category_name}}
            </div>
         </div>
         <div class="right">
           <!-- <van-tree-select
             v-for="(items,ind) in data"
            :items="items.category_name"
            :main-active-index.sync="active"
            >
            <template #content>
               <div></div>
            </template>
        </van-tree-select> -->
         </div>
     </div>
    </div>
</template>
<script>
import Cla from '@/components/Cla.vue'
export default {
    data(){ return {
        cate:[],//分类信息
        active: 0,
        items: [{ text: '新品' }, { text: '众筹' }]
    }},
    created(){
        this.getCate();
    },
    methods:{
        // 获取分类
        getCate(){
            this.$http.get("/mi/category.php")
            .then(res=>{
                // console.log(res.data);
                this.cate = res.data.data;
            })
            .catch(err=>{
                console.log(err);
            })
        }
    },
    components:{
      Cla,
    }
}
</script>
<style scoped>
    .category{ display: flex; flex-direction: column;  }
    .content{ flex:1; /* 自适应高 */ display: flex; height: 100%; overflow:hidden; }
    .left{ width:1.5rem; height: 100%; overflow: auto; border-right: 1px solid #fafafa; /*宽1.5rem 高100%； 超出高度隐藏 有边框*/ }
    .right{ flex:1; /* 自适应宽 */ height: 100%; overflow: auto; }
    .left .item{
        height: .88rem;
        line-height: .88rem;
        text-align: center;
        font-size: .24rem;
        border-bottom:1px solid #fafafa;
        /* 高.88rem，行高.88rem; 文字居中  文字大小.12rem  下边框 */

    }
</style>

 