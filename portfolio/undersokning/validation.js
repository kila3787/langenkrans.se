$(function () {

    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function (element) {
            $(element)
                .closest('.form-group')
                .addClass('has-error');
        },
        unhighlight: function (element) {
            $(element)
                .closest('.form-group')
                .removeClass('has-error');
        },
        errorPlacement: function (error, element) {
            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $.validator.addMethod('strongPassword', function (value, element) {
        return this.optional(element) ||
            value.length >= 6 &&
            /\d/.test(value) &&
            /[a-ö]/i.test(value);
    }, 'ditt lösenord måste i alla fall bestå utav sex karaktärer och innehålla minst ett av följande tecken: \'.')

    $("#formular").validate({
        rules: {
            mejl: {
                required: true,
                email: true,
                remote: "http://localhost:3000/inputValidator"
            },
            losen: {
                required: true,
                strongPassword: true
            },
            losen2: {
                required: true,
                equalTo: '#lösen'
            },
            fornamn: {
                required: true,
                nowhitespace: true,
                lettersonly: true
            },
            efternamn: {
                required: true,
                nowhitespace: true,
                lettersonly: true
            },

            stad: {
                required: true,
                lettersonly: true
            },
            postkod: {
                required: true,
                postcodeSV: true
            },

        },
        messages: {
            mejl: {
                required: 'Fyll i en mejladress ',
                email: 'Var snäll och ange en<em>"äkta"</em> mejladress.',
            }
        }
    });

});


$('.button').click(function () {
    window.location = "undersökning/index.html" + this.id;
});
