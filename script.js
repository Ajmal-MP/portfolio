$(document).ready(function () {
  $("#signup-form").validate({
    rules: {
      name: "required",
      email: "required",
      name: {
        minlength: 4,
      },
      email: {
        email: true,
      },
    },
  });
});

//subject message
