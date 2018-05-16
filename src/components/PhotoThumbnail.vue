<template>
  <div>
    <img :src="imgURL" />
    <button>Delete</button>
    <button>Download</button>
    <h1>blop</h1>
  </div>
</template>

<script>
export default {
  name: 'PhotoThumbnail',
  props: [
    'imgURL',
    'imgId'
  ]
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  img {
    width: 100%;
  }
</style>
