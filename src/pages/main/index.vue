<template>
  <div id="main-page">
    <PlaceHolder />
    <div class="main-container">
      <div class="animate-wrapper">
        <div class="animate-circle circle-r" :class="redClass"></div>
        <div class="animate-circle circle-b" :class="blueClass"></div>
        <div class="animate-cover" :style="coverStyle"></div>
      </div>
    </div>
  </div>
</template>

<script>
import PlaceHolder from '@/components/PlaceHolder.vue'

export default {
  name: "HomePage",
  components: {
    PlaceHolder,
  },
  data() {
    return {
      redClass: '',
      blueClass: '',
      coverRotate: 30,
      coverTranslate: 600,
      coverOpcaity: 1,
    }
  },
  mounted() {
    this.initAnimation()
  },
  computed: {
    coverStyle() {
      const transform = `transform: rotate(${this.coverRotate}deg) translateX(${this.coverTranslate}px);`
      const opcaity = `opcaity: ${this.coverOpcaity};`
      return transform + opcaity
    }
  },
  methods: {
    initAnimation() {
      console.log('start load');
      setTimeout(() => {
        this.redClass = 'rotating'
        this.blueClass = 'rotating'
        // this.coverRotate = 1
      }, 2000)
    }
  }
};
</script>

<style lang="scss" scoped>
#main-page {
  width: 100%;
  height: 100vh;
  padding: 24px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.main-container {
  height: 100%;
  overflow: hidden;
  background-color: #00000087;
  border-radius: 20px;
  box-shadow: 0px 0px 16px 6px #10121b;
  position: relative;
  overflow: hidden;

  .animate-wrapper {
    position: relative;
    height: 100%;

    .rotating {
      animation: rotating 20s linear infinite;
    }

    .animate-circle {
      width: 600px;
      height: 600px;
      border-radius: 300px;
      position: absolute;
      box-shadow: 0px 0 20px 1px #27293821;
      transition: all 0.1s linear;
    }

    .animate-cover {
      width: 3000px;
      height: 3000px;
      top: calc(50% - 1500px);
      background-color: #00000059;
      z-index: 9;
      position: absolute;
      transition: all 2s linear;

    }

    .circle-r {
      z-index: 1;
      background: linear-gradient(180deg, #dd4b2e 0%, rgb(239 127 111 / 35%) 60%, rgba(148, 187, 233, 0) 100%);
      top: calc(50% - 300px);
      left: 400px;
    }

    .circle-b {
      z-index: 2;
      background: linear-gradient(180deg, rgba(238, 174, 202, 0) 0%, rgb(148, 187, 233, 35%) 60%, rgba(148, 187, 233, 1) 100%);
      top: calc(50% - 300px);
      // right: 400px;
      left: 400px;

    }

    .animate-cover {}

  }


  @keyframes rotating {
    from {
      -ms-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -webkit-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    to {
      -ms-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -webkit-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }


}
</style>

