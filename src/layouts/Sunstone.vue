<script setup>
const navHeight = ref(0)
const nav = ref(null)
const hero = ref(null)
const detector = ref(null)
const showHero = ref(true)
const props = defineProps({shouldShowHero: {type: Boolean, default: true}})
onMounted(() => {
  navHeight.value = nav.value.clientHeight + 'px'
  const updateNavHeight = debounce(() => {
    navHeight.value = nav.value.clientHeight + 'px'
  }, 50)
  addEventListener("resize", updateNavHeight);

  const observer = new IntersectionObserver(([entry]) => {
    if (entry.boundingClientRect.top < 0 && !entry.isIntersecting) {
        // entered viewport at the top edge, hence scroll direction is up
        showHero.value =  false;
    } else {
      showHero.value =  true;
    }
  }, {threshold: [1]})
  observer.observe(detector.value);
})
</script>

<template>
  <div class="jasper">
    <div class="sticky hero" ref="hero" v-if="shouldShowHero">
      <Transition name="fade">
        <slot name="hero" v-if="showHero"/>
      </Transition>
    </div>
    <div class="sticky nav" ref="nav">
      <div ref="detector" class="detector"></div>
      <slot name="nav"/>
    </div>
    <div class="sheet">
      <div class="content">
        <slot/>
      </div>
      <div class="footer-insert">
        <slot name="footer"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
@layer composition {
  .sticky.hero {
    z-index: -1;
    top: 0;
    height: calc(100vh - v-bind("navHeight"));
  }

  .sticky.nav {
    top: 0;
    z-index: 10;
    background-color: var(--color-light);
  }

  .sheet {
    background-color: var(--color-light);
  }

  .content {
    margin: 0 auto;
    max-width: 90vw;
  }

  .detector {
    position: absolute;
    top: -1px;
    left: 0px;
    height: 1px;
    width: 1px;
    background: transparent;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity var(--transition-duration) var(--transition-easing);
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

}
</style>