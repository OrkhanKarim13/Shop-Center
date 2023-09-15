<template>
    <section class="w-full p-10">
        <div class="w-10/11 flex items-center p-5">
            <div class="w-1/2 flex items-center flex-col gap-8">
                <h1 class="text-4xl py-3 ">
                    Blog Section
                </h1>
                <div class="text-2xl px-10 text-center">“It was super easy to get a store up and running with Shopify. That experience showed us how powerful it is when you combine creators and products.”</div>
                <MainButton class="my-4"/>
            </div>
            <div class="w-1/2 flex items-center ">
                <img class="object-cover rounded-lg w-full h-[400px]" src="@/assets/cover3.jpg" alt="images">
            </div>

        </div>
    </section>
</template>

<script>

import MainButton from '@/components/MainButton.vue';

export default {
    components: {
        MainButton,
       
    }
}
</script>