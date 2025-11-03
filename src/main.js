import { createApp } from 'vue'
import App from './App.vue'

import FlippingCard from './components/FlippingCard.vue'
import CardFraud from './components/examples/CardFraud.vue'
import CardPinUp from './components/examples/CardPinUp.vue'

const app = createApp(App)
app.component('FlippingCard', FlippingCard)
app.component('CardPinUp', CardPinUp)
app.component('CardFraud', CardFraud)
app.mount('#app')
