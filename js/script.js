document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const projects = {
    kiwpos: {
      year: "Junio de 2026",
      title: "KiwPOS — Aplicación de ventas",
      description: "Diseñé una aplicación móvil para un negocio de la Central de Abastos que reemplaza notas manuscritas propensas a errores por registros de productos, cálculos de ventas y tickets impresos.",
      learnings: "La desarrollé con Flutter y Dart. Los datos operativos se almacenan localmente y utilicé Cloud Firestore para gestionar usuarios, accesos y membresías. Aprendí a conectar requisitos de un negocio real con una interfaz útil."
    },
    site: {
      year: "Octubre de 2026",
      title: "SITE MONITOR — Sistema IoT",
      description: "Prototipo de monitoreo ambiental de instalaciones: detecta presencia de agua y supervisa temperatura y humedad, con alarmas configurables.",
      learnings: "Arquitectura: sensores y módulos conectados al ESP32-S3; conectividad mediante módulo Ethernet; panel web de configuración y visualización con reportes y gráficas; alertas enviadas a un bot de Telegram. Aprendí a integrar componentes físicos con redes y software. No se publican claves privadas."
    },
    hydro: {
      year: "Noviembre de 2025 / Mayo de 2026",
      title: "HydroHero — Videojuego educativo",
      description: "Juego 2D de plataformas para concientizar sobre el cuidado del agua. El personaje debe cerrar tuberías contaminantes mientras sube el nivel de agua tóxica.",
      learnings: "Proyecto de equipo de tres personas en el que desarrollé gran parte del trabajo. Usamos Python y Pygame. La evaluación fue en noviembre de 2025; el reconocimiento de tercer lugar fue entregado en mayo de 2026."
    },
    carro: {
      year: "Marzo de 2024",
      title: "Automóvil con Arduino",
      description: "Automóvil electrónico con diseño personalizado, iluminación LED y control mediante mando de PlayStation 5 o aplicación móvil.",
      learnings: "Combiné programación de microcontroladores, montaje de componentes y diseño físico. El proyecto reforzó mi interés por controlar dispositivos reales desde software."
    },
    dron: {
      year: "Desde enero de 2024",
      title: "Dron FPV construido desde cero",
      description: "Comencé probando motores y radiocontrol con un ESP32, pero no logré estabilizar aquel prototipo por dificultades con el control PID. Posteriormente construí un dron funcional.",
      learnings: "Tras conocer a un compañero universitario que volaba drones, integré una controladora de vuelo, ESC y el resto de los componentes. Aprendí sobre integración, comunicación de radio y sistemas de video FPV."
    }
  };
  const dialog = document.getElementById("project-dialog");
  const closeButton = dialog.querySelector(".close-dialog");
  document.querySelectorAll("[data-project]").forEach(button => {
    button.addEventListener("click", () => {
      const project = projects[button.dataset.project];
      if (!project) return;
      document.getElementById("dialog-year").textContent = project.year;
      document.getElementById("dialog-title").textContent = project.title;
      document.getElementById("dialog-description").textContent = project.description;
      document.getElementById("dialog-learnings").textContent = project.learnings;
      dialog.showModal();
    });
  });
  closeButton.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
});
