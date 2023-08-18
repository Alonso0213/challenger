<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <router-link to="/"><img src="https://i.postimg.cc/R0tzfVGv/ac-logo-a-c-design-white-ac-letter-ac-letter-logo-design-initial-letter-ac-linked-circle-uppercase-m.jpg" alt="logo" loading="lazy"></router-link> 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/">Home</router-link> 
                <router-link to="/about">About</router-link>
                <router-link to="/product">Products</router-link>
                <router-link to="/contact">Contact</router-link>
              </li>
            </ul>
        <li class="log">
          <router-link to="/login">Login</router-link> 
          <router-link to="/register">Register</router-link>
          <router-link to="/users">users</router-link> 
        </li>
          </div>
        </div>
      </nav>
</template>

<script>
export default {
}
</script>

<style scoped>
img{
    height: 3rem;
}

.nav-item {
  display: flex;
  gap: 2rem;
  justify-content: end;
  text-decoration: none;
}

.log{
  display: flex;
  gap: 2rem;
  justify-content: end;}

</style>