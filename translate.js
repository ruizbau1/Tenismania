const translations = {
    en: {
      women: "WOMEN",
      men: "MEN",
      sale: "SALE",
      stores: "STORES",
      styled: "STYLED BY",
      editorial: "EDITORIAL"
    },
    es: {
      women: "MUJER",
      men: "HOMBRE",
      sale: "REBAJAS",
      stores: "TIENDAS",
      styled: "STYLED BY",
      editorial: "EDITORIAL"
    }
  };
  
  const langSelect = document.getElementById("language-select");
  langSelect.addEventListener("change", (e) => {
    const lang = e.target.value;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  });
  