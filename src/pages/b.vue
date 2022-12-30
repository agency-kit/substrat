<template>
  <Chalcedony class="layout">
    <template #nav-title>
      Chalcedony
    </template>
    <template #nav-links>
      <a href="/">Link A</a>
      <a href="/">Link B</a>
      <a href="/">Link C</a>
      <a href="/">Link D</a>
    </template>
    <template #sidebar>
      <h3>Sidebar</h3>
      <div class="flex-col flex">
        <a href="/">Link A</a>
        <a href="/">Link B</a>
        <a href="/">Link C</a>
        <a href="/">Link D</a>
      </div>
      <DarkModeButton>
        <div class="dark:i-carbon-sun i-carbon-moon"></div>
      </DarkModeButton>
    </template>
    <template #content>
      <Center class="flow">
        <Block intrinsic>
          <h2>Chalcedony Layout Sample</h2>
          <p>A small text</p>
          <Rule content="👽" double></Rule>
          <p>another small text</p>
        </Block>
        <h4>Just a memo</h4>
        <p>
          Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work.
        </p>
        <p>
          “Every element of the program was in trouble and so were we. The simulators were not working, Mission Control was behind in virtually every area, and the flight and test procedures changed daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I don’t know what Thompson’s committee will find as the cause, but I know what I find. 
        </p>
        <p>
          We are the cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things would come together by launch day, when in our hearts we knew it would take a miracle. We were pushing the schedule and betting that the Cape would slip before we did.
        </p>
        <Frame ratio="16/9">
          <img src="https://images.unsplash.com/photo-1502807521734-c36e42763f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="">
        </Frame>
        <caption><i><small>a rock, some rocks, my rocks</small></i></caption>
        <p>
          “From this day forward, Flight Control will be known by two words: ‘Tough’ and ‘Competent.’ Tough means we are forever accountable for what we do or what we fail to do. We will never again compromise our responsibilities. Every time we walk into Mission Control we will know what we stand for. Competent means we will never take anything for granted. We will never be found short in our knowledge and in our skills. Mission Control will be perfect.
        </p>
        <p>
          When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards. It will never be erased. Each day when you enter the room these words will remind you of the price paid by Grissom, White, and Chaffee. These words are the price of admission to the ranks of Mission Control.
        </p>
      </Center>
    </template>
    <template #footer-copyright>
        Substrat
    </template>
  </Chalcedony>
</template>


<style scoped>
.layout:deep(nav) {
  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.393);
}
</style>