<template>
  <div style="margin: 20px">
    <v-alert color="grey" style="margin-left:100px">Rent selected movies: {{selected.map(el=>el.title).join(',')}}</v-alert>
    <v-data-table
      v-model="selected"
      :headers="headers"
      :items="movies"
      item-key="title"
      :search="search"
      show-select
      items-per-page="6"
      class="elevation-1"
      :footer-props="{ itemsPerPageOptions: [6, 12, 18] }"
    >
    <template v-slot:top>
        <v-text-field
          v-model="search"
          label="Search"
          class="mx-4"
        ></v-text-field>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',

  components: {},
  data() {
    return {
      search:'',
      movies: [],
      selected: [],
      headers: [
        {
          text: 'Title',
          align: 'start',
          value: 'title',
          class: 'blue-grey lighten-5',
        },
        { text: 'Director', value: 'director', class: 'blue-grey lighten-5' },
        { text: 'Genre', value: 'main_genre', class: 'blue-grey lighten-5' },
        { text: 'Year', value: 'year', width: 100, class: 'blue-grey lighten-5' },
        { text: 'Rated', value: 'rated', width: 100, class: 'blue-grey lighten-5' },
        { text: 'Plot', value: 'plot' },
      ],
    };
  },
  created() {
    this.getMovies();
  },
  methods: {
    async getMovies() {
      const a = await axios({
        method: 'GET',
        url: 'http://localhost:3000/movies',
      });
      this.movies = a.data.data;
    },
  },
};
</script>
