<template>
  <FlippingCard>
    <template v-slot:front>
      <div class="card-pin-up__front-side"></div>
    </template>
    <template v-slot:back>
      <div class="card-pin-up__back-side">
        <div class="card-pin-up__back-side-angle">
          <span>5</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
            />
          </svg>
        </div>
        <div class="card-pin-up__back-side-angle">
          <span>5</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16" fill="none">
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
            />
          </svg>
        </div>
        <img alt="pin up girl" src="pin-up-girl.png" class="card-pin-up__back-side-image" />
      </div>
    </template>
  </FlippingCard>
</template>

<script>
export default {
  name: 'CardPinUp'
}
</script>

<style lang="scss" scoped>
.card-pin-up {
  &__front-side {
    background: radial-gradient(
        circle at 100% 70%,
        transparent 160px,
        rgba(86, 47, 0, 0.524) 160px,
        rgba(86, 47, 0, 0.743) 166px 172px,
        rgba(86, 47, 0, 0.524) 180px,
        transparent 180px
      ),
      repeating-linear-gradient(135deg, rgb(255, 115, 115) 0 4px, rgb(255, 246, 234) 4px 20px);
  }
  &__back-side {
    background: rgb(255, 247, 239);
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__back-side-angle {
    position: absolute;
    top: 8px;
    left: 10px;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      color: rgb(255, 55, 55);
      fill: rgb(255, 55, 55);
    }

    & ~ & {
      top: unset;
      left: unset;
      bottom: 8px;
      right: 10px;
      rotate: 180deg;
    }
  }
  &__back-side-image {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
}
</style>
