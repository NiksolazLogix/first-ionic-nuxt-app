import { Plugins } from '@capacitor/core';
import Vue from 'vue';
const { Geolocation } = Plugins;

export default function ({ app }, inject) {
    inject('CapacitorGeolocation', Geolocation);
    Vue.use(Geolocation);
}