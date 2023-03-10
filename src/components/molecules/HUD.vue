<template>
  <div class="heads up display">
    <ul class="top row">
      <GridEntity>
        <slot name="top"/>
      </GridEntity>
    </ul>
    <ul class="right column">
      <GridEntity>
        <slot name="right"/>
      </GridEntity>
    </ul>
    <ul class="bottom row">
      <GridEntity>
        <slot name="bottom"/>
      </GridEntity>
    </ul>
    <ul class="left column">
      <GridEntity>
        <slot name="left"/>
      </GridEntity>
    </ul>
  </div>
</template>

<style scoped>
.heads.up.display {
  position: fixed;
  inset: 0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  z-index: var(--layer-important);
  pointer-events: none;
}

.heads.up.display:deep(li) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 0;
  pointer-events: auto;
}

.row {
  grid-column: 2/ 10;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 0;
}

.top.row {
  grid-row: 1;
}

.bottom.row {
  grid-row: 10;
}

.column {
  grid-row: 2 / 10;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
  padding: 0;
}

.left.column {
 grid-column: 1;
}

.right.column {
 grid-column: 10;
}
</style>