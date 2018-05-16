<template>
  <div id="app">
    <ul>
      <li>
        <router-link to="/photos">Photos</router-link>
      </li>
      <li>
        <router-link to="/admin">Admin</router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  ul {
    list-style-type: none;
  }

  li {
    display: inline-block;
    float: left;
    margin-right: 1rem;
  }
</style>
