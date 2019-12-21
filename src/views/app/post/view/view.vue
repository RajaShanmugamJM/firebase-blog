<template>
  <div class="h-100">
    <v-row v-if="!loading.gettingposts" class="grey lighten-3">
      <v-col cols="12" class="pa-0">
        <v-card id="banner_pos" tile height="500" class="primary darken-3 box-shadow">
          <div class="slim_body text-center">
            <h4
              style="position: relative;top: 87px;font-size: 56px;color:white;font-weight: bold;"
            >{{$route.params.title}}</h4>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div class="slim_body" style="margin-top: -200px !important;">
          <v-card class="box-shadow pa-6">
            <div class="blog_detail" v-html="post.content"></div>
          </v-card>
        </div>
      </v-col>
    </v-row>
    <v-row v-else align="center" justify="center" class="h-100">
      <v-col cols="12" class="text-center">
        <v-progress-circular indeterminate color="primary"></v-progress-circular>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" src="./view.ts">
</script>