<template>
    <section class="w-full px-10">
        <div class="w-10/11 flex items px-5">
            <div class="w-1/2 flex items-center flex-col">
                <h1 class="text-4xl ">
                    Home Section
                </h1>
                <div class="text-2xl"></div>
                <MainButton/>
            </div>

        </div>
    </section>
</template>

<script>
import MainButton from '/src/components/MainButton.vue';

export default {
    components:{
        MainButton
    }
}

</script>