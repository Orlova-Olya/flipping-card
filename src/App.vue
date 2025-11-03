<template>
  <div class="top-panel">
    <label class="top-panel__label">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 16 16"
        fill="none"
        class="top-panel__icon-hearts"
      >
        <path
          d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
        />
      </svg>
      <input v-model="mark" value="hearts" type="radio" />
    </label>
    <label class="top-panel__label">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="32"
        width="32"
        viewBox="0 0 512 512"
        class="top-panel__icon-spades"
      >
        <path
          d="M265.025,6.388c-3.172-3.554-2.621-3.226-2.621-3.226C260.781,1.157,258.447,0,255.995,0   c-2.451,0-4.776,1.157-6.399,3.162c0,0,0.563-0.328-2.621,3.226c-78.376,88.425-222.85,138.511-222.85,265.794   c0,6.537,0.287,13.35,0.881,20.438c6.313,74.726,60.485,117.118,119.017,117.118c33.224,0,64.793-22.146,85.899-54.255   c-9.901,62.076-22.602,130.965-26.168,139.518c-6.081,14.569,1.21,17,4.85,17h94.791c3.64,0,10.919-2.431,4.849-17   c-3.555-8.553-16.278-77.442-26.156-139.518c21.095,32.109,52.663,54.255,85.888,54.255c58.543,0,112.703-42.392,119.028-117.118   c0.593-7.088,0.869-13.901,0.869-20.438C487.875,144.899,343.401,94.813,265.025,6.388z"
        />
      </svg>
      <input v-model="mark" value="spades" type="radio" />
    </label>
  </div>
  <CardPinUp v-if="mark === 'hearts'" />
  <CardFraud v-else />
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    mark: 'hearts'
  })
}
</script>

<style lang="scss">
html {
  height: 100%;
}
body {
  margin: 0;
  height: 100%;
}
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: rgb(0, 73, 49);
  padding: 80px 20px;
  box-sizing: border-box;
}

.top-panel {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: bisque;
  padding: 4px 20px;
  display: flex;
  gap: 16px;
  border-radius: 0 0 16px 16px;

  &__icon-hearts {
    fill: rgb(255, 55, 55);
  }
  &__icon-spades {
    fill: rgb(25, 25, 25);
  }

  &__label {
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;
  }
}
</style>
