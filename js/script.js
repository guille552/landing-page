// Selecciona todos los elementos con la clase "effect-counter"
const counters = document.querySelectorAll('.effect-counter');

// Configura la animación de los contadores
counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target'); // Obtén el valor final
    const count = +counter.innerText; // Obtén el valor actual

    // Define la velocidad del incremento
    const increment = target / 100;

    // Incrementa el valor hasta alcanzar el objetivo
    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(updateCount, 30); // Actualiza cada 30ms
    } else {
      counter.innerText = target; // Asegúrate de mostrar el valor final exacto
    }
  };

  updateCount(); // Llama a la función para iniciar la animación
});

/* tabs */

$(document).ready(function () {
  $('.menu-item').click(function () {
    // Quitar la clase "active" de todos los botones y agregarla al botón clickeado
    $('.menu-item').removeClass('active');
    $(this).addClass('active');

    // Ocultar todo el contenido y mostrar el correspondiente
    const contentId = $(this).data('content');
    $('.content-item').removeClass('active');
    $('#' + contentId).addClass('active');
  });
});

/* para el modal */

$(document).ready(function () {
  // Abrir el modal
  $("#openModal").click(function () {
    $("#contactModal").fadeIn();
  });

  // Cerrar el modal
  $("#closeModal").click(function () {
    $("#contactModal").fadeOut();
  });

  // Cerrar modal al hacer clic fuera del contenido
  $(window).click(function (e) {
    if ($(e.target).is("#contactModal")) {
      $("#contactModal").fadeOut();
    }
  });

  // Validación del formulario
  $("#contactForm").submit(function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();

    if (name === "" || email === "" || message === "") {
      alert("All fields are required!");
      return;
    }

    if (!validateEmail(email)) {
      alert("Please enter a valid email address!");
      return;
    }

    alert("Message sent successfully!");
    $("#contactModal").fadeOut();
    $("#contactForm")[0].reset();
  });

  // Función para validar el correo electrónico
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
});


/* acordeon */

$(document).ready(function () {
  $(".accordion-title").on("click", function () {
      // Cerrar otros acordeones
      $(".accordion-item").not($(this).parent()).removeClass("active").find(".accordion-content").css("max-height", "0");
      
      // Alternar el acordeón actual
      const parent = $(this).parent();
      parent.toggleClass("active");
      const content = parent.find(".accordion-content");
      if (parent.hasClass("active")) {
          content.css("max-height", content.prop("scrollHeight") + "px");
      } else {
          content.css("max-height", "0");
      }
  });
});


/* boton para ir hacia arriba */

$(document).ready(function() {
  // Mostrar el botón solo cuando el usuario se desplaza hacia abajo
  $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('#toTopButton').fadeIn();
      } else {
          $('#toTopButton').fadeOut();
      }
  });

  // Acción para desplazarse hacia arriba
  $('#toTopButton').click(function() {
      $('html, body').animate({scrollTop: 0}, 800);
  });
});


/* menu responsive con jquery */

  $(document).ready(function () {
    // Alternar el menú al hacer clic en el botón hamburguesa
    $(".menu-toggle").click(function () {
      $(".navbar-nav").toggleClass("show");
    });
  });
