<template>
    <header class="w-full bg-white px-5">
        <div class="w-full flex items-center justify-between border-b-2 p-1">
            <div><span class="py-1">mrorkhankarimli@gmail.com</span></div>
            <div class="flex items-center">{{ date }}</div>
            <div class="flex"> <input type="email">
                <div class="flex gap-1"> <img class="w-[20px]" src="@/assets/icons/message.svg" alt="icon">Account</div>
            </div>
        </div>
        <div class="w-full flex items-center justify-between px-10">
            <div class="w-1/5 text text-3xl"><router-link to="/">Shop Center</router-link></div>
            <ul class=" w-8/10 flex items-center">
                <li class="p-5">
                    <router-link to="/">
                        Home
                    </router-link>
                </li>
                <li class="p-5">
                    <router-link to="/about" class=" cursor-pointer">
                        About
                    </router-link>
                </li>
                <li class="p-5"><router-link :to="{name:'Blog'}">Blog</router-link></li>
                <!-- <li class="p-5"><button @click="getBlog()">Blog</button></li> -->
                <li class="p-5"><router-link to="/services">Services</router-link></li>
                <li class="p-5"><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
    </header>
</template>

<script >



export default {
    data() {
        return {
            date: ''
        };
    },
    methods:{
        getBlog(){
            this.$router.push({
                name:"Blog",
                query:{
                    test:"Salammmm"
                }
            })
        }
    },
    created() {
        setInterval(() => {
            const now = new Date();
            this.date = now.toLocaleString();
        }, 1000);
    },
}



</script>