<template>
  <div class="main">
    <div class="mainWrapper">
      <div
        v-for="(videoData, index) in videoDataArray"
        :key="index"
        class="video"
      >
        <div class="videoContainer">
          <div class="videoContainerWrapper">
            <div className="videoImg">
              <img :src="videoData.thumbnail" alt="" className="img" />
            </div>
            <div class="desc">
              <a
                :href="`https://www.youtube.com/watch?v=${videoData.videoId}`"
                class="videoLink"
              >
                <span class="videoTitle">
                  {{ videoData.videoTitle }}
                </span>
              </a>
              <span class="channelTitle">
                {{ videoData.channelTitle }}
              </span>
              <hr class="resultHr" />
              <span class="VideoDescription">
                {{ videoData.description }}
              </span>
              <router-link
                :to="{
                  name: 'videoInfoPage',
                  query: {
                    thumbnail: videoData.thumbnail,
                    videoId: videoData.videoId,
                    videoTitle: videoData.videoTitle,
                    channelTitle: videoData.channelTitle,
                    description: videoData.description,
                  },
                }"
              >
                <span class="videoInfo">詳細はこちら</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchResult",
  props: {
    videoDataArray: Object,
  },
  methods: {
    handleClick(videoData) {
      this.$router.push({
        name: "videoInfoPage",
        query: { videoData: videoData, test: "テスト" },
      });
    },
  },
};
</script>

<style>
.main {
  flex: 9.5;
}

.videoContainerWrapper:hover {
  box-shadow: none;
  transform: translateY(5px);
}
.videoContainer {
  padding: 10px;
}

.videoContainerWrapper {
  box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.4);
  /* margin-bottom: 10px; */
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
}

a {
  text-decoration: none;
  color: black;
}

.img {
  margin-left: 5px;
  width: 200px;
  border-radius: 5px;
}

.desc {
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
}

.publishTime {
  font-size: smaller;
}

.videoTitle {
  font-size: large;
  font-weight: 550;
}

.resultHr {
  margin: 5px 0;
}

.VideoDescription {
  font-size: 12px;
}

.videoInfo {
  font-size: smaller;
  font-weight: 550;
}

.videoInfo:hover {
  color: rgb(111, 170, 169);
  text-decoration: underline;
}
</style>
