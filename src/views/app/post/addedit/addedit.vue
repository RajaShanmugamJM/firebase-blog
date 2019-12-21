<template>
  <div>
    <v-dialog v-model="model.addpopup" max-width="350">
      <v-card>
        <v-card-title class="headline">
          Post Meta
          <v-spacer></v-spacer>
          <v-btn icon small @click="model.addpopup = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <v-card-text>
          <v-form>
            <v-text-field v-model="model.meta.title" label="Title"></v-text-field>
            <v-text-field v-model="model.meta.description" label="Description"></v-text-field>
            <v-combobox v-model="model.meta.tags" :items="[]" label="Tags" multiple chips></v-combobox>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="primary--text" text @click="savePost">POST</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-btn @click="model.addpopup = true" class="primary darken-3" fixed bottom right fab>
      <v-icon>mdi-gamepad-down</v-icon>
    </v-btn>
    <v-row row wrap>
      <v-col cols="12" class="pa-0">
        <v-card id="banner_pos" tile height="500" class="primary darken-3 box-shadow">
          <div class="slim_body text-center">
            <textarea
              style="position: relative;top: 87px;font-size: 56px;color:white;font-weight: bold;"
              type="text"
              maxlength="43"
              name="title"
              id="post_title"
            />
          </div>
          <input
            type="file"
            id="banner"
            name="avatar"
            accept="image/png, image/jpeg"
            style="display:none"
          />
          <v-btn
            @click="pickBanner"
            icon
            class="white"
            style="position: absolute;top: 15px;right: 30px;"
          >
            <v-icon small>mdi-image</v-icon>
          </v-btn>
        </v-card>
      </v-col>
      <v-col cols="12">
        <div class="slim_body" style="margin-top: -200px !important;">
          <v-card class="box-shadow">
            <vue-editor v-model="model.editor" />
          </v-card>
        </div>
      </v-col>
    </v-row>
  </div>
</template>
<script lang="ts" src="./addedit.ts">
</script>