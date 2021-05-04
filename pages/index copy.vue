<template>
  <div class="container">
   
    <nuxt-link to="/users">user</nuxt-link>
    <Navbar />
    <div>
      <Logo />
      <h1 class="title">
        nuxt-vue3
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, useMeta, onBeforeMount, computed, ref, 
          useRoute, useRouter, useStore, onGlobalSetup, provide, 
          useFetch, ssrPromise, ssrRef, shallowSsrRef,
          useAsync, useContext, useStatic,
          wrapProperty  } from '@nuxtjs/composition-api'
// import axios from 'axios'

const useAccessor = wrapProperty('$accessor', false)

export default defineComponent({
  head:{},
  setup(){

    // const { title } = useMeta()
    // title.value = 'my page'

    // const { title } = usetMeta({title: 'my page2'})

    // useMeta({title:'my page2'})
    // console.log('process', process.env.APIPATH)
    const msg = ref('')
    useMeta(() => ({ title: msg.value }))

    const route = useRoute()
    // console.log('route', route)
    const router = useRouter()
    router.push('/')
    const store2 = useStore()
    // console.log('store2', store2)
    store2.dispatch('products/getProducts', 1)
    // store2.dispatch('getProducts', page)


    onGlobalSetup(() => {
      provide('globaKey', true)
    })

    // const name = ref('')
    // const { fetch, fetchState } = useFetch(async () => {
    //   name.value = await axios.get('https://myapi.com/name')
    // })
    // fetch()
  
    // const _promise = ssrPromise(async () => myAsyncFunction())
    // const resolvedPromise = ref(null)
    // onBeforeMount(async() => {
    //   resolvedPromise.vlaue = await _promise
    // })

    const val = ssrRef('')
    const shallow = shallowSsrRef({ v: 'init'})

    const  {store}  = useContext() //別從這抓 route ， query ， from 和 params
    // // store.dispatch('myAction')
    // console.log('store', store)
    const { $http } = useContext()
    // const posts = useAsync(() => $http.$get('/api/posts'))
    // console.log('$http', posts)

    // const { params } = useContext()
    // const id = computed(() => params.value.id)
    // const post = useStatic(
    //   id => axios,get(`https://jsonplaceholder.typicode.com/posts/${id}`),
    //   id,
    //   'post'
    // )


    const accessor = useAccessor()
    // console.log('accessor', accessor)

    return {}
  }
})
</script>

<style scoped>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
