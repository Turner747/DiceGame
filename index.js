
function setDice(player1, player2) {

	let player1Container = document.querySelector("img.img1");
	let player2Container = document.querySelector("img.img2");
    
    player1Container.setAttribute("src", "images/dice"+ player1 + ".png");
	player2Container.setAttribute("src", "images/dice" + player2 + ".png");
}


function setTitle(player1, player2){

    let titleContainer = document.querySelector("h1");
    let player1Container = document.getElementsByTagName("p")[0];
    let player2Container = document.getElementsByTagName("p")[1];

    if(player1 > player2){
        titleContainer.innerHTML = "Player 1 Wins!";
        player1Container.innerHTML += " 🚩";
    }
    else if (player2 > player1){
        titleContainer.innerHTML = "Player 2 Wins!";
        player2Container.innerHTML += " 🚩";
    } 
    else {
        titleContainer.innerHTML = "It's a Draw!";
    }
}


function play(){

    if(window.name == ''){
        setDice(6,6);
        window.name = '1';
        return;
    }

    let player1 = Math.ceil(Math.random() * 6);
    let player2 = Math.ceil(Math.random() * 6);

    setDice(player1, player2);
    setTitle(player1, player2);
}







// class DiceModel {
//     constructor(player1, player2, index){
//         self.player1 = player1;
//         self.player2 = player2;
//         self.index = index;
//     }
// }




// function setCookie(cname, cvalue, exdays) {
// 	const d = new Date();
// 	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
// 	let expires = "expires=" + d.toUTCString();
// 	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
// }


// function getCookie(cname) {
// 	let name = cname + "=";
// 	let ca = document.cookie.split(";");
// 	for (let i = 0; i < ca.length; i++) {
// 		let c = ca[i];
// 		while (c.charAt(0) == " ") {
// 			c = c.substring(1);
// 		}
// 		if (c.indexOf(name) == 0) {
// 			return c.substring(name.length, c.length);
// 		}
// 	}
// 	return "";
// }

// function checkCookie(cname) {
// 	let cookie = getCookie(cname);
// 	if (cookie != "") {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }