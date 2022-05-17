function load(){
    player1_name=localStorage.getItem("player1_name " , player1_name);
    player2_name=localStorage.getItem("player2_name " , player2_name);
    score1=0;
    score2=0;
    row1=player1_name+ " : "+score1;
    row2=player2_name+ " : "+score2;
    document.getElementById("player1_name").innerHTML=row1;
    document.getElementById("player2_name").innerHTML=row2;
}
function send(){
    number1= document.getElementById("Number1").value;
    number2=document.getElementById("Number2").value;
    actual_answer=parseInt(number1)*parseInt(number2);
question_number="<h4>"+number1+" x "+number2+"</h4>";
input_box = "<br>Answer: <input type='number' id='input_check_box'>";
check_button = "<br><br> <button class= 'btn btn-warning'onclick='check()'>Check</button>"
row=question_number+input_box+check_button;
document.getElementById("output") . innerHTML = row;
document. getElementById ("Number1") . value = "";
document.getElementById ("Number2") . value= "";
}