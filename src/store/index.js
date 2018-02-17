import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => {
    return new Vuex.Store({
        state: {
            article: {}
        },
        mutations: {
            setArticle (state, data) {
                state.article = data
            }
        }
    })
}
export default store