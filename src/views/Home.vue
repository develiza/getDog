<template>
  <div class="home">
    <h1>View a random dog</h1>
    <button type="button" v-on:click="getNewDog">New dog</button>
    <DogCard :dogInfo="dogInfo" :key="dogInfo.id" />
  </div>
</template>

<script>
// @ is an alias to /src
import DogCard from "@/components/DogCard.vue";
import requests from "@/apis/requests.js";

export default {
  name: "Home",
  components: {
    DogCard,
  },
  data() {
    return {
      dogInfo: {
        id: 1,
        name: "",
        src: ""
      },
      dogArray: []
    };
  },
  methods: {
    getNewDog() {
      requests
        .getRandomDog()
        .then(response => {
          const src = response.data.message;
          this.dogInfo.src = src;
          const regexDogBreed = /\/(?!breeds)(\w+-\w+|\w+)\//;
          const breedData = response.data.message.match(regexDogBreed);
          const breed = breedData[1];
          const breedInfo = breed.charAt(0).toUpperCase() + breed.slice(1);
          this.dogInfo.name = breedInfo;
          this.dogArray.push(src);
        })
        .catch(error => console.log(error));
    },
  },
  created() {
    this.getNewDog();
  },
};
</script>
<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.home button {
  margin-top: 2em;
  margin-bottom: 2em;
  background-color: inherit;
  padding: 0.5em;
  border: 1px solid #987284 !important;
  border-radius: 5px;
  color: #987284;
  font-size: 16px;
  transition: 0.8s;
  outline: none;
}

.home button:hover {
  border: 1px solid #987284;
  opacity: 0.6;
  background-color: #987284;
  color: #ffffff;
  transition: 0.2s;
}
.home button:focus {
  border: 1px solid #987284;
  border-radius: 5px;
}
.home button:enabled {
  border: 1px solid #987284 !important;
  border-radius: 5px;
}
</style>
