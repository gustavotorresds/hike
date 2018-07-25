(function($) {
  "use strict"; // Start of use strict

  var idToURL = {
    'signup': 'https://hikeacademy.us17.list-manage.com/subscribe/post-json?u=5bfcd8d110b98b14d9ca89ce3&amp;id=e9773b005f&c=?',
    'interest-data-science': 'https://hikeacademy.us17.list-manage.com/subscribe/post-json?u=5bfcd8d110b98b14d9ca89ce3&amp;id=328b96fc6a&c=?',
    'interest-vba': 'https://hikeacademy.us17.list-manage.com/subscribe/post-json?u=5bfcd8d110b98b14d9ca89ce3&amp;id=6762c50ac9&c=?',
    'interest-mobile': 'https://hikeacademy.us17.list-manage.com/subscribe/post-json?u=5bfcd8d110b98b14d9ca89ce3&amp;id=a29147bc07&c=?',
    'interest-excel': 'https://hikeacademy.us17.list-manage.com/subscribe/post-json?u=5bfcd8d110b98b14d9ca89ce3&amp;id=2eee51aa50&c=?'
  };

  var idToForm = {
    'signup': `<p class="text-muted">Oi :) Assim que preencher esse formulário, vamos te enviar um e-mail com mais informações sobre a Hike e sobre como participar.</p>
                <div>
                  <div class="mc-field-group form-group">
                    <label for="mce-EMAIL">Email*</label>
                    <input type="email" value="" name="EMAIL" class="required email form-control" id="mce-EMAIL" placeholder="fulana@gmail.com">
                  </div>
                  <div class="mc-field-group form-group">
                    <label for="mce-FNAME">Nome*</label>
                    <input type="text" value="" name="FNAME" class="form-control" id="mce-FNAME" placeholder="Fulana de Tal">
                  </div>
                  <div class="mc-field-group form-group">
                    <label for="mce-PHONE">WhatsApp (opcional)</label>
                    <input type="tel" name="PHONE" class="form-control" value="" id="mce-PHONE" placeholder="(99) 99999-9999">
                  </div>
                  <div class="mc-field-group mt-4 mb-4">
                    <strong>Quero aprender a programar para:*</strong>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Usar no meu trabalho" name="INTEREST" id="mce-INTEREST-0"><label class="form-check-label" for="mce-INTEREST-0">Usar no meu trabalho</label></div>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Impulsionar carreira" name="INTEREST" id="mce-INTEREST-1"><label class="form-check-label" for="mce-INTEREST-1">Impulsionar carreira</label></div>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Usar na faculdade" name="INTEREST" id="mce-INTEREST-2"><label class="form-check-label" for="mce-INTEREST-2">Usar na faculdade</label></div>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Construir ideia própria" name="INTEREST" id="mce-INTEREST-3"><label class="form-check-label" for="mce-INTEREST-3">Construir ideia própria</label></div>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Desenvolver raciocínio" name="INTEREST" id="mce-INTEREST-4"><label class="form-check-label" for="mce-INTEREST-4">Desenvolver raciocínio</label></div>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Por curiosidade" name="INTEREST" id="mce-INTEREST-5"><label class="form-check-label" for="mce-INTEREST-5">Por curiosidade</label></div>
                    <div class="form-check"><input type="radio" class="form-check-input" value="Outro" name="INTEREST" id="mce-INTEREST-6"><label for="mce-INTEREST-6" class="form-check-label">Outro</label></div>
                  </div>`,
    'interest': `<p class="text-muted">Deixe seu e-mail para que te enviemos novidades quando lançarmos esse curso. Pode ser até que você ganhe uns descontos também :)</p><div class="form-group">
                    <input type="email" value="" name="EMAIL" class="email form-control" id="mce-EMAIL" placeholder="Email" required>
                  </div>`
  }

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

  $('.form-toggle').on('click', function(e) {
    $('#signupModal').modal('show');

    let actionType = e.target.attributes['data-target'].value;

    console.log(actionType);

    $('#mc-embedded-subscribe-form').attr('action', idToURL[actionType]);
    if(actionType === 'signup') {
      $('#form-fields').html(idToForm['signup']);
    } else {
      $('#form-fields').html(idToForm['interest']);
    }
  });

  $("#mc-embedded-subscribe-form").submit(function(e){
    console.log('HERE');
    e.preventDefault();
    submitSubscribeForm($("#mc-embedded-subscribe-form"), $("#form-success"));
  });

  function submitSubscribeForm($form, $resultElement) {
    $.ajax({
        type: "GET",
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: "json",
        contentType: "application/json; charset=utf-8",

        error: function(error){},

        success: function(data){
            if (data.result != "success") {
                $("#form-info").css("display", "block");
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

                $("#form-info").html('<p>' + message + '</p>');
            } else {
                $("#form-info").css("display", "none");
                $("#form-success").css("display", "block");
                $form.css("display", "none");
                $("#form-success").html('<i class="fa fa-check-circle-o"></i><p class="mt-3">Obrigado pela inscrição! Mandaremos e-mail para você em breve com informações sobre os próximos passos para se juntar à Hike :)</p>');
            }
        }
    });
  }

  $('#signupModal').on('hidden.bs.modal', function (e) {
    // do something...
    $("#mc-embedded-subscribe-form").css("display", "block");
    $("#form-success").css("display", "none");
    $("#form-info").css("display", "none");
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
