const options = {
  PORT: 8080,
  getMsg: function () {
    return `Server running on port ${this.PORT}`
  }
}

module.exports = { options }