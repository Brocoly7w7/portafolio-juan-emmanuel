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
      description: "Sistema de monitoreo ambiental desarrollado con ESP32-S3 para supervisar las condiciones de una instalación, detectar presencia de agua y generar alertas.",
      learnings: `ARQUITECTURA DEL SISTEMA
    El ESP32-S3 recibe mediciones de temperatura, humedad y presión mediante un sensor BME280. También supervisa entradas para detectar presencia de agua.
    El microcontrolador proporciona un servidor web local mediante Wi-Fi, donde se visualizan las lecturas, gráficas, registros y configuraciones de los umbrales.
    Los datos y eventos se registran en una tarjeta microSD. Cuando se detectan condiciones de alarma, el sistema puede enviar notificaciones mediante un bot de Telegram.

    RETOS TÉCNICOS
    Integrar la lectura de sensores, almacenamiento, comunicación Wi-Fi, visualización web y envío de alertas dentro de un mismo microcontrolador.
    También fue necesario implementar configuraciones de umbrales y mecanismos para probar las alarmas.

    RESULTADOS
    Se desarrolló un prototipo funcional con visualización de variables ambientales, gráficas, historial de eventos, configuración de parámetros y notificaciones de alerta mediante Telegram.
    El proyecto permitió aplicar conocimientos de programación de microcontroladores, redes, sensores y sistemas IoT.`
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


// ETAPA 4: completa estos datos con tus enlaces profesionales reales.
// Ejemplo: const CORREO_PROFESIONAL = "tucorreo@dominio.com";
const CORREO_PROFESIONAL = "brocoly7w7@gmail.com";
const LINKEDIN_PERSONAL = "https://www.linkedin.com/in/juan-emmanuel-rosales-fernandez-6a1b41447"; // Ejemplo: "https://www.linkedin.com/in/tu-usuario/"

document.addEventListener("DOMContentLoaded", () => {
  const emailBox = document.getElementById("email-container");
  const emailLink = document.getElementById("email-link");
  const linkedinBox = document.getElementById("linkedin-container");
  const linkedinLink = document.getElementById("linkedin-link");
  const contactForm = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  if (CORREO_PROFESIONAL) {
    emailLink.href = "mailto:" + CORREO_PROFESIONAL;
    emailLink.textContent = CORREO_PROFESIONAL + " ↗";
    emailBox.hidden = false;
  }
  if (LINKEDIN_PERSONAL.startsWith("https://www.linkedin.com/")) {
    linkedinLink.href = LINKEDIN_PERSONAL;
    linkedinBox.hidden = false;
  }

  contactForm.addEventListener("submit", event => {
    event.preventDefault();
    status.className = "form-status";
    status.textContent = "";

    // HTML5 verifica campos obligatorios, formato de correo y longitud mínima.
    if (!contactForm.checkValidity()) {
      contactForm.reportValidity();
      status.classList.add("error");
      status.textContent = "Revisa los campos obligatorios y escribe un mensaje de al menos 10 caracteres.";
      return;
    }

    if (!CORREO_PROFESIONAL) {
      status.classList.add("error");
      status.textContent = "El formulario aún no puede enviar mensajes: falta configurar el correo profesional del portafolio.";
      return;
    }

    const data = new FormData(contactForm);
    const subject = "Contacto desde mi portafolio — " + data.get("nombre");
    const body = "Nombre: " + data.get("nombre") + "\n"
      + "Correo: " + data.get("correo") + "\n\n"
      + "Mensaje:\n" + data.get("mensaje");
    const url = "mailto:" + CORREO_PROFESIONAL
      + "?subject=" + encodeURIComponent(subject)
      + "&body=" + encodeURIComponent(body);
    status.classList.add("success");
    status.textContent = "Se abrirá tu aplicación de correo. Revisa el mensaje y pulsa Enviar allí.";
    window.location.href = url;
  });
});
