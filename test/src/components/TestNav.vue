<template>
  <SubNav sticky class="test-nav">
    <template #title>
      <h1 class="inline-flex items-center"><div class="i-carbon-template"></div>SUBSTRAT</h1>
    </template>
    <template #links>
      <LinkButton primary href="/">Home</LinkButton>
      <DropdownButton class="layout-button">
        Layouts
        <template #dropdown>
          <Link href="/sunstone-ex">Sunstone</Link>
          <Link href="/feldspar-ex">Feldspar</Link>
          <Link href="/chalcedony-ex">Chalcedony</Link>
          <Link href="/pyroxene-ex">Pyroxene</Link>
        </template>
      </DropdownButton>
      <LinkButton href="/forms">Forms</LinkButton>
      <LinkButton href="/navigation">Navigation</LinkButton>
      <DarkModeButton>
        <div class="i-carbon-sun dark:i-carbon-moon"></div>
      </DarkModeButton>
    </template>
  </SubNav>
</template>

<style scoped>
.layout-button:deep(.sub-button) {
  width: 6.5em;
}
</style>