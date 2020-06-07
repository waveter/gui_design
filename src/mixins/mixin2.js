
//- build your mixin
const mixin = {
    methods: {
        getPosition2(event) {
            const scrollTop =
                window.pageYOffset || document.documentElement.scrollTop;
            return {
                x: event.x - this.$refs.drawContainer.offsetLeft,
                y: event.y - this.$refs.drawContainer.offsetTop + scrollTop
            };
        },
        checkPointInRect2(point, rect) {
            if (point.x < rect.x || point.x > rect.x + rect.w) {
                return false;
            }
            if (point.y < rect.y || point.y > rect.y + rect.h) {
                return false;
            }
            return true;
        }
    }
}

//- export it as a plugin
export default {
    install(Vue) {
        Vue.mixin(mixin)
    }
}