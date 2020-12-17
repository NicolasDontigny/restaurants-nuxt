<template>
  <div class="button-container">
    <div class="number">{{ rating }}</div>
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    rating: String,
    text: String
  }
};
</script>

<style lang="less" scoped>
@completedDarkGreen: #004700;
@completedLightGreen: #4caf50;

.button-container {
  color: white;
  display: flex;
}

.number {
  background-color: @completedDarkGreen;
  padding: 8px 8px 8px 12px;
  border-radius: 20px 0 0 20px;
}

.text {
  background-color: @completedLightGreen;
  padding: 8px 12px 8px 8px;
  border-radius: 0 20px 20px 0;
}
</style>
