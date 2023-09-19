<template>
    <div>
        Men product detailuyem

       <pre>
        {{ getProductDetailInfo }}
        
       </pre>
       <img :src="getProductDetailInfo.image">
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