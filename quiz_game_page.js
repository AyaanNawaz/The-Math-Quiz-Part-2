player1_name= localStorage.getItem("player1_name");
player2_name= localStorage.getItem("player2_name");
player1_score=0;
player2_score=0;
document.getElementById("player1_name").innerHTML=player1_name + ": " + player1_score;
document.getElementById("player2_name").innerHTML=player2_name + ": " + player2_score;
document.getElementById("player_question").innerHTML="Question Turn - " + player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name;
function back(){
    window.location="index.html";
}
question_turn="player1";
answer_turn="player2";
function check(){
get_answer=document.getElementById("input")

}
