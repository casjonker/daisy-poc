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

export default {
  name: 'PhotosIndex',
  data () {
    return {
      images: []
    }
  },
  components: {
    PhotoThumbnail
  },
  created () {
    fetch('http://api.regio.localhost/api/daisy/assets?type=image&per_page=16&page=1&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjIyNzEyNDY2NzgsInN1YiI6NSwiaXNzIjoiaHR0cDpcL1wvbG9jYWxob3N0IiwiaWF0IjoxNDgyODQ2NjgwLCJuYmYiOjE0ODI4NDY2ODAsImp0aSI6IjJkODZlNmRjOTRlOTZmMzRiMDhiNWEwOTllN2Y2ODMyIn0.MUeueet2nlfQORsaG5Vr0c3eka4TCx8QWFua4kgMs7A')
      .then(response => response.json())
      .then(json => {
        this.images = json.data
      })
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
