let Apartments = [];
let jumpingApartment, guitarApartment, workoutApartment, grannyApartment, coupleApartment, smokingApartment;
let currentApartment = -1;


function preload() {


  jumpingApartment = new Apartment(0, 0, "jumping", 0, 3, 1);
  Apartments.push(jumpingApartment);
  guitarApartment = new Apartment(1, 0, "guitar", 1, 2, 2);
  Apartments.push(guitarApartment);
  workoutApartment = new Apartment(2, 0, "workout", 2, 1, 2);
  Apartments.push(workoutApartment);
  grannyApartment = new Apartment(0, 1, "granny", 3, [0, 1],3);
  Apartments.push(grannyApartment);
  coupleApartment = new Apartment(1, 1, "couple", 4, 5, 1);
  Apartments.push(coupleApartment);
  smokingApartment = new Apartment(2, 1, "smoking", 5, 4, 2);
  Apartments.push(smokingApartment);

  night_jumping=loadImage("night_scenes/jumping_night.png");
  night_guitar=loadImage("night_scenes/guitar_night.png");
  night_workout=loadImage("night_scenes/workout_night.png");
  night_granny=loadImage("night_scenes/granny_night.png");
  night_couple=loadImage("night_scenes/couple_night.png");
  night_smoking=loadImage("night_scenes/smoking_night.png");

  pipes = loadImage("night_scenes/pipes.png");
  crack1 = loadImage("night_scenes/crack1.png");
  ladder = loadImage("night_scenes/ladder.png");
  audio_jumping_0 = loadSound("audio/jumping_s0.mp3");
  audio_guitar_0 = loadSound("audio/guitar_s0.wav");
  audio_workout_0 = loadSound("audio/workout_0.mp3");
  audio_workout_1 = loadSound("audio/TV_noise.mp3");
  audio_granny_0 = loadSound("audio/blink.wav");
  audio_granny_1 = loadSound("audio/pipes.wav");
  audio_granny_2 = loadSound("audio/bark.wav");
  audio_couple_0 = loadSound("audio/jazz.wav");

}

function setup() {
  createCanvas(windowWidth, windowHeight); //deleted SVG

  frameRate(10);
}

function draw() {

  currentApartment = -1;
  background(33, 38, 76);
  for (let i = 0; i < Apartments.length; i++) {
    //clear();
    Apartments[i].draw();
    if(Apartments[i].containsMouse(mouseX, mouseY))
    {
      currentApartment = i;
    }
  }

  image(pipes, 10, 0, 60, 850);
  image(crack1, 558, 330, 60, 60);
  image(ladder, 840, 0, 100, 940);
}

function mousePressed() {

  if(currentApartment >= 0){
    console.log(Apartments[currentApartment].id);
    


    Apartments[currentApartment].toggleActive(true);

    //AUDIO

    if(jumpingApartment.isEnabled()){
      audio_jumping_0.loop();
      audio_jumping_0.playMode('restart');
    }
    if(!jumpingApartment.isEnabled()){
      audio_jumping_0.stop();
    }

    if(guitarApartment.isEnabled()){
      audio_guitar_0.loop();
      audio_guitar_0.playMode('restart');
    }else{
      audio_guitar_0.stop();
    }
    if(workoutApartment.isEnabled()){
      audio_workout_0.loop();
      audio_workout_0.playMode('restart');
    }else{
      audio_workout_0.stop();
    }

    if(workoutApartment.isEnabled() && guitarApartment.isEnabled()){
      audio_workout_1.loop();
    }else{
      audio_workout_1.stop();
    }

    if(grannyApartment.isEnabled()){
      audio_granny_0.loop();
      audio_granny_0.playMode('restart');
    }else{
      audio_granny_0.stop();
    }

    if(grannyApartment.isEnabled() && guitarApartment.isEnabled()){
      audio_granny_2.loop();
      audio_granny_2.playMode('restart');
    }else{
      audio_granny_2.stop();
    }

    if(coupleApartment.isEnabled()){
      audio_couple_0.loop();
      audio_couple_0.playMode('restart');

    }else{
      audio_couple_0.stop();
    }



    if(grannyApartment.isEnabled() && grannyApartment.getCurrentScene() == 0 && jumpingApartment.isEnabled()){
      grannyApartment.changeScene(1);
      audio_granny_1.loop();
      audio_granny_1.playMode('restart');

  }
    else if(grannyApartment.getCurrentScene() == 1 && !jumpingApartment.isEnabled()){
      grannyApartment.changeScene(0);
      audio_granny_1.stop();

    }



    if( grannyApartment.isEnabled() && grannyApartment.getCurrentScene() == 0 && guitarApartment.isEnabled()){
      grannyApartment.changeScene(2);
      guitarApartment.changeScene(1);
      audio_guitar_0.loop();
    }
    else if( grannyApartment.getCurrentScene() == 2 && guitarApartment.getCurrentScene() == 1 && ( !grannyApartment.isEnabled() || !guitarApartment.isEnabled() ) ) {
      grannyApartment.changeScene(0);
      guitarApartment.changeScene(0);
    }


    if(smokingApartment.isEnabled() && coupleApartment.isEnabled()){
      smokingApartment.changeScene(1);
    }
    else{
      smokingApartment.changeScene(0);
    }

    if(guitarApartment.isEnabled() && guitarApartment.getCurrentScene() == 0 && workoutApartment.isEnabled()){
      guitarApartment.changeScene(1);
      workoutApartment.changeScene(1)
      audio_workout_1.loop();
    }
    else if(guitarApartment.getCurrentScene() == 1 && workoutApartment.getCurrentScene() == 1 && (!guitarApartment.isEnabled() || !workoutApartment.isEnabled())){
      guitarApartment.changeScene(0);
      workoutApartment.changeScene(0)
    }
  }


  }






