import CommentsView from './CommentsView.vue';

<template>
  <div class="main">
    <a :href="`https://www.youtube.com/watch?v=${videoData.videoId}`">
      <div class="videoInfoContainer">
        <div class="videoInfoWrapper">
          <div class="thumbnail">
            <img :src="videoData.thumbnail" alt="" />
          </div>
          <div class="videoDesc">
            <span class="videoTitle">{{ videoData.videoTitle }}</span>
            <span class="channelTitle">{{ videoData.channelTitle }}</span>
            <span class="description">{{ videoData.description }}</span>
          </div>
        </div>
      </div>
    </a>
    <CommentsView :videoId="videoData.videoId" />
  </div>
</template>

<script>
import CommentsView from "./CommentsView.vue";

export default {
  name: "VideoInfo",
  props: ["videoData"],
  components: { CommentsView },
};
</script>

<style>
.main {
  flex: 9;
}

.videoInfoContainer {
  padding: 10px;
}

.videoInfoWrapper {
  display: flex;
  align-items: center;
  padding: 20px;
  box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  cursor: pointer;
  transition: all 0.3s;
}

.thumbnail {
  flex: 4;
}

.videoDesc {
  flex: 8;
  display: flex;
  flex-direction: column;
  padding: 5px 20px;
}
</style>
