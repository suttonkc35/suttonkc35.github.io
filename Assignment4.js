document.getElementById("calculate").addEventListener("click",() => {
    const input = parseFloat(document.getElementById("input").value)

    if (isNaN(input)) return;

    const tip1 = document.getElementById("tip");
    const tip = Number.parseInt(tip1.options[tip1.selectedIndex].value).toFixed(2);
    
    const tipInDollars = input * (tip / 100);
    const subTotal = parseFloat(input + tipInDollars);

    if (input >= 5, input <= 500){
    document.getElementById("TipTotal").innerHTML = `Your Tip is $${parseFloat(tipInDollars)}`;
    document.getElementById("Total").innerHTML = `Your Total today is $${parseFloat(subTotal)}`;
    document.getElementById("NaN").innerHTML = "";}
    else {
       document.getElementById("NaN").innerHTML = "Invaild Amount!";
       document.getElementById("TipTotal").innerHTML = "";
       document.getElementById("Total").innerHTML = "";}

});
