const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
let txt;
function setup() {
  createCanvas(400, 400);

  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);

  population = 100;
  for (let i=0; i<population;i++){
    flock.push(new Boid());
  }
   s = createInput("100");
  s.position(10, 30)

txt = createDiv('Tugas MK MA2213 VISUALISASI DALAM SAINS');
  txt.position(410, 10);
txt = createDiv('Simulasi Flocking');
  txt.position(410, 40);
txt = createDiv('Nama : Shakila Syafa Tiana');
  txt.position(410, 70);
txt = createDiv('NIM : 121160017');
  txt.position(410, 90);
txt = createDiv('Prodi : Matematika');
  txt.position(410, 110);

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function draw() {
  background(20);
  line(400,0,400,450);
  text("Populasi", 10, 20)
  text ("Align", 50,390)
  text("Cohesion", 180,390)
  text("Separation",308, 390)
  run()

  text("Tugas Pertemuan 8", 400,10)
  run()
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }

}
function run(){ 

}