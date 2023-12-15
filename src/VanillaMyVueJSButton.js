import MyVueJSButton from "./MyVueJSButton.vue";
import { createApp,h } from "vue";

function VanillaMyVueJSButton(el,{initnum,initstep}){
  const app = createApp({
    render() {
      return h(MyVueJSButton, { initnum: initnum, initstep:initstep });
    }
  });
  app.mount(el);
}

export default VanillaMyVueJSButton;