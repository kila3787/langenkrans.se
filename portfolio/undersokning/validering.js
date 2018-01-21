$(function () {

            $("#regg").validate({
                rules: {
                    mejl: {
                        required: true,
                        mejl: true,
                        remote: "http://localhost:3000/inputValidator"
                    }

                }
            })
        }
