<template>
  <div class="container">
   <div v-for="item in state.products" :key="item.id">
      <div class="card border-0" v-if="item.is_enabled != 0">
        <a href="#" class="card-img" @click.prevent="goDetail(item.id)">
          <img :src="item.imageUrl" alt="">
        </a>
        <div class="icon-favorite">          
          <a href="#" v-if="item.is_favorite">
            <i class="fas fa-heart" @click.prevent="removeFavorite(item)"></i>
          </a>
          <a href="#" v-else>
            <i class="far fa-heart" @click.prevent="addFavorite(item)"></i>
          </a>
        </div>
        <div class="card-body">
          <h5 class="card-title">
            <a href="#" @click.prevent="goDetail(item.id)">{{ item.title }}</a>
          </h5>
          <div class="" style="height:35px">
            <p class="card-text text-info font-weight-bold">{{ item.content }}</p>
          </div>
          <div class="card-price">
            <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
            <del class="h7" v-if="item.price">原價 {{ item.origin_price }} 元</del>
            <div class="h5" v-if="item.price">特價 {{ item.price }} 元</div>
          </div>
        </div>
        <button type="button" class="btn cart-move" @click="addtoCartMerge(item.id)" :disabled="item.id === state.loadingItem">
          <i class="fas fa-spinner fa-pulse" v-if="item.id === state.loadingItem"></i>
          <i class="fas fa-cart-plus" v-else></i>
          <span class="">加到購物車</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta, onBeforeMount, computed, ref, 
          useRoute, useRouter, useStore, onGlobalSetup, provide, 
          useFetch, ssrPromise, ssrRef, shallowSsrRef,
          useAsync, useContext, useStatic,
          wrapProperty, reactive, onMounted, onUpdated, watch, watchEffect,
           } from '@nuxtjs/composition-api'
// import axios from 'axios'

// const useAccessor = wrapProperty('$accessor', false)

export default defineComponent({
  setup(){
    const route = useRoute()
    const context = useContext()
    // console.log('route', route)
    const router = useRouter()
    const store = useStore()
    const state = reactive({
      products: [], //|| store.state.products.products
      loadingItem: ""
    })
    
    
    // console.log('context', context)
    // console.log('store2', store.state.products.products)
    watchEffect(() => {
      // console.log('watchEffect', store.state.products.products)
    })
    watch(()=> store.state.products.products, arr => {
      state.products = arr

    })
    // computed(() => {
    //   console.log('computed', state.products)

    // })
    // onMounted(() => {
    //   console.log('onMounted', state.products)

    // })
    // onUpdated(() => {
    //   console.log('onUpdated', state.products)

    // })
    // const getProducts = (page = 1) => {
    //   store.dispatch('products/getProducts', page)
    // }
    const getProducts = useAsync((page = 1) => {
        store.dispatch('products/getProducts', page)
    })
    // const { fetch, fetchState } = useFetch(async (page = 1) => {
    //  await store.dispatch('products/getProducts', page)      
    // })
    // fetch()
    const goDetail = () =>{
      console.log('goDetail')
    }
    const removeFavorite = () =>{
      console.log('removeFavorite')
    }
    const addFavorite = (item) =>{
      // console.log('addFavorite', item)
      store.dispatch('favorite/addFavorite', item)
    }
    const addtoCartMerge = (id, qty = 1) =>{
      console.log('addtoCartMerge')
      store.dispatch('carts/addtoCartMerge', { id, qty })
    }

    return { state, getProducts, goDetail, removeFavorite, addFavorite, addtoCartMerge }
  }
})
</script>

<style lang="scss" scoped>
@import "@/assets/scss/all";
.container{
  display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 85%;
    margin: 20px auto;
}
.card{
  position: relative;
  width: 240px;
  height: 410px;
  border: 1px solid $info;
  border-radius: 10px;
  margin: 10px ;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  .card-img{
    display: flex;
    justify-content: center;
    img{      
      height: 200px;
      // background: no-repeat center 0/100%;
      // margin: 0 auto;
    }
  }
  
  .card-body{
    min-height: 168px;
    padding: 15px;
    // display: flex;
    // justify-content: center;
    .card-title{
      min-height: 58px;
      font-size: 1rem;
      a{
      color: $dark;
      text-decoration: none;
      }
    }
    .card-text{
      color: $info;
    }
    .card-price{
      display: flex;
      // justify-self: unset;
      justify-content: space-between;
      .h5{
        font-size: 18px;
        font-weight: 600;
        color: red;
      }
      .h7{
        font-size: 12px;
      }
    }
  }
  .icon-favorite{
    position: absolute;
    right: 15px;
    top: 15px;
    a{
      color: red;
      text-decoration: none;
      i{
        font-size: 20px;
      }
    }
  }
  .btn{
    width: 100%;
    height: 40px;
    background-color: $primary;
    border: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    box-shadow: 0px -2px 15px 2px rgba(0, 0, 0, 0.2);
    font-size: 16px;
    font-weight: 600;
    i{
      padding-right: 20px;
    }
    &:hover{
      cursor: pointer;
    }
  }
}
.cart-move {
  width: 100%;
  transition: all 0.3s;
  &:hover i {
    transform: translate(22px, 0);
    transition: transform 0.3s linear;
  }
}
</style>
