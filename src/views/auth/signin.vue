<template>
  <v-layout
    fill-height
    justify-center
    align-center
    class="primary"
    style="background:url('https://firebasestorage.googleapis.com/v0/b/rajashanmugam-jm.appspot.com/o/assets%2F3224662.jpg?alt=media&token=2b510bbc-c660-4b4e-a7ba-1cb95e51a5f6') no-repeat center center fixed;background-size: cover;"
  >
    <!-- TODO: Form Validation to bo done. -->
    <v-card width="350" class="pa-3 ma-3 box-shadow">
      <v-card-title class="mb-3">
        Sign In
        <v-spacer></v-spacer>
        <img
          height="32"
          src="https://firebasestorage.googleapis.com/v0/b/aaludraone.appspot.com/o/Assets%2FA_Logo.svg?alt=media&token=fb4ccc36-5c2f-4b22-9e7b-e520bf00819d"
          alt
          srcset
        />
      </v-card-title>
      <v-card-text>
        <v-form @submit.prevent="signIn" v-model="form.signin.valid">
          <v-text-field
            v-model="form.signin.model.email"
            :rules="rules.required"
            label="Email"
            type="email"
            outlined
          ></v-text-field>
          <v-text-field
            :rules="rules.required"
            v-model="form.signin.model.password"
            label="Password"
            type="password"
            outlined
          ></v-text-field>
          <v-btn
            :disabled="!form.signin.valid || form.signin.loading"
            :loading="form.signin.loading"
            class="primary white--text fixed_signin_btn box-shadow"
            x-large
            type="submit"
            icon
          >
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-layout>
</template>
<script lang="ts" src="./signin.ts">
</script>
<style >
.fixed_signin_btn {
  position: absolute;
  bottom: -25px;
  right: 150px;
}
</style>