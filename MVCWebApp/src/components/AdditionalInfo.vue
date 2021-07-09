<template>
  <section class="section">
    <div class="header">
      <h3 class="title">Additional Informations</h3>
      <p class="sub-title">Need something else? We will make it for you!</p>
    </div>
    <div class="body">
      <div class="row">
        <div class="col-12">
          <div class="form-group">
            <label for="additionalinfo">Extra notes</label>
            <textarea
                class="form-control"
                id="additionalinfo"
                type="text"
                placeholder="Need a specific delivery note? Let's say..."
                v-model="additionalInfo"
                rows="5">
            </textarea>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'AdditionalInfo',

  components: {
  },
  data() {
    return {
      additionalInfo: ''
    }
  },

  watch: {
    additionalInfo: {
      handler(newVal){
        this.$store.commit('updateAdditionalInfo', newVal)
      },
      immediate: true,
    }
  },
}
</script>