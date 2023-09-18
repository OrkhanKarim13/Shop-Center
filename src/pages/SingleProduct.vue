<template>
    <section class="flex flex-col items-center bg-white-500">
        <div class=""><h1>{}</h1></div>
    </section>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';


export default {
    components: {
        
       
    },
    methods:{
        ...mapActions(['fetchPosts']),
    },
    computed:{
        getPost(){
            return this.$store.state.posts.id
        },
        ...mapGetters(['getFakeData']),
    },
    created() {

    this.fetchPosts();
  },
}
</script>