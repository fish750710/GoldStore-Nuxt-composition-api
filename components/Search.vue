<template>
  <div>
    <div class="input-group">
      <input
        type="search"
        class=""
        placeholder="搜尋.."
        aria-label="搜尋"
        v-model="searchValue"
        @keyup.enter="searchProduct"
      />
      <div class="">
        <button
          type="button"
          class="btn"
          style="width: 36px;"
          @click="searchProduct"
        >
          <i class="fas fa-search fa-lg"></i>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
// import $ from 'jquery'
export default {
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    searchProduct () {
      const str = this.searchValue
      this.$router.push(`/search/${this.searchValue}`).catch(err => (err))
      this.$bus.$emit('search')
      if (str.trim() === '') {
        this.$bus.$emit('messsage:push', `請輸入商品名稱`, 'danger')
      }
      this.searchValue = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/all";
.input-group{
  display: flex;
  input{
    height: 26px;
  }
  button{
    height: 25px;
    border: none;
    background-color: $white;
    i{
      color: $bg-color;
    }
    &:hover{
      cursor: pointer;
      background-color: $primary;
    }
  }
}
</style>
