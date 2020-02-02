export const loading = {
  methods: {
    setLoading: function (val) {
      if (val) {
        this.$emit('startLoading');
      } else {
        this.$emit('cancelLoading');
      }
    },
  }
}