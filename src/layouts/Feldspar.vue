<template>
  <div>
      <SubSection>
          <slot name="hero"/>
      </SubSection>
      <Navbar class="sticky-nav">
        <slot name="navigation"/>
      </Navbar>
      <SubSectionList>
        <slot name="sections"/>
      </SubSectionList>
      <Footer>
        <slot name="footer"/>
      </Footer>
  </div>
</template>

<style scoped>
.sticky-nav {
    position: sticky;
    top: 10px;
    background-color: transparent;
    margin: 0 1rem;
    margin-top: -6rem;
    z-index: 100;
}
</style>