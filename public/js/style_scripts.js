$(".navbar").on("show.bs.collapse", function(e) {
  console.log("open")
	$(".navbar").css("background-color", "#426BF4");
});

$(".navbar").on("hide.bs.collapse", function(e) {
  console.log("close")
	$(".navbar").css("background-color", "transparent");
});
