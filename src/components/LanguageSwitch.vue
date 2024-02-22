<template>
    <div class="text-md">
        <div @click="lswitch"
            class="outline outline-1 hover:outline-neutral w-6 aspect-square rounded flex justify-center items-center cursor-pointer hover:bg-neutral-content hover:text-neutral duration-200">
            {{
                translations.language
            }}</div>
    </div>
</template>

<script setup>
import { useTranslationStore } from "@/store/translations"
const translations = useTranslationStore()
function lswitch() {
    translations.languageSwitch()
}

</script>