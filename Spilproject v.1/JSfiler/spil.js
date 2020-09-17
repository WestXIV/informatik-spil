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

function draw() {
// Når tasterne ikke er trykket
	if (knap1_pressed === false) {
			fill(255,255,255);
			rect(50,50,50,50);
	}
	if (knap2_pressed === false) {
			fill(255,255,255);
			rect(150,50,50,50);
	}
	if (knap3_pressed === false) {
			fill(255,255,255);
			rect(250,50,50,50);
	}
	if (knap4_pressed === false) {
			fill(255,255,255);
			rect(50,150,50,50);
	}
	if (knap5_pressed === false) {
			fill(255,255,255);
			rect(150,150,50,50);
	}
	if (knap6_pressed === false) {
			fill(255,255,255);
			rect(250,150,50,50);
	}
	if (knap7_pressed === false) {
			fill(255,255,255);
			rect(50,250,50,50);
	}
	if (knap8_pressed === false) {
			fill(255,255,255);
			rect(150,250,50,50);
	}
	if (knap9_pressed === false) {
			fill(255,255,255);
			rect(250,250,50,50);
	}

	// Når tasterne er trykket
	if (knap1_pressed === true) {
			fill(255,0,0);
			rect(50,50,50,50);
	}
	if (knap2_pressed === true) {
			fill(255,0,0);
			rect(150,50,50,50);
	}
	if (knap3_pressed === true) {
			fill(255,0,0);
			rect(250,50,50,50);
	}
	if (knap4_pressed === true) {
			fill(255,0,0);
			rect(50,150,50,50);
	}
	if (knap5_pressed === true) {
			fill(255,0,0);
			rect(150,150,50,50);
	}
	if (knap6_pressed === true) {
			fill(255,0,0);
			rect(250,150,50,50);
	}
	if (knap7_pressed === true) {
			fill(255,0,0);
			rect(50,250,50,50);
	}
	if (knap8_pressed === true) {
			fill(255,0,0);
			rect(150,250,50,50);
	}
	if (knap9_pressed === true) {
			fill(255,0,0);
			rect(250,250,50,50);
	}

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
	if (key === knap4) {
		print(knap4);
		knap4_pressed = true;
	}
	if (key === knap5) {
		print(knap5);
		knap5_pressed = true;
	}
	if (key === knap6) {
		print(knap6);
		knap6_pressed = true;
	}
	if (key === knap7) {
		print(knap7);
		knap7_pressed = true;
	}
	if (key === knap8) {
		print(knap8);
		knap8_pressed = true;
	}
	if (key === knap9) {
		print(knap9);
		knap9_pressed = true;
	}
}

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
	if (key === knap4) {
		print(knap4);
		knap4_pressed = false;
	}
	if (key === knap5) {
		print(knap5);
		knap5_pressed = false;
	}
	if (key === knap6) {
		print(knap6);
		knap6_pressed = false;
	}
	if (key === knap7) {
		print(knap7);
		knap7_pressed = false;
	}
	if (key === knap8) {
		print(knap8);
		knap8_pressed = false;
	}
	if (key === knap9) {
		print(knap9);
		knap9_pressed = false;
	}
}
