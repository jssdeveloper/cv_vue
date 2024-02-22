import { ref } from "vue";
import { defineStore } from "pinia";

export const useMetricsLeftStore = defineStore("useMetricsLeftStore", () => {
  const metricsLeft = ref({
    contact: { En: "Contact Information", Lv: "Kontaktinformācija" },
    location: { En: "Riga, Latvia", Lv: "Rīga, Latvija" },
    skills: { En: "Skills", Lv: "Prasmes" },
    problemSolving: { En: "Problem Solving", Lv: "Problēmu Risināšana" },
    projectManagment: { En: "Project Managment", Lv: "Projektu Vadība" },
    softSkills: { En: "Soft Skills", Lv: "Soft Skills" },
    businessDevelopment: {
      En: "Business Development",
      Lv: "Biznesa Attīstīšana",
    },
    coding: { En: "Coding", Lv: "Programmēšana" },
    languageSkills: { En: "Language Skills", Lv: "Valodu Zināšanas" },
    latvian: { En: "Latvian", Lv: "Latviešu" },
    german: { En: "German", Lv: "Vācu" },
    english: { En: "English", Lv: "Angļu" },
    russian: { En: "Russian", Lv: "Krievu" },
  });

  return {
    metricsLeft,
  };
});
