<template>
  <div class="h-100">
    <v-btn small to="/new-post" v-if="$store.state.auth.signedin" fab fixed bottom right>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
    <v-row v-if="!loading.gettingposts">
      <v-col cols="12">
        <v-card
          tile
          height="350"
          style="background:linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(100, 100, 100, 0.7)), url('https://liebling.eduardogomez.io/content/images/size/w2000/2019/04/photo-1501023913431-7b4b09a5929b.jpg')"
          class="pa-3 box-shadow"
        >
          <v-toolbar dense flat class="transparent">
            <v-spacer></v-spacer>
            <v-toolbar-title class="white--text font-weight-bold">
              Realm
            </v-toolbar-title>
          </v-toolbar>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          class="pa-2 slim_body box-shadow"
          style="margin-top: -200px !important;min-height:250px"
        >
          <v-carousel
            height="350"
            :show-arrows="false"
            hide-delimiter-background
            delimiter-icon="mdi-minus"
          >
            <v-carousel-item v-for="(item,index) in post.recent" :key="index">
              <v-sheet
                height="100%"
                tile
                class="pa-10"
                @click="$router.push(`/post/${item.id}/${item.title}`)"
                style="cursor:pointer"
                :style="{'background':`linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(100, 100, 100, 0.7)), url(${item.bannerimage})`,'background-size':'cover'}"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  align-content="space-around"
                  justify="center"
                >
                  <v-col cols="12">
                    <h4 class="display-3">{{item.title}}</h4>
                  </v-col>
                  <v-col cols="12">
                    <p class="body-1 grey--text text--lighten-1">{{item.description}}</p>
                  </v-col>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-row class="slim_body">
          <v-col v-for="i in post.old" :key="i" cols="12" md="4" class="pa-2">
            <v-card
              :to="`/post/${i.id}/${i.title}`"
              height="350"
              flat
              hover
              class="blue-grey lighten-5"
            >
              <v-img
                :src="`${i.bannerimage || 'https://firebasestorage.googleapis.com/v0/b/rajashanmugam-jm.appspot.com/o/post_banner%2F1576382889094?alt=media&token=5a6f19c0-eef6-45ce-a340-7537f6be110a'}`"
                height="175px"
              ></v-img>
              <v-card-title>{{i.title}}</v-card-title>
              <v-card-subtitle>{{i.description}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <v-row v-else align="center" justify="center" class="h-100">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" src="./Home.ts">
</script>
