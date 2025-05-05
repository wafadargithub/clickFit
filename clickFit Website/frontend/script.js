$(document).ready(function () {
    // Numbers API AJAX
    $.ajax({
      url: "http://numbersapi.com/1/30/date?json",
      method: "GET",
      success: function (response) {
        $("#numberFact").text("Fun Fact: " + response.text);
      },
    });
  
    // Upload Form
    $("#uploadForm").submit(function (e) {
      e.preventDefault();
      let formData = new FormData(this);
  
      $.ajax({
        url: "/upload",
        type: "POST",
        data: formData,
        contentType: false,
        processData: false,
        success: function (res) {
          $("#uploadStatus").html(`<p class="text-success">${res.message}</p>`);
        },
        error: function () {
          $("#uploadStatus").html(`<p class="text-danger">Upload failed!</p>`);
        },
      });
    });
  });
  