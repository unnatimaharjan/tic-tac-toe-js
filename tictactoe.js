function myfunc(){
    var g1,g2,g3,g4,g5,g6,g7,g8,g9;
    g1=document.getElementById("g1").value;
    g2=document.getElementById("g2").value;
    g3=document.getElementById("g3").value;
    g4=document.getElementById("g4").value;
    g5=document.getElementById("g5").value;
    g6=document.getElementById("g6").value;
    g7=document.getElementById("g7").value;
    g8=document.getElementById("g8").value;
    g9=document.getElementById("g9").value;

    if(g1=="X" && g2=="X" && g3=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g4").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player X won');
    }

    else if(g1=="X" && g4=="X" && g7=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g8").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player X won');
    }

    else if(g1=="X" && g5=="X" && g9=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        window.alert('Player X won');
    }

    else if(g2=="X" && g5=="X" && g8=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player X won');
    }

    else if(g3=="X" && g6=="X" && g9=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g2").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        window.alert('Player X won');
    }

    else if(g3=="X" && g5=="X" && g7=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g2").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g8").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player X won');
    }

    else if(g4=="X" && g5=="X" && g6=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g9").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        window.alert('Player X won');
    }

    else if(g7=="X" && g8=="X" && g9=="X"){
        document.getElementById("print").innerHTML="Player X has won."
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g1").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g6").disabled = true;
        window.alert('Player X won');
    }

    else if(g1=="O" && g2=="O" && g3=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g4").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player O won');
    }

    else if(g1=="O" && g4=="O" && g7=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g8").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player O won');
    }

    else if(g1=="O" && g5=="O" && g9=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        window.alert('Player O won');
    }

    else if(g2=="O" && g5=="O" && g8=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player O won');
    }

    else if(g3=="O" && g6=="O" && g9=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g2").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        window.alert('Player O won');
    }

    else if(g3=="O" && g5=="O" && g7=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g2").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g6").disabled = true;
        document.getElementById("g8").disabled = true;
        document.getElementById("g9").disabled = true;
        window.alert('Player O won');
    }

    else if(g4=="O" && g5=="O" && g6=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g1").disabled = true;
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g9").disabled = true;
        document.getElementById("g7").disabled = true;
        document.getElementById("g8").disabled = true;
        window.alert('Player O won');
    }

    else if(g7=="O" && g8=="O" && g9=="O"){
        document.getElementById("print").innerHTML="Player O has won."
        document.getElementById("g2").disabled = true;
        document.getElementById("g3").disabled = true;
        document.getElementById("g1").disabled = true;
        document.getElementById("g4").disabled = true;
        document.getElementById("g5").disabled = true;
        document.getElementById("g6").disabled = true;
        window.alert('Player O won');
    }

    else if ((g1 == 'X' || g1 == 'O') && 
    (g2 == 'X'|| g2 == 'O') && 
    (g3 == 'X' || g3 == 'O') &&
    (g4 == 'X' || g4 == 'O') && 
    (g5 == 'X' || g5 == 'O') && 
    (g6 == 'X' || g6 == 'O') &&
    (g7 == 'X' || g7 == 'O') && 
    (g8 == 'X' || g8 == 'O') && 
    (g9 == 'X' || g9 == 'O')){
        document.getElementById('print').innerHTML = "Match Tie";
        window.alert('Match Tie');
    }

    else{
        if(flag==1){
            document.getElementById("print").innerHTML="Player X turn";
        }else{
            document.getElementById("print").innerHTML="Player O turn";
        }
    }
    
}

flag=1;

function myfunc2(){
    location.reload();
    document.getElementById("g1").value=" ";
    document.getElementById("g2").value=" ";
    document.getElementById("g3").value=" ";
    document.getElementById("g4").value=" ";
    document.getElementById("g5").value=" ";
    document.getElementById("g6").value=" ";
    document.getElementById("g7").value=" ";
    document.getElementById("g8").value=" ";
    document.getElementById("g9").value=" ";
}

function myfunc3(){
    if(flag==1){
        document.getElementById("g1").value="X";
        document.getElementById("g1").disabled=true;
        flag=0;
    }else{
        document.getElementById("g1").value="O";
        document.getElementById("g1").disabled=true;
        flag=1;
    }
}

function myfunc4(){
    if(flag==1){
        document.getElementById("g2").value="X";
        document.getElementById("g2").disabled=true;
        flag=0;
    }else{
        document.getElementById("g2").value="O";
        document.getElementById("g2").disabled=true;
        flag=1;
    }
}

function myfunc5(){
    if(flag==1){
        document.getElementById("g3").value="X";
        document.getElementById("g3").disabled=true;
        flag=0;
    }else{
        document.getElementById("g3").value="O";
        document.getElementById("g3").disabled=true;
        flag=1;
    }
}

function myfunc6(){
    if(flag==1){
        document.getElementById("g4").value="X";
        document.getElementById("g4").disabled=true;
        flag=0;
    }else{
        document.getElementById("g4").value="O";
        document.getElementById("g4").disabled=true;
        flag=1;
    }
}

function myfunc7(){
    if(flag==1){
        document.getElementById("g5").value="X";
        document.getElementById("g5").disabled=true;
        flag=0;
    }else{
        document.getElementById("g5").value="O";
        document.getElementById("g5").disabled=true;
        flag=1;
    }
}

function myfunc8(){
    if(flag==1){
        document.getElementById("g6").value="X";
        document.getElementById("g6").disabled=true;
        flag=0;
    }else{
        document.getElementById("g6").value="O";
        document.getElementById("g6").disabled=true;
        flag=1;
    }
}

function myfunc9(){
    if(flag==1){
        document.getElementById("g7").value="X";
        document.getElementById("g7").disabled=true;
        flag=0;
    }else{
        document.getElementById("g7").value="O";
        document.getElementById("g7").disabled=true;
        flag=1;
    }
}

function myfunc10(){
    if(flag==1){
        document.getElementById("g8").value="X";
        document.getElementById("g8").disabled=true;
        flag=0;
    }else{
        document.getElementById("g8").value="O";
        document.getElementById("g8").disabled=true;
        flag=1;
    }
}

function myfunc11(){
    if(flag==1){
        document.getElementById("g9").value="X";
        document.getElementById("g9").disabled=true;
        flag=0;
    }else{
        document.getElementById("g9").value="O";
        document.getElementById("g9").disabled=true;
        flag=1;
    }
}