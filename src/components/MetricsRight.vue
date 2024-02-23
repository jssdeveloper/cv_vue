<template>
    <div>

        <!-- Work experience -->
        <div class="my-8">
            <div class="grid grid-cols-5 border-t-2 border-base-content py-2">
                <div class=" flex col-span-4 text-2xl items-center gap-2">
                    <div>{{ metrics.metricsRight.workExperience[translations.language] }}</div>
                </div>
            </div>

            <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <time class="font-mono italic">2015-2023</time>
                        <div class="text-lg font-black">SIA Auto Metro</div>
                        {{ metrics.metricsRight.autoMetro[translations.language] }}
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <time class="font-mono italic">2010-{{ metrics.metricsRight.now[translations.language] }}</time>
                        <div class="text-lg font-black">SIA Hansafilm</div>
                        {{ metrics.metricsRight.hansafilm[translations.language] }}
                    </div>
                    <hr />
                </li>

                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <time class="font-mono italic">2009-2013</time>
                        <div class="text-lg font-black">SIA Bite Latvija</div>
                        {{ metrics.metricsRight.bite[translations.language] }}
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
        <!-- End of Work experience -->


        <!--  Education -->
        <div class="my-8">
            <div class="grid grid-cols-5 border-t-2 border-base-content py-2">
                <div class=" flex col-span-4 text-2xl items-center gap-2">
                    <div>{{ metrics.metricsRight.education[translations.language] }}</div>
                </div>
            </div>

            <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <div class="text-lg font-black">{{ metrics.metricsRight.secondarySchool[translations.language] }}
                        </div>
                        <ul>
                            <li>{{ metrics.metricsRight.school1[translations.language] }}</li>
                            <li>{{ metrics.metricsRight.school2[translations.language] }}</li>
                        </ul>
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <div class="text-lg font-black">{{ metrics.metricsRight.university[translations.language] }}</div>
                        <ul>
                            <li>{{ metrics.metricsRight.university1[translations.language] }}</li>
                            <li>{{ metrics.metricsRight.university2[translations.language] }}</li>
                        </ul>
                    </div>
                    <hr />
                </li>
            </ul>
        </div>
        <!-- End of Education -->


        <!--  Certifications -->
        <div class="my-8">
            <div class="grid grid-cols-5 border-t-2 border-base-content py-2">
                <div class=" flex col-span-4 text-2xl items-center gap-2">
                    <div>{{ metrics.metricsRight.certifications[translations.language] }}</div>
                </div>
            </div>

            <ul class="timeline timeline-snap-icon timeline-compact timeline-vertical">
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <div class="text-lg font-black">LIKTA</div>
                        {{ metrics.metricsRight.certification1[translations.language] }}
                    </div>
                    <hr />
                </li>
                <li>
                    <hr />
                    <div class="timeline-middle">
                        <svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2"
                            viewBox="0 0 24 24" class="w-3 h-3 fill-current" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="11.998" cy="11.998" fill-rule="nonzero" r="9.998" />
                        </svg>
                    </div>
                    <div class="timeline-end mb-10">
                        <div class="text-lg font-black">Harvard CS50</div>
                        {{ metrics.metricsRight.certification2[translations.language] }}
                    </div>
                    <hr />
                </li>

            </ul>
        </div>
        <!-- End of Certifications -->


        <div class="flex flex-wrap gap-2 py-2">
            <button v-for="t in technologies" :key="t"
                class="outline rounded px-4 cursor-default odd:bg-neutral-content odd:text-neutral">{{ t
                }}</button>


        </div>





    </div>
</template>

<script setup>
import { ref } from 'vue';
const technologies = ref(["Python", "Django", "Flask", "Go", "Echo", "Fiber", "Sqlx", "Gorm", "Javascript", "Vue", "Tailwind","Docker", "Postgres", "Linux"])
import { useMetricsRight } from "@/store/metricsrightstore"
import { useTranslationStore } from "@/store/translations"
const metrics = useMetricsRight()
const translations = useTranslationStore()

</script>
