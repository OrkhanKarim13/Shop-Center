<template>
    <section class="w-full p-10">
        <div class="w-10/11 flex items-center p-5">
            <div class="w-1/2 flex items-center flex-col gap-8">
                <h1 class="text-4xl py-3 ">
                    Home Section
                </h1>
                <div class="text-2xl px-10 text-center">“It was super easy to get a store up and running with Shopify. That
                    experience showed us how powerful it is when you combine creators and products.”</div>
                <MainButton class="my-4" />
            </div>
            <div class="w-1/2 flex items-center ">
                <img class="object-cover rounded-lg w-full h-[400px]" src="@/assets/cover.jpg" alt="images">
            </div>
            <pre>
            </pre>
        </div>
        <main class="flex flex-col justify-center items-center  gap-4 p-4 m-4">
            <h1 class="">Products</h1>
            <!-- <router-link :to=""> -->
            <div class="grid grid-cols-4 gap-4 p-4 m-4 w-full">
                    <div class="w-full flex flex-col justify-between gap-4 border" v-for="post in getFakeData" :key="post.id">
                        post.id{{ post.id }}
                   <router-link :to="`/singleProduct/${post.id}`" >
                    <div class="w-full flex justify-center">
                            <img class="p-4 object-contain w-[250px] h-[300px]" :src="post.image" alt="img">
                        </div>
                        <div class="h-1/10 text-center">{{ post.title }}</div>
                        <div class="h-8/10 text-center">{{ post.category }}</div>
                        <div class="h-1/10 text-center">{{ post.price }}$</div>
                   </router-link>
                    </div>
                </div>
            <!-- </router-link> -->
            <div class="max-w-6xl grid grid-cols gap-4 p-4">
                <div class="w-full rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden">


                </div>
            </div>

        </main>
    </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import MainButton from '@/components/MainButton.vue';

export default {
    components: {
        MainButton,

    },
    methods: {
        ...mapActions(['fetchPosts']),
    },
    computed: {
        getPost() {
            return this.$store.state.posts
        },
        ...mapGetters(['getFakeData']),
    },
    created() {

        this.fetchPosts();
    },
}
</script>