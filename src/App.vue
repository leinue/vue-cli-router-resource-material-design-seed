<template>

  <div id="app">
    <header>
      <h1>Gospel IDE Frontend</h1>
      <p>
        <a v-link="{ path: '/404' }">Go to 404</a>
      </p>
    </header>
    <section>
      <router-view></router-view>
    </section>
    <footer>
      <ui-button color="primary">Google Material Design</ui-button>
    </footer>
  </div>

</template>

<script>

export default {
  components: {
  },

  methods: {
  }
}
</script>

<style>

html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}

</style>
