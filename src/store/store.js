import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const token = '&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIyNzEyNDY2NzgsInN1YiI6NSwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0IiwiaWF0IjoxNDgyODQ2NjgwLCJuYmYiOjE0ODI4NDY2ODAsImp0aSI6IjJkODZlNmRjOTRlOTZmMzRiMDhiNWEwOTllN2Y2ODMyIn0.MUeueet2nlfQORsaG5Vr0c3eka4TCx8QWFua4kgMs7A'

export default new Vuex.Store({
  state: {
    images: [],
    image: null,
    loadingImages: true,
    loadingImage: true
  },
  actions: {
    loadImages ({
      commit
    }) {
      const URL = 'http://api.regio.localhost/api/daisy/assets?type=image&per_page=16&page=1' + token
      axios.get(URL).then((response) => {
        commit('updateImages', response.data)
        commit('changeLoadingStateImages', false)
      })
    },
    loadImage ({
      commit
    }, request) {
      const URL = 'http://api.regio.localhost/api/daisy/assets/' + request.id + '?type=image&per_page=16&page=1' + token
      axios.get(URL).then((response) => {
        commit('updateImage', response.data)
        commit('changeLoadingStateImage', false)
      })
    }
  },
  mutations: {
    updateImages (state, images) {
      state.images = images.data
    },
    updateImage (state, image) {
      state.image = image
      console.log(state.image)
    },
    changeLoadingStateImages (state, loading) {
      state.loadingImages = loading
    },
    changeLoadingStateImage (state, loading) {
      state.loadingImage = loading
    }
  }
})
