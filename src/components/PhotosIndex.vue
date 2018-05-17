<template>
  <div>
    <h3>DAISY FOTO'S!</h3>
    <ul>
      <li v-for="image in images" :key="image.id">
        <router-link :to="{ path: '/photo/' + image.id }">
          <PhotoThumbnail :imgURL="image.versions[0].url" :imgId="image.id"></PhotoThumbnail>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import PhotoThumbnail from '@/components/PhotoThumbnail'
import Vuex from 'vuex'

export default {
  name: 'PhotosIndex',
  computed: Vuex.mapState(['images', 'loadingImages']),
  components: {
    PhotoThumbnail
  },
  mounted () {
    this.$store.dispatch('loadImages')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    line-height: 0;
    margin: 0 10px;
    width: 5rem;
    border: 1px solid #CCC;
  }
  li img {
    width: 100%;
  }
</style>
