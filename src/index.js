const VueAlive = {};

VueAlive.install = function (Vue, options) {
  Vue.component('switch-alive', {
    abstract: true,
    data() {
      return {
        aliving: [],
      }
    },
    render(h) {
      return h(
        'keep-alive',
        {
          props: {
            include: this.aliving,
          }
        },
        this.$slots.default
      );
    }
  })
}

window.VueAlive = VueAlive;
