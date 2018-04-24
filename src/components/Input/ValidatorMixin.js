export default {
  props: {
    hideValidationErrors: {
      type: Boolean,
      default: false
    },
    validationRules: [String, Array],
    validationMessages: Object
  },
  data: () => ({
    validationError: '',
    valid: true
  }),
  methods: {
    async validate () {
      this.valid = await this.$validator.validate()

      if (!this.valid) {
        this.validationError = this.$validator.errors.items[0].msg
      }

      return {
        valid: this.valid,
        name: this.name,
        validationError: this.validationError
      }
    }
  }
}
