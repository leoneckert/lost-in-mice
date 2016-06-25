var m;
var d = 0;
var c = 0;
var show_b = false;
function preload() {
  m = loadImage("assets/mouse2_s.png");
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  var mh = 80;
  var mw = 25;
  b = createButton('___B___');
  b.position(width/2 - mw,height/2 - 30 - 30);
  b.mousePressed(toggle_b);
  b.style('color', '#F40023');
  
  zero = createButton('___0___');
  zero.position(width/2 - mw,height/2 - 30 + 0);
  zero.mousePressed(change_zero);
  // zero.style('color', '#F40023');
  
  one = createButton('___1___');
  one.position(width/2 - mw,height/2 - 30 + 30);
  one.mousePressed(change_one);
  
  four = createButton('___4___');
  four.position(width/2 - mw,height/2 - 30 + 60);
  four.mousePressed(change_four);
  
  sevenH = createButton('__700__');
  sevenH.position(width/2 - mw,height/2 - 30 + 90);
  sevenH.mousePressed(change_sevenH);
  
  hide_all_b();


}

function hide_all_b(){
  zero.hide();
  one.hide();
  four.hide();
  sevenH.hide();
}

function show_all_b(){
  zero.show()
  one.show()
  four.show()
  sevenH.show()
}

function toggle_b(){
  if (!show_b){
    show_b = true;
    show_all_b()
  }else{
    show_b = false
    hide_all_b();
  }
}

function change_zero(){
  c = 0;
}
function change_one(){
  c = 1;
}
function change_four(){
  c = 4;
}

function change_sevenH(){
  c = 700;
}

function mice(x, y, d, c){
  d = 100;
  for (var i = 0; i < width/40; i ++){
    for (var j = 0; j < height/40; j ++){
      if(i !== 0 || j !== 0){
        rotate(PI/c)
        image(m,mouseX-9 + d*i,mouseY-6 + d*j,25,25);
        image(m,mouseX-9 - d*i,mouseY-6 - d*j,25,25);
        image(m,mouseX-9 + d*i,mouseY-6 - d*j,25,25);
        image(m,mouseX-9 - d*i,mouseY-6 + d*j,25,25);
      }
    }
  }
}

function draw() {
  background(255);

  mice(mouseX, mouseY, 0, c);
  // print(s.value());
}