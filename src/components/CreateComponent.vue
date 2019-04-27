// src/components/CreateComponent.vue

<template>
  <div>
    <h1>Create a team</h1>
    <form @submit.prevent="addTeam">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Team Number</label>
            <input type="number" class="form-control" v-model="post.title">
          </div>
        </div>
      </div>
      <div class="form-group">
        <button class="btn btn-primary">Create</button>
      </div>
    </form>
  </div>
</template>

<script>
  module.exports = {
    data(){
      return {
        post:{}
      }
    },
    methods: {
      addTeam(){
      console.log(this.team)
    }
  }
}
</script>
