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
  setup() {
    const num = ref(0);

    const increment = () => {
      num.value += 2;
    };

    return { num, increment };
  }
};
</script>

<style>

</style>
