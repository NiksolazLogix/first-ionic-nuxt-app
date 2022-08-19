import { Geolocation } from '@capacitor/geolocation';
import Vue from 'vue';


export default function ({ app }, inject) {
    inject('CapacitorGeolocation', Geolocation);
    Vue.use(Geolocation);
}