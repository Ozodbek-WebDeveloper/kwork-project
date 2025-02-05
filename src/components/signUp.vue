<template>
    <div>
  
      <v-card
        class="mx-auto mt-5 pa-12 pb-8"
        elevation="8"
        max-width="448"
        rounded="lg"
      >
      <div class="text-subtitle-1 text-medium-emphasis">Username</div>
  
        <v-text-field
          density="compact"
          placeholder="username"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>
  
        <v-text-field
          density="compact"
          placeholder="Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        ></v-text-field>
        
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
        </div>
  
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Confirum Password
        </div>
        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Confirum Password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        ></v-text-field>
  
        <v-card
          class="mb-12"
          color="surface-variant"
          variant="tonal"
        >
          
        </v-card>
  
        <v-btn
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          block
        >
        Sign up 
        </v-btn>
        
        <RouterLink :to="{name:'login'}" >

        <v-card-text class="text-center">
          <a
            class="text-blue text-decoration-none"
            href="#"
            rel="noopener noreferrer"
            target="_blank"

          > 
          Log In
            <v-icon icon="mdi-chevron-right"></v-icon>
          </a>
        </v-card-text>
    </RouterLink>
      </v-card>
    </div>
  </template>
  <script>
    export default {
      data: () => ({
        visible: false,
      }),
    }
  </script>