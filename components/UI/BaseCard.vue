<template>
  <div class="card-container">
    <header v-if="$slots.header">
      <slot name="header"></slot>
    </header>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <footer v-if="$slots.footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style lang="less" scoped>
@mainHeaderColor: #1565c0;
@cardHeaderColor: #4f6bb9;
@darkOrange: #f57700;
@lightOrange: #fcd6af;

.card-container {
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
}

header {
  background-color: @cardHeaderColor;
  padding: 12px;
  border-radius: 5px 5px 0 0;
}

.content {
  padding: 12px;
}

footer {
  padding: 8px;
  border-radius: 0 0 5px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
