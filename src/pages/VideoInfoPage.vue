<template>
  <div class="home">
    <TopBarVue placeholder="検索ワードを入力" />
    <div class="mainContainer">
      <SideBar />
      <VideoInfo :videoData="this.videoData" />
    </div>
  </div>
</template>

<script>
import TopBarVue from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import VideoInfo from "@/components/VideoInfo.vue";
export default {
  name: "VideoInfoPage",
  components: {
    TopBarVue,
    SideBar,
    VideoInfo,
  },
  data() {
    return {
      videoData: {
        thumbnail: this.$route.query.thumbnail,
        videoId: this.$route.query.videoId,
        videoTitle: this.$route.query.videoTitle,
        channelTitle: this.$route.query.channelTitle,
        description: this.$route.query.description,
      },
    };
  },
  methods: {
    handleClick() {
      console.log(this.$route);
    },
  },
};
</script>

<style>
* {
  margin: 0;
}

.mainContainer {
  display: flex;
  flex-direction: row;
}
</style>
