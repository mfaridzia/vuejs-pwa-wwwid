<template>
  <div>
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
    <div class="container">
      <p> 
        <h2> Vue.js PWA for wwwid by @mfaridzia </h2>
        <p> Source Code : <p>
        <a href="https://github.com/mfaridzia/vuejs-pwa-wwwid" class="source"> https://github.com/mfaridzia/vuejs-pwa-wwwid </a> 
      </p>
    </div>
  </div>
</template>

<style scoped>
header {
  position: fixed;
  top:0;
  width: 100%;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #1f293d;
  color: #ffffff;
  margin-top: 0px;
  text-align: left;
}

header ul {
  list-style: none;
  margin-left: 1px;
}
header ul li {
  display: inline-block;
}
header a {
  text-decoration: none;
  color: #fff;
  display: block;
  padding: 5px 20px;
  font-size: 14px;
}
header a:hover {
  color: #ecf0f1;
}
.brand {
  font-weight: bold;
  color: #ecf0f1;
}

.container {
  margin: 200px auto;
}
h2 {
  font-size: 20px;
}
p {
  font-size: 17px;
}
.source {
  color: #000;
  margin-top: -10px;
}
ul {
  list-style: none;
  margin-left: -270px;
}

@media only screen and (max-width: 750px) {
  .container {
      width: 100%;
  }
  h2 {
      font-size: 14px;
  }
  p {
    font-size: 12px;
  }
  .brand {
    display: none;
  }
}
</style>
