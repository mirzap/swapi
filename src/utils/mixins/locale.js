const locale = {
  methods: {
    locale (str) {
      console.log(str)
      this.$locale({i: str})
    }
  }
}

export default locale
