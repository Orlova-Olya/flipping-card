<template>
  <FlippingCard v-model:flipped="flipped" :rotateDuration="rotateDuration" :disabled="disabled">
    <template v-slot:front>
      <div class="card-fraud__front-side"></div>
    </template>
    <template v-slot:back>
      <div class="card-fraud__back-side">
        <template v-if="!fraud">
          <div class="card-fraud__back-side-angle">2</div>
          <div class="card-fraud__back-side-angle">2</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            viewBox="0 0 512 512"
            class="card-fraud__little-mark"
          >
            <path
              d="M265.025,6.388c-3.172-3.554-2.621-3.226-2.621-3.226C260.781,1.157,258.447,0,255.995,0   c-2.451,0-4.776,1.157-6.399,3.162c0,0,0.563-0.328-2.621,3.226c-78.376,88.425-222.85,138.511-222.85,265.794   c0,6.537,0.287,13.35,0.881,20.438c6.313,74.726,60.485,117.118,119.017,117.118c33.224,0,64.793-22.146,85.899-54.255   c-9.901,62.076-22.602,130.965-26.168,139.518c-6.081,14.569,1.21,17,4.85,17h94.791c3.64,0,10.919-2.431,4.849-17   c-3.555-8.553-16.278-77.442-26.156-139.518c21.095,32.109,52.663,54.255,85.888,54.255c58.543,0,112.703-42.392,119.028-117.118   c0.593-7.088,0.869-13.901,0.869-20.438C487.875,144.899,343.401,94.813,265.025,6.388z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            width="48"
            viewBox="0 0 512 512"
            class="card-fraud__little-mark"
          >
            <path
              d="M265.025,6.388c-3.172-3.554-2.621-3.226-2.621-3.226C260.781,1.157,258.447,0,255.995,0   c-2.451,0-4.776,1.157-6.399,3.162c0,0,0.563-0.328-2.621,3.226c-78.376,88.425-222.85,138.511-222.85,265.794   c0,6.537,0.287,13.35,0.881,20.438c6.313,74.726,60.485,117.118,119.017,117.118c33.224,0,64.793-22.146,85.899-54.255   c-9.901,62.076-22.602,130.965-26.168,139.518c-6.081,14.569,1.21,17,4.85,17h94.791c3.64,0,10.919-2.431,4.849-17   c-3.555-8.553-16.278-77.442-26.156-139.518c21.095,32.109,52.663,54.255,85.888,54.255c58.543,0,112.703-42.392,119.028-117.118   c0.593-7.088,0.869-13.901,0.869-20.438C487.875,144.899,343.401,94.813,265.025,6.388z"
            />
          </svg>
        </template>
        <template v-else>
          <div class="card-fraud__back-side-angle">T</div>
          <div class="card-fraud__back-side-angle">T</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="128"
            width="128"
            viewBox="0 0 512 512"
            class="card-fraud__big-mark"
          >
            <path
              d="M265.025,6.388c-3.172-3.554-2.621-3.226-2.621-3.226C260.781,1.157,258.447,0,255.995,0   c-2.451,0-4.776,1.157-6.399,3.162c0,0,0.563-0.328-2.621,3.226c-78.376,88.425-222.85,138.511-222.85,265.794   c0,6.537,0.287,13.35,0.881,20.438c6.313,74.726,60.485,117.118,119.017,117.118c33.224,0,64.793-22.146,85.899-54.255   c-9.901,62.076-22.602,130.965-26.168,139.518c-6.081,14.569,1.21,17,4.85,17h94.791c3.64,0,10.919-2.431,4.849-17   c-3.555-8.553-16.278-77.442-26.156-139.518c21.095,32.109,52.663,54.255,85.888,54.255c58.543,0,112.703-42.392,119.028-117.118   c0.593-7.088,0.869-13.901,0.869-20.438C487.875,144.899,343.401,94.813,265.025,6.388z"
            />
          </svg>
        </template>
      </div>
    </template>
  </FlippingCard>
</template>

<script>
export default {
  name: 'CardFraud',

  data: () => ({
    flipped: false,
    fraud: false,
    rotateDuration: 1000,
    disabled: false
  }),

  watch: {
    flipped() {
      if (!this.flipped) {
        // Когда карту переворачивают с лицевой стороны на "рубашку" disable'им её
        this.disabled = true
        setTimeout(() => {
          // И когда карта наполовину перевёрнута (прошла половина времени анимации переворота),
          // и не видно "лицо", подменяем его
          this.fraud = !this.fraud
          this.disabled = false
        }, this.rotateDuration / 2)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.card-fraud {
  &__front-side {
    background: repeating-linear-gradient(135deg, rgb(100, 150, 200) 0 3px, rgb(255, 246, 234) 3px 16px);
  }

  &__back-side {
    background: rgb(255, 247, 239);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  &__back-side-angle {
    position: absolute;
    top: 12px;
    left: 14px;
    font-size: 32px;
    font-weight: bold;

    color: rgb(25, 25, 25);

    & ~ & {
      top: unset;
      left: unset;
      bottom: 12px;
      right: 14px;
      rotate: 180deg;
    }
  }
  &__little-mark {
    fill: rgb(25, 25, 25);

    & ~ & {
      rotate: 180deg;
    }
  }
  &__big-mark {
    fill: rgb(25, 25, 25);
  }
}
</style>
