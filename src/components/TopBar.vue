<template>
  <div className="topbarWrapper">
    <div className="topbarLeft">
      <router-link to="/">
        <span className="topbarTitle">YouTube サムネイル</span>
      </router-link>
    </div>
    <div className="topbarBar">
      <svg-icon type="mdi" :path="path" className="topbarIcon"></svg-icon>

      <input
        v-model="q"
        type="text"
        className="topbarInput"
        :placeholder="placeholder"
      />
      <button @click="handleSearch" className="topbarButton">検索</button>
    </div>
    <div className="topbarBarRight">
      <div className="topbarIcons">
        <img src="/assets/person/noAvatar.png" alt="" className="topbarImg" />
        <span className="userName">LaRCode</span>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify } from "@mdi/js";
export default {
  name: "TopBar",
  components: {
    SvgIcon,
  },
  props: {
    placeholder: String,
    searchUrl: String,
  },
  data() {
    return {
      q: "",
      searchDataArray: [],
      path: mdiMagnify,
    };
  },
  methods: {
    async handleSearch() {
      console.log(this.searchUrl + this.q);
      const res = await fetch(this.searchUrl + this.q);
      this.searchDataArray = await res.json();
      this.$emit("catchVideoData", this.searchDataArray);
    },
  },
};
</script>

<style>
.topbarTitle {
  color: white;
  font-size: 18px;
  font-weight: 550;
  margin-left: 10px;
}

.topbarWrapper {
  background-color: rgb(234, 51, 35);
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 100;
}

.topbarBar {
  width: 100%;
  height: 30px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  align-items: center;
  flex: 5;
}

.topbarIcon {
  margin-left: 10px;
  color: grey;
}

.topbarInput {
  margin-left: 5px;
  border: none;
  width: 80%;
}

.topbarInput:focus {
  outline: none;
}

.topbarLeft {
  flex: 3;
  cursor: pointer;
}

.topbarBarRight {
  flex: 2.5;
}

.topbarIcons {
  display: flex;
  align-items: center;
  justify-content: end;
  cursor: pointer;
}

.topbarImg {
  width: 32px;
  height: 32px;
  border-radius: 50px;
  cursor: pointer;
  object-fit: cover;
}
.userName {
  font-weight: 550;
  font-size: smaller;
  color: white;
  margin-left: 10px;
  margin-right: 30px;
}
</style>
