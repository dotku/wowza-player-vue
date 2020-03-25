<template>
<div class="container">
  <div class="player-container" v-if="ifPlayer">
    <div :id="playerId" class="player"/>
  </div>
  <div><button @click="handleButtonClick">Toggle</button></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      ifPlayer: true,
      playerId: "playerId",
      wowzaConfig: {
        license: process.env.VUE_APP_WOWZA_PLAYER_LICENSE_KEY,
        sourceURL: "sourceURL HERE",
        mute: true,
        abrAutoSwitching: false,
        uiShowBitrateSelector: false,
        uiShowSeekBar: false,
        uiShowPlaybackControls: false,
        uiShowVolumeControl: false,
        uiShowQuickRewind: false,
        endTime: -1, // never end
        autoPlay: true,
        debugLevel: "OFF" // debug
      }
    };
  },
  mounted() {
    console.log("env", process.env);
    const { WowzaPlayer } = window;
    console.log(WowzaPlayer);
    console.log(this.wowzaConfig.sourceURL);
    this.player = WowzaPlayer.create(this.playerId, this.wowzaConfig);
  },
  methods: {
    handleButtonClick() {
      console.log("handleButtonClick 3");
      this.ifPlayer = !this.ifPlayer;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.player-container,
.player {
  width: 800px;
  height: 400px;
}
.container {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
button {
  margin-top: 20px;
  padding: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
