<template>
  <div class="{{CONTAINER}}">
    <MyVueJSButton />
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import MyVueJSButton from './MyVueJSButton.vue';
  export default defineComponent({
    components:{
      MyVueJSButton
    }
  });
</script>
