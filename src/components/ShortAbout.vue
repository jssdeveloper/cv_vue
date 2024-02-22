<template>
    <div class="flex flex-col gap-3">
        <p> {{ translations.translations.shortAbout1[translations.language] }}
        </p>
        <p> {{ translations.translations.shortAbout2[translations.language] }}
        </p>
    </div>
</template>

<script setup>
import { useTranslationStore } from "@/store/translations"
const translations = useTranslationStore()
</script>