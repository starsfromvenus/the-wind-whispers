//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE */
function setup() {
  createCanvas(1260, 1000);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("mistyrose");
  text(
    "its a hot summer night in july, you hear crickets chirping,\nthe wind calls out to you, what does it say?",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
enterButton = new Sprite(width/2, height/2 + 100)
a1Button = new Sprite(-200, -200)
a2Button = new Sprite(-50, -50)
b1Button = new Sprite(-150, - 150)
b2Button = new Sprite(-100, - 100)
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
enterButton.w = 350;
enterButton.h = 100;
enterButton.collider = 'k';
enterButton.color = "palegreen";
enterButton.text = '"your sins are not a reflection of you.\nyour eyes burn with the love of those\nwho you have touched.\n live a little while longer?"'; 
  
  // Add A1 button

  // Add A2 button


  // Check enter button
  if (enterButton.mouse.presses()) {
    showScreen1();
    screen = 1;
  }

  if (screen == 1) {
    if (a1Button.mouse.presses()) {
      showScreen2();
      screen = 2;
    } else if (a2Button.mouse.presses()) {
      showScreen5();
      screen = 5;
    }
  } else if (screen == 2) {
    if (b1Button.mouse.presses()) {
      showScreen3();
      screen = 3;
    } else if (b2Button.mouse.presses()) {
      showScreen4();
      screen = 4;
    }
  }

  print(screen);
}
/* FUNCTIONS TO DISPLAY SCREENS */
function showScreen1 (){
    background('palegreen')
    text('the words ring in your ears,\nhow do you reply? ',width/2, height/2 - 100);
    enterButton.pos = {x: - 100, y: -100};
    a1Button.pos = {x: 100, y: 100};
   a1Button.pos = {x: width/2-100, y: height/2+100}
    a1Button.w = 150;
    a1Button.h = 150;
    a1Button.collider = 'k';
    a1Button.color = "lightblue";
    // a1Button.text = 'test';
    a1Button.text = 'the sins i pursue\n haunt me. in the\nmirror she\nlaughs at me.\ni listen.';
    a2Button.pos = {x: width/2+100, y: height/2+100}
    a2Button.w = 150;
    a2Button.h = 150;
    a2Button.collider = 'k';
    a2Button.color = "lightpink";
    a2Button.text = 'the sun sets\noff the horizon,\ni think i will\nstick around\nfor another day';  
}
function showScreen2(){
  background ('lightblue');
  text('the wind sings, "the mirror is nothing but glass.\n she can crack. she can break.\n your reflection is a hazy ghost.\n will you let her haunt you?"',width/2, height/2 - 100);
  a1Button.pos = {x: -200, y: -200}
  a2Button.pos = {x: -300, y: -300}
  b1Button.pos = {x: width/2-100, y: height/2+100}
  b1Button.w = 190;
  b1Button.h = 175;
  b1Button.collider = 'k';
  b1Button.color = "plum";
  b1Button.text = 'i hold the controls.\ni chose not to let\n my sins define me.\n i will stick around\nanother day.'; 
  b2Button.pos = {x: width/2+100, y: height/2+100}
  b2Button.w = 190;
  b2Button.h = 175;
  b2Button.collider = 'k';
  b2Button.color = "lavender";
  b2Button.text = "i cannot leave her.\ni welcome ghosts\ninto my home,\n into my heart. she is\nthe only one\n who keeps me\ncompany";   
}
function showScreen3 (){
  background('plum')
  text("the windchimes above your porch whisper in agreement.\nwhen you walk into your house you break every mirror.\n identity is both a cage and a construct.\nyou will not let the dead haunt you any further.\nyour mother finds you sobbing in the foyer.\n she feeds you pomegrantes. the beads \n taste like god.",width/2, height/2 - 80);
  b1Button.pos = {x: -200, y: -200}
  b2Button.pos = {x: - 300, y: - 300}
}
function showScreen4 (){
  background('lavender')
  text("ghosts are greedy. they envy the living. they want you\nto keep them by your side, if only its in your tomb.\nwhen the mirror taunts, you listen, when she calls, you come.\nyou stand on feet shes given you, but they're rotten.\nthey rust. they move on their own.\nyou walk into the woods, you don't ever come out.",width/2, height/2 - 100);
  b1Button.pos = {x: -200, y: -200}
  b2Button.pos = {x: - 300, y: -300}  
}
function showScreen5(){
  background('lightpink')
  text('your mother calls you in for dinner, the rocking chair\ncreaks as you get up. you feel the breeze tickle\nyour neck as you stand in the doorway, closing the door.\nyou make it to eighty, the light at the end of the tunnel\ndisplays her sillhouette',width/2, height/2-50);
  a1Button.pos = {x: -200, y: -200};
  a2Button.pos = {x: -500, y: -500};
}


