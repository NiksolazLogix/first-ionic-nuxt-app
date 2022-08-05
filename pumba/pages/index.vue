<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Ionic Nuxt Home Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <Logo/>
    <ion-content class="content">
      <ion-card>
        <ion-card-title>Welcome to Home</ion-card-title>
        <ion-card-content>
          <h1>Hololo!</h1>
          <nuxt-link to="/about">
            <ion-tab-button>
              <ion-label>Go to About</ion-label>
            </ion-tab-button>
          </nuxt-link>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>
</template>

<script>
  import Logo from '~/components/Logo.vue';
  export default {
    components: {
      Logo,
    },
  };
</script>
