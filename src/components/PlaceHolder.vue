<template>
  <div class="ph-container">
    <div id="particles-js"></div>
    <div class="page-content">敬请期待</div>
  </div>
</template>

<script>
import "particles.js";
import { config } from "@/config/particles";
export default {
  name: "placeHolder",
  data() {
    return {
      
    };
  },
  mounted() {
    this.initParticles();
  },
  methods: {
    initParticles() {
      window.particlesJS("particles-js", config, function () {
        console.log("callback - particles.js config loaded");
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.ph-container {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: rgb(35, 39, 65);
  background-size: 20%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
</style>>