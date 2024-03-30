// Form Validate
// $(function() {
// 	if($('#contactForm').length) {
// 		$('#contactForm').validate({
// 			rules: {
// 				name: {
// 					required: true
// 				},
// 				furigana: {
// 					required: true
// 				},
// 				tel: {
// 					required: true,
// 					number: true
// 				},
// 				email: {
// 					required: true,
// 					email: true
// 				},
// 				email_conf: {
// 					required: true,
// 					email: true,
// 					equalTo: '#email'
// 				},
// 				content: {
// 					required: true,
// 					maxlength: 100
// 				},
// 				'privacy_policy[]': {
// 					required: true
// 				}
// 			},
// 			messages: {
// 				name: {
// 					required: '必須項目です。入力をお願いします。'
// 				},
// 				furigana: {
// 					required: '必須項目です。入力をお願いします。'
// 				},
// 				email: {
// 					required: '必須項目です。入力をお願いします。',
// 					email: 'Eメールの形式で入力して下さい。'
// 				},
// 				email_conf: {
// 					required: '必須項目です。入力をお願いします。',
// 					email: 'Eメールの形式で入力して下さい。',
// 					equalTo: '入力した値が一致しません。'
// 				},
// 				tel: {
// 					required: '必須項目です。入力をお願いします。',
// 					number: '数字のみ入力出来ます。'
// 				},
// 				content: {
// 					required: '必須項目です。入力をお願いします。',
// 					maxlength: '最大文字数100を超えています。文章を短くして下さい。'
// 				},
// 				'privacy_policy[]': {
// 					required: '必須項目です。選択して下さい。'
// 				}
// 			},
// 			errorPlacement: function(error, element) {
// 				if(element.attr("name") == 'privacy_policy[]') {
// 					error.insertAfter(".checkbox_label");
// 				} else {
// 					error.insertAfter(element);
// 				}
// 			}
// 		});
// 	}
// });

// Hamburger Menu
const hamMenu = document.querySelector('.hamburger');
const headerHam = document.querySelector('.header_hamburger-nav');
const headerMenuList = document.querySelectorAll('.header_menu-list');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  headerHam.classList.toggle('active');
});

hamMenu.addEventListener('click', () => {
  headerMenuList.removeClass('active');
});

// Accordion Menu
$(function() {
  $('.js_accordion-title').on('click', function() {
    $(this).next().slideToggle(200),
    $(this).toggleClass('active', 200)
  })
});

// Scroll-hint
new ScrollHint('.js-scrollable', {
  i18n: {
    suggestiveShadow: true,
    scrollable: 'スクロールできます'
  }
});

//コンタクトのエラーメッセージ
// $('input,textarea').each(function () {
// 	$(this).on('change', function () {
// 		if ($(this).is(':invalid')) {
// 			$(this).parents('.contact_form').addClass('is-error');
// 			$(this).parents('.contact_form').find('.error-text').attr('aria-hidden', false);
// 		} else {
// 			$(this).parents('.contact_form').removeClass('is-error');
// 			$(this).parents('.contact_form').find('.error-text').attr('aria-hidden', true);
// 		}
// 	});
// });

// $('#js-submit').on('click', function () {
// 	$('input,textarea').each(function () {
// 		if ($(this).is(':invalid')) {
// 			$(this).parents('.contact_form').addClass('is-error');
// 			$(this).parents('.contact_form').find('.error-text').attr('aria-hidden', false);

// 		} else {
// 			$(this).parents('.contact_form').removeClass('is-error');
// 			$(this).parents('.contact_form').find('.error-text').attr('aria-hidden', true);
// 		}
// 	});
// });

//コンタクト
// $(document).ready(function () {
// 	$('#contactForm').submit(function (event) {
// 		var formData = $('#contactForm').serialize();
// 		$.ajax({
// 			url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLScOiGR01os6IFoUDUj9vx0TIaMRtNeM7y-Wi6v4BHvLB86aQA/formResponse",
// 			data: formData,
// 			type: "POST",
// 			dataType: "xml",
// 			statusCode: {
// 				0: function () {
// 					$(".end-message").slideDown();
// 					$(".btn").fadeOut();
// 					$(".btn-center").fadeOut();
// 					window.location.href = "thanks.html";
// 				},
// 				200: function () {
// 					$(".false-message").slideDown();
// 				}
// 			}
// 		});
// 		event.preventDefault();
// 	});
// });

//form-desabled
// $(function () {
// 	$(document).on('input', function () {
// 		var flg1 = $('[required]:is([type=text],[type=tel],[type=email],textarea)').is(function () { return $(this).val() == ""; });
// 		$('#js-submit').prop('disabled', flg1);
// 	});
// });
