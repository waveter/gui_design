<template>
  <div
    class="body-container"
    @mousedown="handleMouseDown($event)"
    @mousemove="handleMouseMove($event)"
    ref="drawContainer"
  >
    <div class="left-side">
      <GuiElement
        v-for="(element, index) in listElementOriPos"
        :key="index"
        :tagName="element.tagName"
        :displayText="element.text"
        :position="element.position"
      />
    </div>
    <div class="right-side">b</div>
    <GuiElement
      v-if="creatingElement != null"
      :tagName="creatingElement.tagName"
      :displayText="creatingElement.text"
      :position="creatingElement.position"
    />
  </div>
</template>

<script>
import GuiElement from "./gui_elements/GuiElement.vue";
export default {
  name: "GuiDesign",
  components: { GuiElement },
  props: {},
  data: function() {
    return {
      creatingElement: null,
      listElementOriPos: [
        {
          tagName: "label",
          text: "label",
          position: {
            top: 10,
            left: 10,
            width: 100,
            height: 30
          }
        },
        {
          tagName: "div",
          text: "div",
          position: {
            top: 100,
            left: 10,
            width: 100,
            height: 30
          }
        }
      ]
    };
  },
  methods: {
    handleMouseDown(event) {
      event.preventDefault();
      console.log(event);
    },
    handleMouseMove(event) {
      console.log(event);
      console.log(this.getPosition(event));
    },
    handleMouseUp() {},
    handleWindowResize() {}
  },
  created() {
    document.addEventListener("mouseup", this.handleMouseUp, false);
    window.addEventListener("resize", this.handleWindowResize);
  },
  beforeDestroy() {
    document.removeEventListener("mouseup", this.handleMouseUp);
    window.removeEventListener("resize", this.handleWindowResize);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.body-container {
  display: flex;
  min-height: calc(100vh - 128px);
  background-color: #f9f4cb;
  position: relative;
}

.left-side {
  flex-basis: 250px;
  border: solid 2px red;
}

.right-side {
  flex-grow: 1;
  border: solid 2px blue;
}
</style>
