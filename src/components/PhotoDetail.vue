<template>
  <div>
    <section v-if="!loadingImage">
      <h1>{{ image.title }}</h1>
      <img :src="image.versions[selectedVersion].url" />
      <button v-on:click="previousVersion">Previous version</button>
      <button>Delete</button>
      <button>Download</button>
      <button v-on:click="nextVersion">Next version</button>
    </section>
  </div>
</template>

<script>
import Vuex from 'vuex'

export default {
  name: 'PhotoThumbnail',
  computed: Vuex.mapState(['image', 'loadingImage']),
  data () {
    return {
      selectedVersion: 0
    }
  },
  mounted () {
    this.$store.dispatch('loadImage', {
      id: this.$route.params.id
    })
  },
  methods: {
    nextVersion () {
      if (this.image.versions.length !== 1 && this.selectedVersion < this.image.versions.length - 1) {
        this.selectedVersion++
      }
    },
    previousVersion () {
      if (this.image.versions.length !== 1 && this.selectedVersion > 0) {
        this.selectedVersion--
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  section {
      width: 25rem;
  }

  img {
    width: 100%;
  }
</style>
