<template>
  <main class="">
    <div class=" max-w-4xl  mx-auto shadow-xl mt-3">


      <nav class="flex w-full justify-between items-center px-4 py-6">
        <div class="leftnav"></div>

        <div class="rightnav flex gap-4 items-center">
          <div class="">
            <ThemeSwitch />
          </div>
          <LanguageSwitch />
          <div>
            <a href="" @click="printthis">
              <ArrowDownCircleIcon class="h-8 w-8 text-base-content" />
            </a>
          </div>
        </div>
      </nav>



      <div id="print" class="grid grid-cols-7">
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
          <div ref="pdfContent">
            <MetricsLeft />
          </div>
        </div>
        <div class="col-span-7 md:col-span-4  px-4">
          <MetricsRight />
        </div>
      </div>


      <PageFooter />

    </div>
    <div>
    </div>
  </main>
</template>
<script setup>
import { useTranslationStore } from "@/store/translations";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import LanguageSwitch from "@/components/LanguageSwitch.vue";
import ShortAbout from "@/components/ShortAbout.vue";
import MetricsLeft from "./components/MetricsLeft.vue";
import MetricsRight from "./components/MetricsRight.vue";
import PageFooter from "./components/PageFooter.vue";
import { ArrowDownCircleIcon } from '@heroicons/vue/24/outline';

const translations = useTranslationStore();


function printthis() {
  const prtHtml = document.getElementById('print').innerHTML;

  // Get all stylesheets HTML
  let stylesHtml = '';
  for (const node of [...document.querySelectorAll('link[rel="stylesheet"], style')]) {
    stylesHtml += node.outerHTML;
  }

  // Open the print window
  const WinPrint = window.open('', '', 'left=10,top=10,width=800,height=900,toolbar=0,scrollbars=0,status=0');

  WinPrint.document.write(`<!DOCTYPE html>
<html>
  <head>
    ${stylesHtml}
    <link rel="stylesheet" href="/src/assets/main.css"> <!-- Include Vue CSS file -->
    <style>
      body {
        margin: 1cm; /* Set normal size margin */
      }
      @page {
        size: auto; /* Automatically fit to page size */
        margin: 1cm; /* Set normal size margin */
      }
    </style>
  </head>
  <body>
    ${prtHtml}
  </body>
</html>`);

  WinPrint.document.close();
  WinPrint.focus();
  WinPrint.print();
  WinPrint.close();
}

</script>


