<template>
  <div id="app">
    <header>
      <ul>
        <li>
          <router-link to="/" class="brand"> WWWID - MEDIUM </router-link>
        </li>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/about"> About </router-link>
        </li>
      </ul>
    </header>
    <main>
      <div class="wrapper">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
    }
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #3498db;
  color: #ffffff;
  margin-top: -17px;
}

ul {
  list-style: none;
}
ul li {
  display: inline-block;
}
a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 20px;
  font-size: 14px;
}
a:hover {
  color: #ecf0f1;
}
.brand {
  font-weight: bold;
  color: #ecf0f1;
}
</style>
