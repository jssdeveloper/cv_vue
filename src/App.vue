<template>
  <main class="">
    <div class=" max-w-4xl  mx-auto shadow-xl mt-3 mb-12">
      <nav class="flex w-full justify-between px-4 py-6">
        <div></div>
        <div class="flex gap-4 items-end">
          <div class="">
            <ThemeSwitch />
          </div>
          <LanguageSwitch />
        </div>
      </nav>
      <div class="grid grid-cols-7 ">
        <div class="col-span-7 md:col-span-3 flex flex-col gap-8 px-4 shadow-xl">
          <div class="text-center">
            <h1 class="text-6xl font-medium">
              {{ translations.translations.name[translations.language] }} {{
                translations.translations.surname[translations.language] }}
            </h1>
            <h2>{{ translations.translations.title[translations.language] }}</h2>
          </div>
          <div class="max-w-48 mx-auto"><img class="rounded-full shadow-lg" src="@/assets/img/profile.jpeg" alt=""></div>
          <div>
            <ShortAbout />
          </div>
          <div>
            <MetricsLeft />
          </div>
        </div>
        <div class="col-span-7 md:col-span-4  px-4">
          <div>Education</div>
          <div>Experience</div>
          <div>Certification</div>
          <div>Outside Work</div>

        </div>
      </div>

    </div>

    <div>
    </div>

  </main>
</template>
<script setup>
import { useTranslationStore } from "@/store/translations"
import ThemeSwitch from "@/components/ThemeSwitch.vue"
import LanguageSwitch from "@/components/LanguageSwitch.vue"
import ShortAbout from "@/components/ShortAbout.vue"
import MetricsLeft from "./components/MetricsLeft.vue"
const translations = useTranslationStore()

</script>