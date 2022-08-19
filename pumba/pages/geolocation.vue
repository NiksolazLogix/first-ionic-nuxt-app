<template>
    <ion-page>
    <ion-header>
      <ion-toolbar class="toolbar-md-primary">
        <ion-title>Ionic About Page</ion-title>
      </ion-toolbar>
    </ion-header>
    <div>
        <h1>Geolocation</h1>
        <p>Your location is:</p>
        <!-- <p>
        Latitude: <span v-if="loc">{{ loc.coords.latitude }}</span>
        </p>
        <p>
        Longitude: <span v-if="loc">{{ loc.coords.longitude }}</span>
        </p> -->
        <p>{{loc}}</p>
        <input type="button" @click="getCurrentPosition()" value="Get Current Location" />
    </div>
    <ion-content class="content">
      <ion-card>
        <ion-card-title>Welcome to Geolocation</ion-card-title>
        <ion-card-content>
          <h1>Hololo!</h1>
           <nuxt-link to="/">
            <ion-tab-button>
              <ion-label>Go to Home</ion-label>
            </ion-tab-button>
          </nuxt-link>
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

export default {
  name: "Geolocation",
  data() {
    return { 
        loc: null 
    }
  },
  methods: {
    async getCurrentPosition() { 

        const coordinates = await this.$CapacitorGeolocation.getCurrentPosition();

        this.loc = coordinates;
    }
  }
};
</script>