<template>
  <Sunstone>
    <template #hero>
      <SubSection class="show">
        welcome to Sunstone.
        <span>home of the fixed hero.</span>
      </SubSection>
    </template>
    <template #nav>
      <div>
        Sunstone
      </div>
    </template>
    <template #default>
      <SubSection class="bg-blue">
        <h1>yeeeess</h1>
      </SubSection>
      <SubSection>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure similique laudantium autem. Provident obcaecati, odit ut magni facere in corporis molestiae facilis deleniti repudiandae aperiam similique nisi culpa dicta.
        </p>
        floatiner
      </SubSection>
    </template>
    <template #footer>
      <Footer>
        <template #copyright>
          2022 Substrat
        </template>
      </Footer>
    </template>
  </Sunstone>
</template>

<style scoped>
.show {
 background-image: url("https://images.unsplash.com/photo-1547235001-d703406d3f17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80");
}
</style>