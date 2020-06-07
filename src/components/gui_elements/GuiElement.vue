<script>
export default {
  name: "GuiElement",
  props: ["tagName", "displayText", "position"],
  render: function(createElement) {
    return createElement(
      this.tagName,
      {
        attrs: { class: "element-original" },
        style: {
          top: this.position.top + "px",
          left: this.position.left + "px",
          width: this.position.width + "px",
          height: this.position.height + "px"
        }
      },
      this.displayText
    );
  }
};
</script>

<style  scoped>
.element-original {
  position: absolute;
}
</style>