var text = "";
var i;

for (i = 0; i <= 10; i++)
{
   if(i % 2 == 0)
      text += "Count " + i + " is even<br>";
   else
      text += "Count " + i + " is odd<br>";   
}
document.getElementById("countloop").innerHTML = text;

function Loop()
{
	let text = "";
	var myNum = document.getElementById("input").value;

    if (parseInt(myNum) < 5)
		document.getElementById("loop").innerHTML = "<b>ERROR:<b> Number must be at least 5. Try again.";
    if (parseInt(myNum) > 20)
		document.getElementById("loop").innerHTML = "<b>ERROR:<b> Number must not be greater than 20. Try again.";
    else if (!Number.isInteger(parseInt(myNum)))
		document.getElementById("loop").innerHTML = "<b>ERROR:<b> Invalid input. Try again.";
    else
    {
        myNum = parseInt(myNum);
        for (i = 1; i <= myNum; i++)
        {
            text += "This is Number " + i + "<br>";
        }
        document.getElementById("loop").innerHTML = text;
    }
}
function List()
{
    let arr = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];
	let text = "";
    arr.forEach((item, index) => {
		if(index == arr.length - 1) 
			text += item;
		else
			text += item + ", ";
	});
    document.getElementById("List").innerHTML = text;
}


