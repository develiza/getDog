.<template>
  <div class="content">
    <div class="card">
      <h2>{{ dogInfo.name }}</h2>
      <img v-bind:src="dogInfo.src" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "DogCard",
  props: {
    dogInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
}
.card {
  /* height: 72vh; */
  border: 1px solid #d8d8d8;
  box-shadow: #d8d8d8 3px 2px 8px 2px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25em;
  color: #333333;
}
.card h2 {
  color: #987284;
  margin-top: 1em;
  margin-bottom: 1em;
}
.card img {
  width: 100%;
}
</style>
