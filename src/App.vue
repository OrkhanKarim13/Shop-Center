<template>
  <HeaderVue />
 <router-view></router-view>
 <TheFooter/>
</template>

<script>
import HeaderVue from "@/components/HeaderVue.vue"
import TheFooter from "@/components/TheFooter.vue"

export default{
  components:{
    HeaderVue,
    TheFooter
  }
}

</script>

