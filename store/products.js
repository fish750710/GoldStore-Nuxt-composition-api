export const state = () => ({
    products: [],
    pagination: {},
    activeitem: ''
})
export const mutations = {
    ACTIVEITEM(state, payload) {
        state.activeitem = payload
    },
    PRODUCTS(state, payload) {
        state.products = payload
    },
    PAGINATION(state, payload) {
        state.pagination = payload
    },
    FILTER(state, payload) {
        state.products = payload
    },
    // 我的喜愛加入product item
    UPDATEPRODUCTS(state, { index, isFavorite }) {
        console.log(state, index, isFavorite)
        // Vue.set(state.products[index], 'is_favorite', isFavorite)
    }
}
export const actions = {
    async getProducts(context, page) {
        context.commit('ACTIVEITEM', '')
        // console.log('products-actions', context)
        // console.log('this', this)
        let searchValue = this.$router.currentRoute.params.searchStr
        let searchkey = this.$router.currentRoute.params.Str
        let search = this.$router.currentRoute.name
        let url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`
        if (search === 'Search' || searchkey !== undefined) {
            url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products/all`
        }      
        context.commit('LOADING', true, { root: true })
        return await this.$axios.get(url).then(response => {
            console.log('res', response.data.products)
            context.commit('PRODUCTS', response.data.products)
            // 在 products 加入 is_favorite            
            if (context.rootState.favorite.myfavorite.length !== 0) {
                context.state.products.forEach((productItem, index) => {
                    context.rootState.favorite.myfavorite.forEach((favItem) => {
                        if (productItem.id === favItem.id) {
                            // console.log(productItem.id, favItem.id, index)
                            context.commit('UPDATEPRODUCTS', { index, isFavorite: true })
                        }
                    })
                })
            }
            context.commit('PAGINATION', response.data.pagination)
            context.commit('LOADING', false, { root: true })
            if (search === 'Search' || searchkey !== undefined) {
                let array = []
                array = response.data.products.filter(e => {
                    if (searchValue !== undefined) {
                        // 搜尋
                        return (
                            e.title === searchValue ||
                            e.title.indexOf(searchValue) !== -1 ||
                            e.title.toUpperCase().indexOf(searchValue) !== -1 ||
                            e.title.toLowerCase().indexOf(searchValue) !== -1
                        )
                    } else {
                        context.commit('ACTIVEITEM', searchkey)
                        // 品牌類別
                        return (
                            e.brand === searchkey ||
                            e.brand.toUpperCase().indexOf(searchkey) !== -1 ||
                            e.brand.toLowerCase().indexOf(searchkey) !== -1
                        )
                    }
                })
                let filterdata = Object.assign([], array)
                context.commit('FILTER', filterdata)
            }
        })
        
    }
}
export const getters = {
    products: state => state.products,
    pagination: state => state.pagination,
    activeitem: state => state.activeitem
}