<template>
  <div class="box" v-show="state.show">
    <div class="option">
      <div class="header">
        <h2 class="title">{{state.title}}</h2>
        <i
          class="fa fa-times"
          aria-hidden="true"
          @click="close"
        ></i>
      </div>
      <div class="context">
        <h3>空無一物</h3>
        <button>搶購去</button>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, useStore, watch } from "@nuxtjs/composition-api";

export default {
  setup() {
    const store = useStore()
    const state = reactive({
      show: store.state.optionShow,
      title: ''
    });
    const close = () => {
        store.commit('SETOPTIONSHOW', '')
    }
    watch(()=> store.state.optionShow, val =>{
        state.title = val=='favorite'?'我的收藏':'我的購物車'
        return state.show = val
    })
    return {
      state, close
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/all";
.box {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.3);
  .option {
    position: absolute;
    right: 0;
    top: 0;
    width: 30%;
    height: 100%;
    background-color: #fff;
    box-shadow: -5px 0 10px 5px rgba(0, 0, 0, 0.3);
    .header {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 10%;
      background-color: $primary;
      h2 {
        width: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      i {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: center;
        // margin-left: 20px;
        font-size: 30px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .context {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 90%;
    }
  }
}
button {
  margin-top: 10px;
  background-color: $primary;
  border: none;
  border-radius: 5px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
    background-color: $primaryLight;
  }
}
</style>