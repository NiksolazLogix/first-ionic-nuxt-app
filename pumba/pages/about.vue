<template>
  <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Ionic About Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <Logo/>
    <ion-content class="content">
      <ion-card>
        <ion-card-title>Welcome to About</ion-card-title>
        <ion-card-content>
          <h1>Hololo!</h1>
           <nuxt-link to="/">
            <ion-tab-button>
              <ion-label>Go to Home</ion-label>
            </ion-tab-button>
          </nuxt-link>
          <nuxt-link to="/geolocation">
            <ion-tab-button>
              <ion-label>Go to Geolocation</ion-label>
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
      Logo
    },
  };
</script>
