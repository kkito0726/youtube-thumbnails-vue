<template>
  <div class="home">
    <TopBarVue />
    <button @click="handleClick">click</button>
    {{ this.$route.query.videoData }}
  </div>
</template>

<script>
import TopBarVue from "@/components/TopBar.vue";
// import { object } from "prop-types";
export default {
  name: "VideoInfoPage",
  components: {
    TopBarVue,
  },
  props: {
    videoData: String,
  },
  methods: {
    handleClick() {
      console.log(JSON.parse(this.$route.query.videoData));
    },
  },
};
</script>
