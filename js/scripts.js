//Galoon to Litters

var gTL = function(gallon) {
	return gallon/0.26417;
};

//Tablespoon to teaspoon

var convertTableToTea = function(tspoon) {
	return tspoon + " tablespoons" + " are equal to " + tspoon*3 + " teaspoons.";
};

$(document).ready(function() {
  $("form#gcvt").submit(function(event){
    event.preventDefault();
		var gallonInput = parseInt($("#gallon").val());
		var galLtConvert = gTL(gallonInput);
		$("#outputLiter").text(galLtConvert);
	});
	$("form#tcvt").submit(function(event){
    event.preventDefault();
		var tbsInput = parseInt($("#tbs").val());
		var tbsTspConvert = convertTableToTea(tbsInput);
		$("#outputTsp").text(tbsTspConvert);
		$("h1").show();
  });
});
