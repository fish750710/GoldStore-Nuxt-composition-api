<template>
  <div>
    <!-- <alert /> -->
    <!-- <loading :active.sync="isLoading"></loading> -->
    <!-- 選單以外區域 -->
    <!-- <div id="close-menu" class></div> -->
    
    <nav class="header navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div class="logo-box">     
          <nuxt-link to="/" >
            <img src="@/assets/images/Logo-3w150.png" alt class="d-logo" />
            <img src="@/assets/images/Logo-64.png" alt class="m-logo" style="width:45px" />
          </nuxt-link>
      </div>
      <div class="menu-box ">
        <ul class="d-menu nav-box">
          <li class="nav-item menu-ul">
            <!-- <a href="#" class="menuSidebar" @click="goDescription">產品介紹</a> -->
            <nuxt-link to="/Description" class="menuSidebar">產品介紹</nuxt-link>
          </li>
          <li class="nav-item menu-ul">
            <!-- <a href="#" class="menuSidebar" @click="goSale">優惠活動</a> -->
            <nuxt-link to="/Sale" class="menuSidebar">優惠活動</nuxt-link>
          </li>
          <li class="nav-item menu-ul">
            <!-- <a href="#" class="menuSidebar" @click="goIndex">購物商城</a> -->
            <nuxt-link to="/" class="menuSidebar">購物商城</nuxt-link>
          </li>
        </ul>
        <ul class="nav-box icon-box">
          <li class="nav-item">
            <Search class="pt-1"></Search>
          </li>
          <!-- <li class="nav-item m-search mt-1 icon-rwd-margin">
            <div class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i class="fas fa-search text-white p-2"></i>
              </a>
              <div class="dropdown-menu" aria-labelledby="dropdownMenu2" style="width:220px">
                <input
                  type="search"
                  class="form-control input-width d-inline"
                  placeholder="搜尋.."
                  aria-label="搜尋"
                  v-model="searchValue"
                  @keyup.enter="searchProduct"
                />
              </div>
            </div>
          </li> -->
          <li class="nav-item icon-rwd-margin">
            
          </li>
           <li class="nav-item icon-rwd-margin">
            <a
              href="#"
              class="menu-top"
              @click="rightOption('favorite')"
            >
              <i class="fas fa-heart"></i>
              <!-- <span
                class="badge badge-pill badge-danger"
                style
                v-if="myfavorite.length != 0"
              >{{ myfavorite.length }}</span> -->
            </a>
          </li>
          <li class="nav-item icon-rwd-margin">
            <a
              href="#"
              class="menu-top"
              @click="rightOption('carts')"
            >
              <i class="fas fa-cart-arrow-down"></i>
              <!-- <span
                class="badge badge-pill badge-danger"
                style
                v-if="cart.carts.length != 0"
              >{{ cart.carts.length }}</span> -->
            </a>
          </li>
        </ul>
      </div>      
      <div class=" menuButton">
        <a href="#">
          <span></span>
        </a>
      </div>
      <ul class="menu nav justify-content-center text-center">
        <li class="nav-item mt-2 menu-ul col-12 col-sm-12 col-md-12 p-0 m-0">
          <!-- <a href="#" class="m-3 menuSidebar" @click="goDescription">產品介紹</a> -->
          <nuxt-link to="/Description" class="menuSidebar">產品介紹</nuxt-link>
        </li>
        <li class="nav-item mt-2 menu-ul col-12 col-sm-12 col-md-12 p-0 m-0">
          <!-- <a href="#" class="m-3 menuSidebar" @click="goSale">優惠活動</a> -->
          <nuxt-link to="/Sale" class="menuSidebar">優惠活動</nuxt-link>
        </li>
        <li class="nav-item mt-2 menu-ul col-12 col-sm-12 col-md-12 p-0 m-0">
          <!-- <a href="#" class="m-3 menuSidebar" @click="goIndex">購物商城</a> -->
          <nuxt-link to="/" class="menuSidebar">購物商城</nuxt-link>
        </li>
      </ul>
    </nav>
    <div class="box"></div>
  </div>
</template>

<script>

import { useRouter, useStore } from '@nuxtjs/composition-api'
export default {
  setup(){
    const router = useRouter()
    const store = useStore()
    const rightOption = (val) => {
      // console.log(store)
      store.commit('SETOPTIONSHOW', val)
    }
    
    // console.log('router', router)

    // const goDescription = () => {
    //   router.push('/Description')
    // }
    // const goSale = () => {
    //   router.push('/Sale')
    // }
    // const goIndex = () => {
    //   router.push('/')
    // }
    return { rightOption }
  }
}

</script>

<style lang="scss" scoped>
@import "@/assets/scss/all";
nav{
  z-index: 998;
}
.box{
  height: 50px;
}
.header{
  position: fixed;
  width: 100%;
  background-color: $bg-color;
  display: flex;
  align-items: center;
  .logo-box{
    width: 20%;
    padding-left: 10px;
  }
  .menu-box{
    width: 80%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
   
  }
  .nav-box{
    // width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;
    list-style: none;
    li{
      text-align: center;
      padding: 0.5rem 1rem;
    }
    i{
      color: $white;
    }
  }
  .icon-box{
    width: 45%;
    display: flex;
    justify-content: right;
    li{
      text-align: center;
      padding: 0.5rem 0rem;
    }
  }
}
.icon-rwd-margin{
  margin-right: 10px;
}

.fb-btn {
  background: #3b5998;
}
.line-btn {
  background: #00c300;
}
.fb-font {
  color: #fff;
  font-size: 13px;
  padding: 0 5px;
}
.line-font {
  color: #fff;
  font-size: 13px;
  padding: 0 17px;
}
.user-list-icon-order {
  padding-right: 3px;
}
.user-list-icon-management {
  margin-left: 1px;
  padding-right: 3px;
}
.menu-top {
  position: relative;
  margin: 10px 16px 5px 16px;
  padding: 0;
  font-size: 18px;
  span {
    position: absolute;
    top: -7px;
    right: -15px;
    font-size: 12px;
    z-index: 1;
  }
}
.menu-top i:hover {
  color: $primary;
}

.dropdown-text {
  &:hover {
    color: $primary;
  }
  &:active {
    color: $dark;
  }
}
.menu-ul {
  .menuSidebar {
    text-decoration: none;
    color: #fff;
    transition: all 0.7s;
    font-weight: bold;
    // width: 50px;
  }

  a:hover {
    color: $primary;
    position: relative;
  }
}

.menu-ul a:after {
  content: " ";
  position: absolute;
  z-index: 2;
  bottom: -8px;
  left: 28px;
  display: block;
  // width: 65px;
  // height: 1px;
  transform: translate(-50%);
}

.menu-ul a:hover:after {
  height: 2px;
  animation: ad_width 0.3s linear forwards;
  background: $primary;
}

.userlogo {
  font-size: 22px;
}

@keyframes ad_width {
  from {
    width: 0;
  }
  to {
    width: 55px;
  }
}

.dropdown-toggle::after {
  border: none;
}

@media (max-width: 320px) {
  .fb-font {
    font-size: 12px;
    padding: 0;
  }
  .line-font {
    font-size: 12px;
    padding: 0;
  }
}

@include desktop-top() {
  .m-logo {
    display: none !important;
  }
  .d-logo {
    display: block !important;
  }
  .m-search {
    display: none !important;
  }
  // .d-search {
  //   display: block !important;
  // }
  .menu {
    display: none !important;
  }
}
@include pc-top() {
  .m-logo {
    display: none !important;
  }
  .d-logo {
    display: block !important;
  }
  .m-search {
    display: none !important;
  }
  // .d-search {
  //   display: block !important;
  // }
  .menu {
    display: none !important;
  }
}
@include pc() {
  .m-logo {
    display: none !important;
  }
  .d-logo {
    display: block !important;
  }
  .m-search {
    display: block !important;
    padding: 0px;
    i {
      font-size: 18px;
    }
  }
  // .d-search {
  //   display: none !important;
  // }
  .menu {
    display: none !important;
  }
}

@include pad() {
  .m-logo {
    margin-top: 5px;
    display: block !important;
  }
  .d-logo {
    display: none !important;
  }
  .m-search {
    display: block !important;
  }
  // .d-search {
  //   display: none !important;
  // }
  .d-menu {
    display: none !important;
  }
  .menu {
    display: block !important;
  }

  .header {    
    //漢堡選單
    .menuButton {
      display: block;
    }

    .menu {
      display: block;
      max-height: 0;
      min-width: 100%;
      overflow: hidden;
      position: absolute;
      top: 58px;
      right: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.75);

      li {
        float: none;
        border-bottom: dashed #bbc4c7 1px;
        &:hover {
          background: #999;
          transition: all 0.7s;
        }
        a {
          padding: 10px;
          text-align: center;
          letter-spacing: 12px;
          font-size: 22px;
        }
        span {
          display: block;
          transition: all 0.5s;
        }
        a:hover {
          color: $primary;
          // position: relative;
        }
        a:after {
          display: none;
        }
        a:hover:after {
          display: none;
        }
      }
    }
  }

  // 顯示下拉選單
  .show-menu .menu {
    max-height: 500px;
  }
  // 選單以外區域
  .close-menu {
    position: fixed;
    background: rgba(0, 0, 0, 0);
    width: 100%;
    min-height: 1024px;
    z-index: 99;
    display: block;
  }
}
.menuButton {
  display: none;
  float: right;

  a {
    width: 50px;
    height: 50px;
    padding: 22.5px 5px;
    display: block;

    //漢堡線條
    span {
      //中間線條
      width: 35px;
      height: 5px;
      background-color: #fff;
      display: block;
      -webkit-transition: all 0.6s ease;
      -moz-transition: all 0.6s ease;
      -ms-transition: all 0.6s ease;
      -o-transition: all 0.6s ease;
      transition: all 0.6s ease;

      &:before,
      &:after {
        //上下線條
        content: "";
        position: absolute;
        width: 35px;
        height: 5px;
        background-color: #fff;
        display: block;
        -webkit-transition: all 0.6s ease;
        -moz-transition: all 0.6s ease;
        -ms-transition: all 0.6s ease;
        -o-transition: all 0.6s ease;
        transition: all 0.6s ease;
      }

      &:before {
        margin-top: 10px;
      }

      &:after {
        margin-top: -10px;
      }
    }
  }

  //旋轉動畫
  .change span {
    background-color: rgba(0, 0, 0, 0);

    &:before {
      margin-top: 0;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    &:after {
      margin-top: 0;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
    }
  }
}
@include iphone5() {
  .icon-rwd-margin{
    margin-right: 0px;
  }
}
</style>
