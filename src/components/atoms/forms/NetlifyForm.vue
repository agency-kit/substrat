<template>
    <form class="" name="contact" method="POST" data-netlify="true">
        <slot/>
        <div class="button-shell">
            <button type="submit">Send</button>
        </div>
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: var(--space-m);
    max-width: 50rem;
}

:slotted(*) {
    margin: var(--space-m);
}

:slotted(label) {
    flex-grow: 1;
}

.button-shell {
    width: 100%;
    display: flex;
    justify-content: center;
}
</style>