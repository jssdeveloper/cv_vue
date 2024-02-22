<template>
    <!-- Contact -->
    <div>
        <div class="grid grid-cols-5 border-t-2 border-base-content py-2">
            <div class=" flex col-span-4 text-2xl items-center gap-2">
                <div> {{ metrics.metricsLeft.contact[translations.language] }}</div>
            </div>
        </div>
        <div class="grid grid-cols-5 border-t border-base-content py-2">
            <div class=" flex col-span-4 items-center gap-2">
                <MapPinIcon class="h-6 w-6 " />
                <div> {{ metrics.metricsLeft.location[translations.language] }}</div>
            </div>
        </div>

        <div class="grid grid-cols-5 border-t border-base-content py-2">
            <div class=" flex col-span-4 items-center gap-2">
                <PhoneIcon class="h-6 w-6 " />
                <div>+371 25544817</div>
            </div>
        </div>

        <div class="grid grid-cols-5 border-t border-base-content py-2">
            <div class=" flex col-span-4 items-center gap-2">
                <EnvelopeIcon class="h-6 w-6 " />
                <div>stalsjanis@gmail.com</div>
            </div>
        </div>

        <div class="grid grid-cols-5 border-t border-base-content py-2">
            <div class=" flex col-span-4 items-center gap-2">
                <GlobeAltIcon class="h-6 w-6 " />
                <div>github.com/jssdeveloper</div>
            </div>
        </div>
    </div>
    <!-- end of Contact -->


    <!-- skills -->
    <div class="mt-8">
        <div class="grid grid-cols-5 border-t-2 border-base-content py-2">
            <div class=" flex col-span-4 text-2xl items-center gap-2">
                <div> {{ metrics.metricsLeft.skills[translations.language] }}</div>
            </div>
        </div>
        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.problemSolving[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="90" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.softSkills[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="90" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.projectManagment[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="80" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.businessDevelopment[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="80" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.coding[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="60" class="range range-xs" step="10" />
            </div>
        </div>
    </div>
    <!-- end of skills -->


    <!-- language skills -->
    <div class="my-8">
        <div class="grid grid-cols-5 border-t-2 border-base-content py-2">
            <div class=" flex col-span-4 text-2xl items-center gap-2">
                <div> {{ metrics.metricsLeft.languageSkills[translations.language] }}</div>
            </div>
        </div>
        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.latvian[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="100" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.german[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="80" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.english[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="70" class="range range-xs" step="10" />
            </div>
        </div>

        <div class="flex justify-between border-t border-base-content py-2">
            <div> {{ metrics.metricsLeft.russian[translations.language] }}</div>
            <div><input type="range" disabled="true" min="0" max="100" value="60" class="range range-xs" step="10" />
            </div>
        </div>
    </div>
    <!-- end of language skills -->
</template>

<script setup>
import { MapPinIcon, PhoneIcon, EnvelopeIcon, GlobeAltIcon } from '@heroicons/vue/24/outline'
import { useMetricsLeftStore } from "@/store/metricsleftstore"
import { useTranslationStore } from "@/store/translations"
const metrics = useMetricsLeftStore()
const translations = useTranslationStore()

</script>
