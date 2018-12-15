<!--This is javascript.js -->

function ResetFields()
{
	$("input").each(function()
	{
		(this).text = "0"
	})
	$("#totalE").text("0");
	$("#totalA").text("0");
	$("#percentage").text("0%");
}
function SAPCalc()
{
	//var error = false;
    var percent = $("#percentage");

    var fallA = parseInt($("#fallA").val());
    var winterA = parseInt($("#winterA").val());
    var springA = parseInt($("#springA").val());
    var totalA = $("#results #totalA");
	
	var fallE = parseInt($("#fallE").val());
    var winterE = parseInt($("#winterE").val());
    var springE = parseInt($("#springE").val());
    var totalE = $("#results #totalE");
	
	var earnedAns = 0;
	var attemptAns = 0;
	
	if(fallE > fallA || fallA <= 0 || fallE < 0)
	{
		alert("Improper value for Earned Units. Fall will not be included.");
		//error = true;
	}
	else
	{
		attemptAns += Math.floor(fallA);
		earnedAns += Math.floor(fallE);
	}
	
	if(winterE > winterA || winterA <= 0 || winterE < 0)
	{
		alert("Improper value for Earned Units. Winter will not be included.");
		//error = true;
	}
	else
	{
		attemptAns += Math.floor(winterA);
		earnedAns += Math.floor(winterE);
	}
	
	if(springE > springA || springA < 0 || springE < 0)
	{
		alert("Improper value for Earned Units. Fall will not be included.");
		//error = true;
	}
	else
	{
		attemptAns += Math.floor(springA);
		earnedAns += Math.floor(springE);
	}
	if(attemptAns != 0)
	{
		var math = (earnedAns/attemptAns) * 100;
		math = Math.round(math);
		totalA.text(attemptAns);
		totalE.text(earnedAns);
		percent.text(math + "%");
	}
	else
	{
		alert("ERROR: Total Attempted Units can not be 0.");
	}
	
}

//Check to make sure that characters entered are numbers
function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : event.keyCode;
    if (charCode != 46 && charCode > 31
            && (charCode < 48 || charCode > 57))
        return false;

    return true;
}