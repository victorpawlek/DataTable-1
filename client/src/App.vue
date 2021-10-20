<template>
  <v-app>
    <v-app-bar
      app
      color="grey"
      dark
    >
        <v-img
          alt="Logo"
          class="shrink mt-10"
          contain
          src="logo.png"
          width="130"
        />
<v-toolbar-title>Movies</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        href="https://www.imdb.com/movies-in-theaters/"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
