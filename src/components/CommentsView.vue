<template>
  <div class="commentContainer">
    <div class="commentWrapper">
      <v-btn @click="getComments">
        <span class="commentTitle">コメント</span>
      </v-btn>
      <hr class="commentHr" />
      <div v-for="(comment, index) in comments" :key="index" class="comment">
        <div class="commentBody">
          <div class="commentUser">
            <img
              :src="comment.authorProfileImageUrl"
              alt=""
              className="profileImg"
            />
            <span class="authorName">{{ comment.authorName }}</span>
            <span class="commentPublishedAt">{{ comment.publishedAt }}</span>
            <timeago :datetime="comment.publishedAt"></timeago>
          </div>

          <div class="commentMain">
            <span class="commentDisplay">{{ comment.comment }}</span>
          </div>

          <div class="commentButton">
            <span class="likes">{{ comment.likeCount }}</span>
          </div>
        </div>

        <hr className="commentHr" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CommentsView",
  props: ["videoId"],
  data() {
    return {
      comments: "",
    };
  },
  methods: {
    async getComments() {
      const data = await fetch(
        `http://localhost:8080/api/comments?videoId=${this.videoId}`
      );
      this.comments = await data.json();
      console.log(this.comments);
    },
  },
};
</script>

<style>
.commentContainer {
  padding: 10px;
}

.commentWrapper {
  padding: 20px;
  box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
}

.commentTitle {
  font-size: large;
  font-weight: 550;
  cursor: pointer;
}

.commentUser {
  display: flex;
  align-items: center;
}

.commentBody {
  padding: 5px 10px;
}

.profileImg {
  width: 30px;
  border-radius: 50%;
  margin-right: 5px;
}
.authorName {
  font-weight: 550;
}

.commentPublishedAt {
  font-size: smaller;
  margin-left: 5px;
}

.commentMain {
  padding: 10px;
}

.commentBottom {
  display: flex;
  align-items: center;
  margin-left: 5px;
}

.likes {
  margin-left: 5px;
}
</style>
