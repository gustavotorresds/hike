(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      $("#subscribe-navbar-button").css("border", "1px solid white")
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#subscribe-navbar-button").css("border", "1px solid black")
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  $("#signup-form").submit(function(e){
    console.log('HERE');
    e.preventDefault();
    submitSubscribeForm($("#signup-form"), $("#signup-success"));
  });

  function submitSubscribeForm($form, $resultElement) {
    $.ajax({
        type: "GET",
        url: "https://hikeacademy.us17.list-manage.com/subscribe/post-json?u=5bfcd8d110b98b14d9ca89ce3&amp;id=e9773b005f&c=?",
        data: $form.serialize(),
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        error: function(error){},

        success: function(data){
            if (data.result != "success") {
                $("#signup-info").css("display", "block");
                var message = data.msg || "Desculpe, algo deu errado. Tente novamente mais tarde.";

                if (data.msg) {
                  if (data.msg.indexOf("already subscribed") >= 0) {
                    message = "Você já se inscreveu. Obrigado! Entraremos em contato em breve :)";
                  } else if (data.msg.indexOf("Please enter a value") >= 0) {
                    console.log("MSG: ", data.msg);
                    message = "Os campos são todos obrigatórios. Por favor, preencha-os novamente.";
                  } else if (data.msg.indexOf("too many") >= 0) {
                    message = "Tivemos muitas inscrições vindo desse e-mail.";
                  }
                }

                $("#signup-info").html('<p>' + message + '</p>');
            } else {
                $("#signup-info").css("display", "none");
                $("#signup-success").css("display", "block");
                $form.css("display", "none");
                $("#signup-success").html('<i class="fa fa-check-circle-o"></i><p class="mt-3">Obrigado pela inscrição! Mandaremos e-mail para você em breve com informações sobre os próximos passos para se juntar à Hike :)</p>');
            }
        }
    });
  }

  $('#signupModal').on('hidden.bs.modal', function (e) {
    // do something...
    $("#signup-form").css("display", "block");
    $("#signup-success").css("display", "none");
    $("#signup-info").css("display", "none");
  });

  var acc = document.getElementsByClassName("accordion");
  var i;

  for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          /* Toggle between adding and removing the "active" class,
          to highlight the button that controls the panel */
          this.classList.toggle("active");

          /* Toggle between hiding and showing the active panel */
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }

})(jQuery); // End of use strict
