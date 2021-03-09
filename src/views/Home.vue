<template>
  <div class="home">
    <h1>View a random dog</h1>
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
    DogCard
  },
  data() {
    return {
      dogInfo: {
        id: 1,
        name: "Hupp",
        src: "https://images.dog.ceo/breeds/saluki/n02091831_2344.jpg"
      }
    };
  },
  created() {
    requests
      .getRandomDog()
      .then(response => {
        console.log(response.data.message);
        this.dogInfo.src = response.data.message;
        const regexDogBreed = /\/(?!breeds)(\w+-\w+|\w+)\//;
        const breedData = response.data.message.match(regexDogBreed);
        const breed = breedData[1];
        this.dogInfo.name= breed.charAt(0).toUpperCase() + breed.slice(1);
      })
      .catch(error => console.log(error));
  }
};
</script>
