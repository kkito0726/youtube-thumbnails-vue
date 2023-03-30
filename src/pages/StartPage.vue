<template>
  <div class="home">
    <TopBar @catchVideoData="handleVideo" placeholder="検索ワードを入力" />

    <div class="mainContainer">
      <SideBar />
      <SearchResult :videoDataArray="videoDataArray" />
    </div>
  </div>
</template>
<script>
import TopBar from "@/components/TopBar.vue";
import SideBar from "@/components/SideBar.vue";
import SearchResult from "@/components/SearchResult.vue";
export default {
  name: "StartPage",
  components: {
    TopBar,
    SideBar,
    SearchResult,
  },
  data() {
    return {
      videoDataArray: [],
    };
  },
  methods: {
    handleVideo(searchDataArray) {
      this.videoDataArray = searchDataArray;
      console.log(this.videoDataArray);
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
