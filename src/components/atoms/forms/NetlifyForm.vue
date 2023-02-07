<script setup>
const props = defineProps({
    formName: {type: String}
})
</script>

<template>
    <Lazy ssrOnly>
        <form class="" :name="formName" action="/success" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <p class="hidden-field">
                <label>
                Don’t fill this out if you’re human: <input name="bot-field"/>
                </label>
            </p>
            <slot/>
            <div class="button-shell">
                <SubButton type="submit">
                    <slot name="button">
                        Send
                    </slot>
                </SubButton>
            </div>
            <input type="hidden" name="form-name" :value="formName"/>
        </form>
    </Lazy>
</template>

<style scoped>
@layer block {
    form {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: var(--space-m);
        max-width: 50rem;
    }
    .hidden-field {
        display: none;
    }
    :slotted(*) {
        margin: var(--space-s);
    }

    :slotted(label) {
        flex-grow: 1;
    }

    .button-shell {
        width: 100%;
        display: flex;
        justify-content: center;
    }
}
</style>