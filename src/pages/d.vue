<template>
  <Pyroxene>
    <template #bar>
      <div class="bar-links">
        <a href="/">link</a>
        <a href="/">link</a>
        <a href="/">link</a>
        <a href="/">link</a>
      </div>
    </template>
    <template #nav-title>
      Pyroxene
    </template>
    <template #nav-links>
      <a href="/">link</a>
      <a href="/">link</a>
      <a href="/">link</a>
    </template>
    <template #sections>
      <div>
        <h2>Title A</h2>
        <p>Some text</p>
      </div>
      <div>
        <h2>Title B</h2>
        <p>Some text</p>
      </div>
      <div>
        <h2>Title C</h2>
        <p>Some text</p>
      </div>
    </template>
    <template #copyright>
      2022 Substrat
    </template>
  </Pyroxene>
</template>

<style scoped>
.bar-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>