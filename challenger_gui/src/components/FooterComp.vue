<template>
    <div class="footer">
        <p class="card-text">&copy; copyright 2023</p>
        <router-link to="/contact" class="btn btn-primary">Get in touch</router-link>
       <div class="container"> 
        <a href="https://www.facebook.com/" target="_blank"><img src="https://i.postimg.cc/PJjw68bK/2021-Facebook-icon-svg.png" alt="icon" class="icons"></a>
        <a href="https://www.linkedin.com/in/alonso-cupido-b91370282/" target="_blank"><img src="https://i.postimg.cc/sgDpdSkN/702300.png" alt="icon" class="icons"></a>
       <a href="https://www.instagram.com/?hl=en" target="_blank"><img src="https://i.postimg.cc/TPKghxYj/instagram-icon-logo-free-png.webp" alt="icon" class="icons"></a>
        </div>
    </div>
    
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
.footer{
    background-color: rgba(0, 0, 0, 0.765);
    color: white;
}
.icons{
    height: 2rem;
}
.container{
 display: flex;
 justify-content: end;
 gap: 2rem;    
}
</style>