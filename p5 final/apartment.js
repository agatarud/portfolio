const windowRows = 2;
const windowCols = 3;
const outerMargin = 30;
const innerMargin = 80;
let rectSizeX, rectSizeY;

//let sceneNum = 1;
let frameNum = 10;

class Apartment {

  constructor(column, row, name, id, pair, sceneNum) {
    this.id = id;
    this.sceneNum = sceneNum;
    this.currentScene = 0;
    this.currentFrame = 0;
    this.column = column;
    this.row = row;
    this.name = name;
    this.scenes = [];
    this.pair = pair;
    this.size_w = 200;
    this.size_h = 250;
    this.pos_x = 100 + 250 * this.column;
    this.pos_y = 50 + 350 * this.row;
    this.night_image =loadImage(`night_scenes/${this.name}_night.png`);

    for (let i = 0; i < sceneNum; i++) {
      this.scenes.push({
        frames: [],
      });
      for (let j = frameNum - 1; j >= 0; j--) {
        this.scenes[i].frames.push(loadImage(`${this.name}/${this.name}_scene_${i}/${this.name}_s${i}_${j}.png`));
        console.log("Loaded image:" + `${this.name}/${this.name}_scene_${i}/${this.name}_s${i}_${j}.png` )

        
      }

      this.enabled = false;
      // rectSizeX =
      //   (width - outerMargin * 2 - innerMargin * (windowCols - 1)) / windowCols;
      // rectSizeY =
      //   (height - outerMargin * 2 - innerMargin * (windowRows - 1)) / windowRows;

    }
  }

  changeScene(scene) {
    this.currentScene = scene;
    this.currentFrame = 0;
    console.log(this.name + " is now in scene: " + this.currentScene )
  }

  containsMouse(mouseX, mouseY){
    //console.log (mouseX>=this.pos_x&& mouseX <= this.pos_x+this.size_w&& mouseY>=this.pos_y&&mouseY<=this.pos_y+this.size_h);
    return (mouseX>=this.pos_x&& mouseX <= this.pos_x+this.size_w&& mouseY>=this.pos_y&&mouseY<=this.pos_y+this.size_h);
    
    //console.log (mouseX, mouseY);
    //return (mouseX>=50&& mouseX <=250 && mouseY>=50&&mouseY<=300);
  }

  setActive(enabled){
    this.enabled = enabled;
  }

  toggleActive(){
    this.enabled = !this.enabled;
    console.log(this.name + " enabled: " + this.enabled )
  }

  getCurrentScene() {
    return this.currentScene
  }

  isEnabled() {
    return this.enabled

  }

  draw() {

    noStroke();
    fill(0);
    rect(this.pos_x-10, this.pos_y-10, this.size_w+20, this.size_h+20);
    rect(this.pos_x-15, this.pos_y+250, this.size_w+30, this.size_h-230);
    fill(237, 143, 78);
    rect(this.pos_x, this.pos_y, this.size_w, this.size_h);
    
    if(this.enabled){
    image(this.scenes[this.currentScene].frames[this.currentFrame], this.pos_x, this.pos_y, this.size_w, this.size_h);

    this.currentFrame += 1;
    this.currentFrame = this.currentFrame % frameNum;
      
    }
    else{
      image(this.night_image, this.pos_x-2, this.pos_y-2, this.size_w+4, this.size_h+4);
    }
  }
}
