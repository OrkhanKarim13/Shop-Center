<template>
    <div class="bg-white-100 py-10">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
                <div class="h-[500px] bg-gray-300 mb-4">
                    <img class="w-full h-full" :src=getProductDetailInfo.image>
                </div>
                <div class="flex -mx-2 mb-4">
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                    </div>
                    <div class="w-1/2 px-2">
                        <button class="w-full bg-gray-400 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300">Add to Wishlist</button>
                    </div>
                </div>
            </div>
            <div class="md:flex-1 px-4">
                <h2 class="text-2xl font-bold mb-2">{{getProductDetailInfo.title}}</h2>
                <p class="text-gray-600 text-sm mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                    ante justo. Integer euismod libero id mauris malesuada tincidunt.</p>
                <div class="flex mb-4">
                    <div class="mr-4">
                        <span class="font-bold text-gray-700">Price:</span>
                        <span class="text-gray-600">${{getProductDetailInfo.price}}</span>
                    </div>
                    <div>
                        <span class="font-bold text-gray-700">Availability:</span>
                        <span class="text-gray-600">In Stock</span>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700">Select Color:</span>
                    <div class="flex items-center mt-2">
                        <button class="w-6 h-6 rounded-full bg-gray-800 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-red-500 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-blue-500 mr-2"></button>
                        <button class="w-6 h-6 rounded-full bg-yellow-500 mr-2"></button>
                    </div>
                </div>
                <div class="mb-4">
                    <span class="font-bold text-gray-700">Select Size:</span>
                    <div class="flex items-center mt-2">
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">S</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">M</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">L</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XL</button>
                        <button class="bg-gray-300 text-gray-700 py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400">XXL</button>
                    </div>
                </div>
                <div>
                    <span class="font-bold text-gray-700">Product Description:</span>
                    <p class="text-gray-600 text-sm mt-2">{{ getProductDetailInfo.description }}
                    </p>
                </div>
            </div>
        </div>

    </div>
</div>
</template>


<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    methods: {
        ...mapActions(['getProductDetail']),
    },
    computed: {
    
        ...mapGetters(['getProductDetailInfo']),
    },
    created() {
        let id=this.$route.params.id

        this.getProductDetail(id);
    },
}
</script>