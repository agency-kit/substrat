<script setup>
import SubSection from './components/atoms/SubSection.vue';

</script>

<template>
  <div>
    <Navbar>
      <template #title>
        <h1>SUBSTRAT</h1>
      </template>
      <template #links>
        <a href="/">Link A</a>
        <a href="/">Link B</a>
      </template>
    </Navbar>
    <SubSection class="border border-solid border-black">
      <h2>This is the first title</h2>
      <hr>
      <p>A small text</p>
      <hr>
      <p>another small text</p>
    </SubSection>
    <SubSectionList>
      <template>
        <div>
        <h2>Title</h2>
        <hr>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis est maiores sint, dolore et quae aliquam quibusdam necessitatibus
           id ea inventore nam accusantium asperiores! Corporis, similique!</p>
        </div>
        <div>
          <h2>Title B</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis est maiores sint, dolore et quae aliquam quibusdam necessitatibus
            id ea inventore nam accusantium asperiores! Corporis, similique!</p>
        </div>
        <div>
          <h2>Title C</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis est maiores sint, dolore et quae aliquam quibusdam necessitatibus
            id ea inventore nam accusantium asperiores! Corporis, similique!</p>
        </div>
      </template>
    </SubSectionList>
    <SubSection>
      <Grid>
        <template>
          <div class="h-10 p-3 text-center border border-solid border-black">
            <h3>Block 1</h3>
          </div>
          <div class="h-10 p-3 text-center border border-solid border-black">
            <h3>Block 2</h3>
          </div>
          <div class="h-10 p-3 text-center border border-solid border-black">
            <h3>Block 3</h3>
          </div>
          <div class="h-10 p-3 text-center border border-solid border-black">
            <h3>Block 4</h3>
          </div>
        </template>
      </Grid>
    </SubSection>
  </div>
</template>

<style scoped>

</style>
