<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col" v-for="user in users" :key="user.userId">
                <div class="card" style="width: 18rem;" >
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">{{ user.firstName }} {{ user.lastName }}</h5>
            <p class="card-text"><span>E-mail adress: {{ user.emailAdd }}</span>.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
            </div>
        </div>
    </div>
</template>

<script>
import spinnerComp from"@/components/spinnerComp.vue"
    export default {
        components:{
            spinnerComp
        },
        computed: {
            users(){
                return this.$store.state.users
            }
        },
        mounted(){
            this.$store.dispatch('fetchUsers')
        }
    }
</script>

<style scoped>

</style>