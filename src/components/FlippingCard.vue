<template>
  <div
    class="flipping-card"
    :class="{ disabled }"
    :style="{ '--rotate-duration': rotateDuration + 'ms' }"
    @click="handleClick"
  >
    <div class="flipping-card__side" :style="{ transform: flippedFinal ? 'rotateY(180deg)' : 'unset' }">
      <slot name="front"></slot>
    </div>
    <div class="flipping-card__side" :style="{ transform: flippedFinal ? 'unset' : 'rotateY(180deg)' }">
      <slot name="back"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FlippingCard',
  props: {
    flipped: {
      type: Boolean,
      default: null
    },
    rotateDuration: {
      type: Number,
      default: 500
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },

  data: () => ({
    flippedData: false
  }),

  computed: {
    flippedFinal() {
      if (this.flipped != null) {
        return this.flipped
      }
      return this.flippedData
    }
  },

  methods: {
    handleClick() {
      if (this.disabled) return

      if (this.flipped != null) {
        this.$emit('update:flipped', !this.flipped)
      } else {
        this.flippedData = !this.flippedData
      }
    }
  }
}
</script>

<style scoped lang="scss">
.flipping-card {
  position: relative;

  width: 280px;
  height: 400px;

  transition-duration: 200ms;

  border-radius: var(--card-border-radius);

  --card-border-radius: 24px;
  transform-style: preserve-3d;
  -webkit-tap-highlight-color: transparent;

  &:not(.disabled) {
    cursor: pointer;

    &:hover {
      transform: rotateY(15deg) rotateZ(-1deg);
    }
  }

  &__side {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    overflow: hidden;

    width: 100%;
    height: 100%;

    transition-duration: var(--rotate-duration);

    border-radius: var(--card-border-radius);
    box-shadow: 4px 4px 8px 0 black;

    transform-style: preserve-3d;
    backface-visibility: hidden;

    & > * {
      width: 100%;
      height: 100%;
    }
  }
}

</style>
