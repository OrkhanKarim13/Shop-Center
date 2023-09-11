<template>
    <header class="w-full bg-white px-5">
        <div class="w-full flex items-center justify-between border-b-2 p-1">
            <div><span class="py-1">mrorkhankarimli@gmail.com</span></div>
            <div class="flex items-center">{{ dateFnc() }}</div>
            <div class="flex"> <input type="email"> <div class="flex gap-1"> <img class="w-[20px]" src="../assets/icons/message.svg"
                        alt="icon">Account</div></div>
        </div>
        <div class="w-full flex items-center justify-between px-10">
            <div class="w-1/5 text text-3xl">Shop Center</div>
            <ul class=" w-8/10 flex items-center">
                <li class="p-5">Home</li>
                <li class="p-5">About</li>
                <li class="p-5">Blog</li>
                <li class="p-5">Services</li>
                <li class="p-5">Contact</li>
            </ul>


        </div>


    </header>
</template>

<script >

export default {
    methods: {
        dateFnc(){
          const now = new Date();
          return now.toLocaleDateString();
        }
      }
}



</script>