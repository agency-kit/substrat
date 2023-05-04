<template>
  <Feldspar>
    <template #navigation>
      <ReelNav>
        <template #default>
          substrat
        </template>
        <template #links>
          <LinkButton>reel</LinkButton>
          <LinkButton>layout</LinkButton>
          <LinkButton>navigation</LinkButton>
          <LinkButton>table</LinkButton>
          <LinkButton>sidebar</LinkButton>
          <DropdownButton class="layout-button">
            Drop
            <template #dropdown>
              <Link href="/sunstone-ex">Sunstone</Link>
              <Link href="/feldspar-ex">Feldspar</Link>
              <Link href="/chalcedony-ex">Chalcedony</Link>
              <Link href="/pyroxene-ex">Pyroxene</Link>
            </template>
          </DropdownButton>
          <LinkButton>reel</LinkButton>
          <LinkButton>layout</LinkButton>
          <LinkButton>navigation</LinkButton>
          <LinkButton>table</LinkButton>
          <LinkButton>sidebar</LinkButton>
          <LinkButton>drawer</LinkButton>
          <LinkButton>reel</LinkButton>
          <LinkButton>layout</LinkButton>
          <LinkButton>navigation</LinkButton>
          <LinkButton>table</LinkButton>
          <LinkButton>sidebar</LinkButton>
          <LinkButton>drawer</LinkButton>
          <LinkButton>reel</LinkButton>
          <LinkButton>layout</LinkButton>
          <LinkButton>navigation</LinkButton>
          <LinkButton>table</LinkButton>
          <LinkButton>sidebar</LinkButton>
          <LinkButton>drawer</LinkButton>
        </template>
      </ReelNav>
    </template>
    <template #sections>
      <div>
        <h2>Help</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ducimus excepturi repudiandae, ex esse molestias doloribus fugit, illum id recusandae, architecto cupiditate dolor optio non praesentium amet itaque eligendi. Cupiditate!</p>
      </div>
      <div>
        <h2>talk</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ducimus excepturi repudiandae, ex esse molestias doloribus fugit, illum id recusandae, architecto cupiditate dolor optio non praesentium amet itaque eligendi. Cupiditate!</p>
      </div>
      <div>
        <h2>soon</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita ducimus excepturi repudiandae, ex esse molestias doloribus fugit, illum id recusandae, architecto cupiditate dolor optio non praesentium amet itaque eligendi. Cupiditate!</p>
      </div>
    </template>
  </Feldspar>
</template>