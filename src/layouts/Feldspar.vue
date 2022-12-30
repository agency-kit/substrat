<template>
  <div class="feldspar">
    <SubSection>
      <slot name="hero"/>
    </SubSection>
    <Navbar sticky>
      <template #title>
        <slot name="nav-title"/>
      </template>
      <template #links>
        <slot name="nav-links"/>
      </template>
    </Navbar>
    <SubSectionList>
      <slot name="sections"/>
    </SubSectionList>
    <Footer>
      <template>
        <slot name="copyright"/>
      </template>
    </Footer>
  </div>
</template>

<style scoped>

</style>