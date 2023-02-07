
<template>
  <div class="app">
    <Navbar sticky>
      <template #title>
        <h1 class="inline-flex items-center"><div class="i-carbon-template"></div>SUBSTRAT</h1>
      </template>
      <template #links>
        <a href="/">Link A</a>
        <RouterLink to="/b">Link B</RouterLink>
        <RouterLink to="/c">Link C</RouterLink>
        <RouterLink to="/d">Link D</RouterLink>
        <RouterLink to="/sunstone-ex">Sunstone</RouterLink>
        <DarkModeButton>
          <div class="i-carbon-sun dark:i-carbon-moon"></div>
        </DarkModeButton>
      </template>
    </Navbar>
    <SubSection>
      <Block img="https://images.unsplash.com/photo-1611071689760-5bc498ac316e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80">
        <h2>This is the first title</h2>
        <p>A small text</p>
        <Rule content="👽" double></Rule>
        <p>another small text</p>
      </Block>
    </SubSection>
    <Rule content="⚡️"></Rule>
    <SubSectionList>
      <template>
        <div>
          <h2>Title</h2>
          <Rule content="👽"></Rule>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis est maiores sint, dolore et quae aliquam quibusdam necessitatibus
            id ea inventore nam accusantium asperiores! Corporis, similique!</p>
        </div>
        <div>
          <h2>Title B</h2>
          <hr>
          <ImgSideCar>
            <template #img>
              <img src="https://images.unsplash.com/photo-1560427450-00fa9481f01e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWluZXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60" alt="">
            </template>
            <template #default>
              <div class="flex flex-col flow">
                <h3>Gratis</h3>
                <span>But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, 
                  then the destinies of all who lived on it must inevitably be interwoven and joined.</span>
                  <SubButton>Click Ma</SubButton>
              </div>
            </template>
          </ImgSideCar>
        </div>
        <div>
          <h2>Title C</h2>
          <hr>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis est maiores sint, dolore et quae aliquam quibusdam necessitatibus
            id ea inventore nam accusantium asperiores! Corporis, similique!</p>
        </div>
        <div>
          <Reel>
            <template>
              <div class="border border-solid border-black max-w-sm p-3">
                <h4>Reel Item 1</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis</p>
              </div>
              <div class="border border-solid border-black max-w-sm p-3">
                <h4>Reel Item 2</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis</p>
              </div>
              <div class="border border-solid border-black max-w-sm p-3">
                <h4>Reel Item 3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis</p>
              </div>
              <div class="border border-solid border-black max-w-sm p-3">
                <h4>Reel Item 4</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis</p>
              </div>
              <div class="border border-solid border-black max-w-sm p-3">
                <h4>Reel Item 5</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis suscipit non ipsam officiis</p>
              </div>
            </template>
          </Reel>
        </div>
        <div>
          <SideCar :basis="24" :minSize="50">
            <template #left>
              <Center class="flow">
                <h3>Left Side</h3>
                <Rule content="👽"></Rule>
                <p>I believe that space travel will one day become as common as airline travel is today.
                   I’m convinced, however, that the true future of space travel does not lie with government agencies — 
                   NASA is still obsessed with the idea that the primary purpose of the space program is science</p>
              </Center>
            </template>
            <template #right>
              <Center class="flow">
                <h3>Right Side</h3>
                <Rule content="🚀"></Rule>
                <p>
                  The view of the earth from the moon fascinated me - a small disk, 240,000 mniles away. 
                  It was hard to think that that little thing held so many problems, so many frustrations. 
                  Raging nationalistic interests, famines, wars, pestilence don't show from that distance. 
                  </p>
              </Center>
            </template>
          </SideCar>
          <br>
          <Block>
            <p>
            I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens,
            could look at earth and never know that it was inhabited at all. But the samw wayward stranger would certainly know 
            instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined.
            We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.
            </p>
          </Block>
        </div>
        <div class="flow">
          <ImgSideCar>
            <template #img>
              <img src="https://images.unsplash.com/photo-1567548355227-e8742ddaf57e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80" alt="">
            </template>
            <template #default>
              <h3>Avis</h3>
              <span>But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, 
                then the destinies of all who lived on it must inevitably be interwoven and joined.</span>
            </template>
          </ImgSideCar>
          <ImgSideCar switch>
            <template #img>
              <img src="https://images.unsplash.com/photo-1579159279464-d12b399393a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" alt="">
            </template>
            <template #default>
              <h3>Morbus</h3>
              <span>But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, 
                then the destinies of all who lived on it must inevitably be interwoven and joined.</span>
            </template>
          </ImgSideCar>
          <ImgSideCar>
            <template #img>
              <img src="https://images.unsplash.com/photo-1590672288095-de6e23d48241?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80" alt="">
            </template>
            <template #default>
              <h3>Karrun</h3>
              <span>But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, 
                then the destinies of all who lived on it must inevitably be interwoven and joined.</span>
            </template>
          </ImgSideCar>
        </div>
      </template>
    </SubSectionList>
    <SubSection>
      <Grid data-layout='50-50'>
        <template>
          <div class="m-h-10 p-3 text-center border border-solid border-black">
            <h3>Block 1</h3>
          </div>
          <div class="m-h-10 p-3 text-center border border-solid border-black">
            <h3>Block 2</h3>
          </div>
          <div class="m-h-10 p-3 text-center border border-solid border-black">
            <h3>Block 3</h3>
          </div>
          <div class="m-h-10 p-3 text-center border border-solid border-black">
            <h3>Block 4</h3>
          </div>
        </template>
      </Grid>
    </SubSection>
    <SubSection>
      <Block>
        <Center>
          <h3>This is centered.</h3>
        </Center>
      </Block>
    </SubSection>
    <SubSection>
      <Sidebar class="bar-example" sticky>
        <template #bar>
          <h3>sub sub</h3>
          <ul class="p-1">
            <li>
              <a href="/">Link A</a>
            </li>
            <li>
              <a href="/">Link B</a>
            </li>
            <li>
              <a href="/">Link C</a>
            </li>
          </ul>
        </template>
        <template #default>
          <Center>
            <h4>Just a memo</h4>
            <p>
              Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work.
            </p>
            <p>
              “Every element of the program was in trouble and so were we. The simulators were not working, Mission Control was behind in virtually every area, and the flight and test procedures changed daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I don’t know what Thompson’s committee will find as the cause, but I know what I find. We are the cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things would come together by launch day, when in our hearts we knew it would take a miracle. We were pushing the schedule and betting that the Cape would slip before we did.
            </p>
            <Frame ratio="16/9">
              <img src="https://images.unsplash.com/photo-1502807521734-c36e42763f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80" alt="">
            </Frame>
            <p>
              “From this day forward, Flight Control will be known by two words: ‘Tough’ and ‘Competent.’ Tough means we are forever accountable for what we do or what we fail to do. We will never again compromise our responsibilities. Every time we walk into Mission Control we will know what we stand for. Competent means we will never take anything for granted. We will never be found short in our knowledge and in our skills. Mission Control will be perfect.
            </p>
            <p>
              When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards. It will never be erased. Each day when you enter the room these words will remind you of the price paid by Grissom, White, and Chaffee. These words are the price of admission to the ranks of Mission Control.
            </p>
          </Center>
        </template>
      </Sidebar>
    </SubSection>
    <SubSection>
      <Trifold>
        <template #left>
          <ul class="p-1">
            <li>
              <a href="/">Link A</a>
            </li>
            <li>
              <a href="/">Link B</a>
            </li>
            <li>
              <a href="/">Link C</a>
            </li>
          </ul>
        </template>
        <template #default>
          <Center>
            <h4>Fly you Foals</h4>
            <p>
              Spaceflight will never tolerate carelessness, incapacity, and neglect. Somewhere, somehow, we screwed up. It could have been in design, build, or test. Whatever it was, we should have caught it. We were too gung ho about the schedule and we locked out all of the problems we saw each day in our work.
            </p>
            <Rule content="🥳"></Rule>
            <p>
              “Every element of the program was in trouble and so were we. The simulators were not working, Mission Control was behind in virtually every area, and the flight and test procedures changed daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I don’t know what Thompson’s committee will find as the cause, but I know what I find. We are the cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things would come together by launch day, when in our hearts we knew it would take a miracle. We were pushing the schedule and betting that the Cape would slip before we did.
            </p>
            <Rule content="😱" double></Rule>
            <p>
              “From this day forward, Flight Control will be known by two words: ‘Tough’ and ‘Competent.’ Tough means we are forever accountable for what we do or what we fail to do. We will never again compromise our responsibilities. Every time we walk into Mission Control we will know what we stand for. Competent means we will never take anything for granted. We will never be found short in our knowledge and in our skills. Mission Control will be perfect.
            </p>
            <Rule content="🫥"></Rule>
            <p>
              When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards. It will never be erased. Each day when you enter the room these words will remind you of the price paid by Grissom, White, and Chaffee. These words are the price of admission to the ranks of Mission Control.
            </p>
          </Center>
        </template>
        <template #right>
          <ul class="p-1">
            <li>
              <a href="/">Link A</a>
            </li>
            <li>
              <a href="/">Link B</a>
            </li>
            <li>
              <a href="/">Link C</a>
            </li>
          </ul>
        </template>
      </TriFold>
    </SubSection>
    <SubSection fit>
      <List>
        <div class="flex flex-row">
          <div class="i-carbon-analytics"></div>
          Hi jose
        </div>
        <div>
          my
        </div>
        <div>
          Name is
        </div>
      </List>
    </SubSection>
    <SubSection>
      <div>Stagger</div>
      <Stagger maxWidth="500">
        <div>This.</div>
        <h1>Isn't What.</h1>
        <div>You Think It Is.</div>
      </Stagger>
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
  background-color: var(--color-secondary);
  color: var(--color-secondary-dark);
}

.bar-example {
  width: 100%;
}

.app:deep(.sidebar .bar) {
  background-color: var(--color-secondary);
  padding: var(--space-s);
}
.dark .app:deep(.sidebar .bar) {
  background-color: var(--color-secondary-dark);
  padding: var(--space-s);
}
</style>
