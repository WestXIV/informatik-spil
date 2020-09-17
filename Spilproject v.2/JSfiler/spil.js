function setup() {
	createCanvas(windowWidth, windowHeight);
	// Sætter taster til de rigtige taster
	knap1 = 'q';
	knap2 = 't';
	knap3 = 'p';
	knap4 = 's';
	knap5 = 'h';
	knap6 = 'k';
	knap7 = 'c';
	knap8 = 'b';
	knap9 = 'm';

	// Initialisere alle variabler til false
	knap1_pressed = false;
	knap2_pressed = false;
	knap3_pressed = false;
	knap4_pressed = false;
	knap5_pressed = false;
	knap6_pressed = false;
	knap7_pressed = false;
	knap8_pressed = false;
	knap9_pressed = false;
}

// Sætter tiden til 0 så spillet starter med det samme
let tid = 0
let score = 0
const millisekunder_imellem = 9000
let tid_imellem = millisekunder_imellem

// Funktionen draw kører i loop indtil programmet er færdigt med at køre
function draw() {
	if (millis() > tid) {
		randomNumbersList = randomNumbers()
		tid += tid_imellem
	}
	let rigtige_taster = tasterne(randomNumbersList)
	let bool_om_der_er_givet_point = pointTjek(rigtige_taster)
	if (bool_om_der_er_givet_point === true) {
		tid = millis()
		tid_imellem = millisekunder_imellem
		tid_imellem -= (200 * score)
	}
	drawPoints(score);
	let tid_tilbage = Math.round((tid - millis()) / 1000);
	drawTime(tid_tilbage);
}

// Funktion der tjekker hvornår knapper er trykket ned
function keyPressed() {
	if (key === knap1) {
		print(knap1)
		knap1_pressed = true;
	}
	if (key === knap2) {
		print(knap2);
		knap2_pressed = true;
	}
	if (key === knap3) {
		print(knap3);
		knap3_pressed = true;
	}
	if (key === knap4) {
		print(knap4);
		knap4_pressed = true;
	}
	if (key === knap5) {
		print(knap5);
		knap5_pressed = true;
	}
	if (key === knap6) {
		print(knap6);
		knap6_pressed = true;
	}
	if (key === knap7) {
		print(knap7);
		knap7_pressed = true;
	}
	if (key === knap8) {
		print(knap8);
		knap8_pressed = true;
	}
	if (key === knap9) {
		print(knap9);
		knap9_pressed = true;
	}
}

// Funktion der tjekker hvornår der er givet slip på knapper
function keyReleased() {
	if (key === knap1) {
		print(knap1)
		knap1_pressed = false;
	}
	if (key === knap2) {
		print(knap2);
		knap2_pressed = false;
	}
	if (key === knap3) {
		print(knap3);
		knap3_pressed = false;
	}
	if (key === knap4) {
		print(knap4);
		knap4_pressed = false;
	}
	if (key === knap5) {
		print(knap5);
		knap5_pressed = false;
	}
	if (key === knap6) {
		print(knap6);
		knap6_pressed = false;
	}
	if (key === knap7) {
		print(knap7);
		knap7_pressed = false;
	}
	if (key === knap8) {
		print(knap8);
		knap8_pressed = false;
	}
	if (key === knap9) {
		print(knap9);
		knap9_pressed = false;
	}
}

// Ændrer indholdet på skærmen ifht. hvilke taster der er trykket på
function tasterne(randomNumbersList) {
	rigtige_taster = [0, 0, 0, 0, 0, 0, 0, 0, 0];
	// Tast 1
	if (randomNumbersList.includes(0) && knap1_pressed === true) {
		rigtige_taster[0] = 1;
		fill(0, 255, 0);
		rect(50, 50, 50, 50);
	}
	else if (randomNumbersList.includes(0)) {
		fill(0, 0, 255);
		rect(50, 50, 50, 50);
	}
	else if (knap1_pressed === true) {
		rigtige_taster[0] = -1;
		fill(255, 0, 0);
		rect(50, 50, 50, 50);
	}
	else if (knap1_pressed === false) {
		fill(255, 255, 255);
		rect(50, 50, 50, 50);
	}
	// Tast 2
	if (randomNumbersList.includes(1) && knap2_pressed === true) {
		rigtige_taster[1] = 1;
		fill(0, 255, 0);
		rect(150, 50, 50, 50);
	}
	else if (randomNumbersList.includes(1)) {
		fill(0, 0, 255);
		rect(150, 50, 50, 50);
	}
	else if (knap2_pressed === true) {
		rigtige_taster[1] = -1;
		fill(255, 0, 0);
		rect(150, 50, 50, 50);
	}
	else if (knap2_pressed === false) {
		fill(255, 255, 255);
		rect(150, 50, 50, 50);
	}
	// Tast 3
	if (randomNumbersList.includes(2) && knap3_pressed === true) {
		rigtige_taster[2] = 1;
		fill(0, 255, 0);
		rect(250, 50, 50, 50);
	}
	else if (randomNumbersList.includes(2)) {
		fill(0, 0, 255);
		rect(250, 50, 50, 50);
	}
	else if (knap3_pressed === true) {
		rigtige_taster[2] = -1;
		fill(255, 0, 0);
		rect(250, 50, 50, 50);
	}
	else if (knap3_pressed === false) {
		fill(255, 255, 255);
		rect(250, 50, 50, 50);
	}
	// Tast 4
	if (randomNumbersList.includes(3) && knap4_pressed === true) {
		rigtige_taster[3] = 1;
		fill(0, 255, 0);
		rect(50, 150, 50, 50);
	}
	else if (randomNumbersList.includes(3)) {
		fill(0, 0, 255);
		rect(50, 150, 50, 50);
	}
	else if (knap4_pressed === true) {
		rigtige_taster[3] = -1;
		fill(255, 0, 0);
		rect(50, 150, 50, 50);
	}
	else if (knap4_pressed === false) {
		fill(255, 255, 255);
		rect(50, 150, 50, 50);
	}
	// Tast 5
	if (randomNumbersList.includes(4) && knap5_pressed === true) {
		rigtige_taster[4] = 1;
		fill(0, 255, 0);
		rect(150, 150, 50, 50);
	}
	else if (randomNumbersList.includes(4)) {
		fill(0, 0, 255);
		rect(150, 150, 50, 50);
	}
	else if (knap5_pressed === true) {
		rigtige_taster[4] = -1;
		fill(255, 0, 0);
		rect(150, 150, 50, 50);
	}
	else if (knap5_pressed === false) {
		fill(255, 255, 255);
		rect(150, 150, 50, 50);
	}
	// Tast 6
	if (randomNumbersList.includes(5) && knap6_pressed === true) {
		rigtige_taster[5] = 1;
		fill(0, 255, 0);
		rect(250, 150, 50, 50);
	}
	else if (randomNumbersList.includes(5)) {
		fill(0, 0, 255);
		rect(250, 150, 50, 50);
	}
	else if (knap6_pressed === true) {
		rigtige_taster[5] = -1;
		fill(255, 0, 0);
		rect(250, 150, 50, 50);
	}
	else if (knap6_pressed === false) {
		fill(255, 255, 255);
		rect(250, 150, 50, 50);
	}
	// Tast 7
	if (randomNumbersList.includes(6) && knap7_pressed === true) {
		rigtige_taster[6] = 1;
		fill(0, 255, 0);
		rect(50, 250, 50, 50);
	}
	else if (randomNumbersList.includes(6)) {
		fill(0, 0, 255);
		rect(50, 250, 50, 50);
	}
	else if (knap7_pressed === true) {
		rigtige_taster[6] = -1;
		fill(255, 0, 0);
		rect(50, 250, 50, 50);
	}
	else if (knap7_pressed === false) {
		fill(255, 255, 255);
		rect(50, 250, 50, 50);
	}
	// Tast 8
	if (randomNumbersList.includes(7) && knap8_pressed === true) {
		rigtige_taster[7] = 1;
		fill(0, 255, 0);
		rect(150, 250, 50, 50);
	}
	else if (randomNumbersList.includes(7)) {
		fill(0, 0, 255);
		rect(150, 250, 50, 50);
	}
	else if (knap8_pressed === true) {
		rigtige_taster[7] = -1;
		fill(255, 0, 0);
		rect(150, 250, 50, 50);
	}
	else if (knap8_pressed === false) {
		fill(255, 255, 255);
		rect(150, 250, 50, 50);
	}
	// Tast 9
	if (randomNumbersList.includes(8) && knap9_pressed === true) {
		rigtige_taster[8] = 1;
		fill(0, 255, 0);
		rect(250, 250, 50, 50);
	}
	else if (randomNumbersList.includes(8)) {
		fill(0, 0, 255);
		rect(250, 250, 50, 50);
	}
	else if (knap9_pressed === true) {
		rigtige_taster[8] = -1;
		fill(255, 0, 0);
		rect(250, 250, 50, 50);
	}
	else if (knap9_pressed === false) {
		fill(255, 255, 255);
		rect(250, 250, 50, 50);
	}

	return rigtige_taster
}

// Giver en liste med 4 random numre tilbage
function randomNumbers() {
	let randomNumbersList = [];
	while (randomNumbersList.length != 4) {
		let num = Math.floor(Math.random() * 9);
		if (randomNumbersList.includes(num) == false) {
			randomNumbersList.push(num);
		}
	}
	return randomNumbersList;
}

// Tjekker om der skal gives point
function pointTjek(rigtige_taster) {
	if (rigtige_taster.includes(-1) === true) {
		return false
	}
	nummer_af_rigtige_taster = 0
	for (let i = 0; i < rigtige_taster.length; i++) {
		if (rigtige_taster[i] === 1) {
			nummer_af_rigtige_taster += 1;
		}
	}
	if (nummer_af_rigtige_taster === 4) {
		score += 1
		return true
	}
	else {
		return false
	}
}

// Tegner pointene
function drawPoints(score) {
	fill(255, 255, 255);
	rect(350, 120, 150, 110);
	fill(0, 0, 0);
	textSize(132);
	if (score >= 10) {
		text(score, 350, 220);
	}
	else {
		text(0, 354, 220);
		text(score, 425, 220);
	}
}

// Tegner Tiden
function drawTime(tid_tilbage) {
	fill(255, 255, 255);
	rect(470, 250, 30, 30);
	fill(0, 0, 0);
	textSize(25);
	text(tid_tilbage, 478, 274);
}