<template>
  <div className="sidebar">
    <div className="sidebarWrapper">
      <ul className="sidebarList">
        <router-link to="/">
          <li className="sidebarListItem">
            <svg-icon
              type="mdi"
              :path="magnifyPath"
              className="sidebarIcon"
            ></svg-icon>
            <span className="sidebarListItemText">キーワードで検索</span>
          </li>
        </router-link>

        <router-link to="/searchByChannelUrl">
          <li className="sidebarListItem">
            <svg-icon
              type="mdi"
              :path="televisionClassicPath"
              className="sidebarIcon"
            ></svg-icon>
            <span className="sidebarListItemText">チャンネルURLで検索</span>
          </li>
        </router-link>

        <li className="sidebarListItem">
          <svg-icon
            type="mdi"
            :path="videoPath"
            className="sidebarIcon"
          ></svg-icon>
          <span className="sidebarListItemText">動画URLで検索</span>
        </li>
      </ul>
      <hr className="sidebarHr" />

      <ul className="sidebarList">
        <a href="https://www.youtube.com/">
          <li className="sidebarListItem">
            <svg-icon
              type="mdi"
              :path="homePath"
              className="sidebarIcon"
            ></svg-icon>
            <span className="sidebarListItemText">ホーム</span>
          </li>
        </a>

        <a href="https://www.youtube.com/shorts/6hwHXUM_MFE">
          <li className="sidebarListItem">
            <svg-icon
              type="mdi"
              :path="cellPhonePlayPath"
              className="sidebarIcon"
            ></svg-icon>
            <span className="sidebarListItemText">ショート</span>
          </li>
        </a>
        <a href="https://www.youtube.com/feed/subscriptions">
          <li className="sidebarListItem">
            <svg-icon
              type="mdi"
              :path="youtubeSubscriptionPath"
              className="sidebarIcon"
            ></svg-icon>
            <span className="sidebarListItemText">登録チャンネル</span>
          </li>
        </a>
      </ul>
      <hr className="sidebarHr" />
    </div>
  </div>
</template>

<script>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMagnify,
  mdiTelevisionClassic,
  mdiVideo,
  mdiHome,
  mdiCellphonePlay,
  mdiYoutubeSubscription,
} from "@mdi/js";
export default {
  name: "SideBar",
  components: {
    SvgIcon,
  },
  data() {
    return {
      magnifyPath: mdiMagnify,
      televisionClassicPath: mdiTelevisionClassic,
      videoPath: mdiVideo,
      homePath: mdiHome,
      cellPhonePlayPath: mdiCellphonePlay,
      youtubeSubscriptionPath: mdiYoutubeSubscription,
    };
  },
};
</script>

<style>
.sidebar {
  flex: 2.5;
  height: 100vh;
}
.sidebarWrapper {
  padding: 10px 5px;
}
.sidebarList {
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
}
.sidebarListItem {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 6px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 5px 3px 5px 0px rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
}

.sidebarIcon {
  font-size: 25px !important;
  margin-right: 10px;
  margin-left: 5px;
}

.sidebarListItem:hover {
  box-shadow: none;
  transform: translateY(5px);
  background-color: rgb(230, 230, 230);
}

.sidebarListItemText {
  font-weight: 550;
}

.sidebarHr {
  margin: 20px 0;
}
</style>
