.<template>
  <div class="content">
    <div class="card">
      <h2>{{ dogInfo.name }}</h2>
      <img v-bind:src="dogInfo.src" alt="" />
      <button type="button">New dog</button>
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

.card button {
  margin-top: 2em;
  margin-bottom: 2em;
  background-color: inherit;
  padding: 0.5em;
  border: 1px solid #987284;
  border-radius: 5px;
  color: #987284;
  font-size: 16px;
  transition: 0.8s;
}

.card button:hover {
  opacity: 0.6;
  background-color: #987284;
  color: #ffffff;
  transition: 0.2s;
}
</style>
