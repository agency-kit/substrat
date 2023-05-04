
<template>
  <div class="app">
    <TestNav/>
    <SubSection class="gradient">
      <h2>This is the first title</h2>
      <p>A small text</p>
      <Rule content="👽" double transparent></Rule>
      <p>another small text</p>
    </SubSection>
    <SubSection>
      <div>
        <Block intrinsic>
          <h2>This is the first title</h2>
          <p>A small text</p>
          <Rule content="👽" double transparent></Rule>
          <p>another small text</p>
          <Rule content="☄️" double transparent></Rule>
        </Block>
      </div>  
    </SubSection>
    <SubSection>
      <Center>
        <Grid>
          <template>
            <Block class="hover">
              <h3>Fast DX</h3>
              <hr>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod quibusdam voluptate laboriosam, porro voluptatum molestias nihil optio fugit reiciendis quasi id corporis maxime aspernatur, voluptas eligendi eveniet dolorem quisquam.</p>
            </Block>
            <Block class="hover">
              <h3>SSG ready</h3>
              <hr>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod quibusdam voluptate laboriosam, porro voluptatum molestias nihil optio fugit reiciendis quasi id corporis maxime aspernatur, voluptas eligendi eveniet dolorem quisquam.</p>
            </Block>
            <Block class="hover">
              <h3>Foundation for apps</h3>
              <hr>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod quibusdam voluptate laboriosam, porro voluptatum molestias nihil optio fugit reiciendis quasi id corporis maxime aspernatur, voluptas eligendi eveniet dolorem quisquam.</p>
            </Block>
            <Block class="hover">
              <h3>Notion Api</h3>
              <hr>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto quod quibusdam voluptate laboriosam, porro voluptatum molestias nihil optio fugit reiciendis quasi id corporis maxime aspernatur, voluptas eligendi eveniet dolorem quisquam.</p>
            </Block>
          </template>
        </Grid>
      </Center>
    </SubSection>
    <Footer>
    <template #left>
      <span>use substrat</span>
    </template>
    <template #copyright>
      2022 Jacob
    </template>
    <template #right>
      <span>get substrat</span>
    </template>
  </Footer>
  </div>
</template>

<style scoped>
.app:deep(.sub-section:nth-child(3)) {
  background-color: var(--surface-2);
  color: var(--text-1);
}

.bar-example {
  width: 100%;
}

.app:deep(.sidebar .bar) {
  background-color: var(--surface-2);
  padding: var(--size-2);
}

.gradient {
  --noise-filter-x: contrast(320%) brightness(100%);
  background-image: conic-gradient(at var(--move) -20%,#34838085, #0fd1a100), var(--noise-1);
  filter: var(--noise-filter-x);
  background-size: cover;
  animation: moog-d1d3d0d7 12s infinite alternate var(--ease-1);
}

@keyframes moog {
  0% {
      --move: 0%;
  }
  100% {
      --move: 500%;
  }
}
</style>
