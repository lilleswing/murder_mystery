var secrets = {};
var needsMap = {
  'blacksparrow': "1",
  'burntbeard': "2",
  'hawthorne': "3",
  'barburosa': "4"
}


$.ajax({
  url: "static/secrets.json",
  method: "GET",
  success: function(x) {
    secrets = x;
  }
});



$("#passwordButton").click(function() {
  var password = $("#passwordInput").val().toLowerCase();
  if (!(password in secrets['password_roles'])) {
    console.log("Bad Password");
    $("#secrets").html("Wrong Password Matey");
    return
  }
  var myRole = secrets.password_roles[password];
  console.log(myRole);
  var my_img = "static/img/" + myRole + ".png";
  var imgHtml = $("<img/>").attr({
    "src": my_img
  });
  $("#secrets").empty();
  imgHtml.appendTo("#secrets");

  if (!(myRole in needsMap)) {
    return;
  }

  var mapImg = "static/img/map" + needsMap[myRole] + ".png";

  $("#secrets").append("<br><h3>You have a map piece Matey!</h3><br>");

  var mapHtml = $("<img/>").attr({
    "src": mapImg
  });
  $("#secrets").append(mapHtml);
});
