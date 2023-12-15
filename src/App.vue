<template>
  <div class="{{CONTAINER}}">
    <MyVueJSButton :initnum="5" :initstep="1"/>
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
