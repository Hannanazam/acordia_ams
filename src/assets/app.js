$(document).ready(function () {
$(".select2-single").select2({
  // your options here
}).on('change', function () {
  $(this).valid();
});
  // $.validator.addMethod('date', function (value, element, param) {
  //     return (value != 0) && (value <= 31) && (value == parseInt(value, 10));
  // }, 'Please enter a valid date!');
  // $.validator.addMethod('month', function (value, element, param) {
  //     return (value != 0) && (value <= 12) && (value == parseInt(value, 10));
  // }, 'Please enter a valid month!');
  // $.validator.addMethod('year', function (value, element, param) {
  //     return (value != 0) && (value >= 1900) && (value == parseInt(value, 10));
  // }, 'Please enter a valid year not less than 1900!');
  // $.validator.addMethod('username', function (value, element, param) {
  //     var nameRegex = /^[a-zA-Z0-9]+$/;
  //     return value.match(nameRegex);
  // }, 'Only a-z, A-Z, 0-9 characters are allowed');
  // $.validator.setDefaults({
  //     debug: true,
  //     success: "valid"
  // });
  // $.validator.setDefaults('company_info_certificate', function(value, element, param) {
  // 	return (value == null);
  // }, 'Registeration Certificate is required!');
  // var val = {
  //     rules: {
  //         company_name: "required",
  //         company_address: "required",
  //         company_registeration_number: "required",
  //         company_license_number: "required",
  //         typeofoffice: "required",
  //         email: {
  //             required: true,
  //             email: true
  //         },
  //         // company_info_certificate: {
  //         //     required: true
  //         //  },
  //         company_contact: {
  //             required: true,
  //             minlength: 10,
  //             digits: true
  //         },
  //         company_telephone: {
  //             required: true,
  //             minlength: 10,
  //             digits: true
  //         },
  //         company_country: {
  //             required: true
  //         },
  //         date: {
  //             date: true,
  //             required: true,
  //             minlength: 2,
  //             maxlength: 2,
  //             digits: true
  //         },
  //         month: {
  //             month: true,
  //             required: true,
  //             minlength: 2,
  //             maxlength: 2,
  //             digits: true
  //         },
  //         year: {
  //             year: true,
  //             required: true,
  //             minlength: 4,
  //             maxlength: 4,
  //             digits: true
  //         },
  //         username: {
  //             username: true,
  //             required: true,
  //             minlength: 4,
  //             maxlength: 16,
  //         },
  //         password: {
  //             required: true,
  //             minlength: 8,
  //             maxlength: 16,
  //         }
  //     },
  //     // Specify validation error messages
  //     messages: {
  //         company_name: "Company name is required",
  //         company_address: "Company name is required",
  //         // company_info_certificate:  "Registeration Certificate is required",
  //         typeofoffice:  "Please Select A Type Of Office",
  //         email: {
  //             required: "Email is required",
  //             email: "Please enter a valid e-mail",
  //         },
  //         company_contact: {
  //             required: "Phone number is requied",
  //             minlength: "Please enter min 10 digit mobile number",
  //             digits: "Only numbers are allowed in this field"
  //         },
  //         company_telephone: {
  //             required: "Phone number is requied",
  //             minlength: "Please enter min 10 digit mobile number",
  //             digits: "Only numbers are allowed in this field"
  //         },
  //         company_registeration_number: {
  //             required: "Registeration number is requied",
  //             minlength: "Please enter min 10 digit mobile number",
  //             digits: "Only numbers are allowed in this field"
  //         },
  //         company_license_number: {
  //             required: "License number is requied",
  //             minlength: "Please enter min 10 digit mobile number",
  //             digits: "Only numbers are allowed in this field"
  //         },

  //         company_country: {
  //             required: "Please Select A Country",
  //         },
  //         date: {
  //             required: "Date is required",
  //             minlength: "Date should be a 2 digit number, e.i., 01 or 20",
  //             maxlength: "Date should be a 2 digit number, e.i., 01 or 20",
  //             digits: "Date should be a number"
  //         },
  //         month: {
  //             required: "Month is required",
  //             minlength: "Month should be a 2 digit number, e.i., 01 or 12",
  //             maxlength: "Month should be a 2 digit number, e.i., 01 or 12",
  //             digits: "Only numbers are allowed in this field"
  //         },
  //         year: {
  //             required: "Year is required",
  //             minlength: "Year should be a 4 digit number, e.i., 2018 or 1990",
  //             maxlength: "Year should be a 4 digit number, e.i., 2018 or 1990",
  //             digits: "Only numbers are allowed in this field"
  //         },
  //         username: {
  //             required: "Username is required",
  //             minlength: "Username should be minimum 4 characters",
  //             maxlength: "Username should be maximum 16 characters",
  //         },
  //         password: {
  //             required: "Password is required",
  //             minlength: "Password should be minimum 8 characters",
  //             maxlength: "Password should be maximum 16 characters",
  //         }
  //     }
  // }
  $("#msform").multiStepForm(
      {
          // defaultStep:0,
          beforeSubmit: function (form, submit) {
              console.log("called before submiting the form");
              console.log(form);
              console.log(submit);
          },
          // validations: val,
      }
  ).navigateTo(0);
// });

$('.other_text_box').hide();
$("input[type='radio']").click(function () {
  if ($(".other_radio").is(":checked")) {
      $(this).parent().parent().find('.other_text_box').fadeIn();
  }
  else {
      $(".other_text_box").hide();
  }
});


function callcode(element_id) {
  var telInput = $("#" + element_id),

      errorMsg = $("#error-msg"),
      validMsg = $("#valid-msg");

  // initialise plugin
  telInput.intlTelInput({

      allowExtensions: true,
      formatOnDisplay: true,
      autoFormat: true,
      autoHideDialCode: true,
      autoPlaceholder: true,
      defaultCountry: "auto",
      ipinfoToken: "yolo",

      nationalMode: false,
      numberType: "MOBILE",
      //onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
      preferredCountries: ['sa', 'ae', 'qa', 'om', 'bh', 'kw', 'ma'],
      preventInvalidNumbers: true,
      separateDialCode: true,
      initialCountry: "us",
      geoIpLookup: function (callback) {
          $.get("http://ipinfo.io", function () { }, "jsonp").always(function (resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
          });
      },
      utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/11.0.9/js/utils.js"
  });

  var reset = function () {
      telInput.removeClass("error");
      errorMsg.addClass("hide");
      validMsg.addClass("hide");
  };

  // on blur: validate
  telInput.blur(function () {
      reset();
      if ($.trim(telInput.val())) {
          if (telInput.intlTelInput("isValidNumber")) {
              validMsg.removeClass("hide");
          } else {
              telInput.addClass("error");
              errorMsg.removeClass("hide");
          }
      }
  });

  // on keyup / change flag: reset
  telInput.on("keyup change", reset);




} callcode("phone");



    $('.tax_service').show();
    $('.area_wise_tax').hide();
    $("input[name='tax_detail']").click(function () {
        if ($("#tax-service").is(":checked")) {
            $(".tax_service").show();
            $(".area_wise_tax").hide();
        }
        else if ($("#area-wise-tax").is(":checked")) {
            $(".area_wise_tax").show();
            $(".tax_service").hide();
        }
    });

$('.file_input_val').change(function () {
    var file_name = $(this).val();
    console.log(file_name);
    $(this).parent().find('.file_uploader').text(file_name);
});

$(document).on('click', '.remove', function() {
  var id = $(this).data('id');
  $('#' + id).remove();
});

});
