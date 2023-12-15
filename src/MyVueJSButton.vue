<template>
  <div>
    <div>Provided by RemoteVueJs Project - {MyVueJSButton.vue}</div>
    <p>{{ num }}</p>
    <button @click="increment">click me</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'MyVueJSButton',
  props: 
  {
      initnum:Number,
      initstep:Number
  },
  setup(props) {
    const num = ref(props.initnum);
    const increment = () => {
      num.value += props.initstep;
    };

    return { num, increment };
  }
};
</script>

<style>

</style>
