<template>
  <section>
    <h1>{{ imgName }}</h1>
    <img :src="imgUrl" />
    <button v-on:click="previousVersion">Previous version</button>
    <button>Delete</button>
    <button>Download</button>
    <button v-on:click="nextVersion">Next version</button>
  </section>
</template>

<script>
export default {
  name: 'PhotoThumbnail',
  data () {
    return {
      imgName: null,
      imgId: this.$route.params.id,
      imgUrl: null,
      image: null,
      selectedVersion: 0
    }
  },
  created () {
    fetch('http://api.regio.localhost/api/daisy/assets/' + this.imgId + '?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIyNzEyNDY2NzgsInN1YiI6NSwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0IiwiaWF0IjoxNDgyODQ2NjgwLCJuYmYiOjE0ODI4NDY2ODAsImp0aSI6IjJkODZlNmRjOTRlOTZmMzRiMDhiNWEwOTllN2Y2ODMyIn0.MUeueet2nlfQORsaG5Vr0c3eka4TCx8QWFua4kgMs7A')
      .then(response => response.json())
      .then(json => {
        this.image = json
        this.imgUrl = json.versions[this.selectedVersion].url
        this.imgName = json.versions[this.selectedVersion].name
      })
  },
  methods: {
    nextVersion () {
      if (this.image.versions.length !== 1 && this.selectedVersion < this.image.versions.length) {
        this.selectedVersion++
        this.setVersion(this.selectedVersion)
      }
    },
    previousVersion () {
      if (this.image.versions.length !== 1 && this.selectedVersion > 0) {
        this.selectedVersion--
        this.setVersion(this.selectedVersion)
      }
    },
    setVersion (versionNo) {
      this.imgUrl = this.image.versions[versionNo].url
      this.imgName = this.image.versions[versionNo].name
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
