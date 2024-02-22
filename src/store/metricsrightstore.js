import { ref } from "vue";
import { defineStore } from "pinia";

export const useMetricsRight = defineStore("useMetricsRightStore", () => {
  const metricsRight = ref({
    workExperience: { En: "Work Experience", Lv: "Darba Pieredze" },
    autoMetro: {
      En: "E-Commerce developer (Ebay, Amazon, Allegro, Magento), project lead (Integration, IT), back end developer (Python, Go, Postgres, Docker), account manager (Ebay, Amazon)",
      Lv: "E-komercijas attīstītājs (Ebay, Amazon, Allegro, Magento), projektu vadītājs (integrācijas, IT), back end programmētājs (Python, Go, Postgres, Docker), menedžeris (Ebay, Amazon)",
    },
    hansafilm: { En: "CEO (Photo/Video)", Lv: "Izpilddirektors (Foto, Video)" },
    bite: {
      En: "Customer Support manager, marketing activities",
      Lv: "Klientu atbalsta dienests, mārketinga aktivitātes",
    },
    education: { En: "Education", Lv: "Izglītība" },
    secondarySchool: {
      En: "Secondary school/gymnasium",
      Lv: "Vidusskola/ģimnāzija",
    },
    school1: { En: "Riga 25th secondary school", Lv: "Rīgas 25. vidusskola" },
    school2: {
      En: "Heriburg Gymnasium Coesfeld (Germany)",
      Lv: "Heriburg Gymnasium Coesfeld (Vācija)",
    },
    university: { En: "University", Lv: "Universitāte" },
    university1: {
      En: "RTU DITF (Computer Science)",
      Lv: "RTU DITF (Datorzinātne)",
    },
    university2: {
      En: "LU SZF (Faculyt of social science)",
      Lv: "LU SZF (Sociālo zinātņu fakultāte)",
    },
    certifications: { En: "Certifications", Lv: "Sertifikācijas" },
    certification1: {
      En: "Module III Back end Development with Python, Flask + Internshp",
      Lv: "Module III Back end programmēšana ar Python, Flask + prakse",
    },
    certification2: {
      En: "Introduction to Computer Science (C, Python, SQL)",
      Lv: "Ievads Datorzinātnē (C, Python, SQL)",
    },
    now: { En: "now", Lv: "tagad" },
  });

  return {
    metricsRight,
  };
});
