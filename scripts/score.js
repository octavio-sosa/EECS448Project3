class Score {
/*
 * @pre: canvas must be declared
 * @post: initializes player's score object
 * @param currentScore: integer value representing the player's current score
 * @param targetScore: integer value representing the score to earn the next life
 */
  constructor(currentScore, targetScore) {
    this.currentScore = currentScore
    this.targetScore = targetScore
    this.scale = 0.00004
    this.position = {
      x: canvas.width - canvas.width*canvas.height*this.scale*0.25,
      y: canvas.height*canvas.width*this.scale
    }
    this.fontSize = canvas.height*canvas.width*0.00004
  }

/*
 * @pre: gameObjects must be declared with PlayerStatus object
 * @post: updates the position of the score on canvas
 * @post: if current score equals targetScore, then doubles the target score and adds 1 life
 * @param currentScore: integer value representing the player's current score
 * @param targetScore: integer value representing the score to earn the next life
 */
  update(currentScore, targetScore) {
    this.position = {
      x: canvas.width - canvas.width*canvas.height*this.scale*0.25,
      y: canvas.height*canvas.width*this.scale
    }
    this.fontSize = canvas.height*canvas.width*0.00004
    this.currentScore = currentScore

    if(currentScore === targetScore) {
      //add life
      gameObjects[OBJ_KEYS.PLAYERSTATUS].targetScore *= 2
      gameObjects[OBJ_KEYS.PLAYERSTATUS].currentLives++ 
    }
  }

/*
 * @pre: context must be declared
 * @post: draws the current score at upper-left corner of canvas
 */
  draw() {
    ctx.font = this.fontSize + 'px serif'
    ctx.fillStyle = object_color
    ctx.textAlign = 'right'
    ctx.fillText(this.currentScore + '', this.position.x, this.position.y)
    //TODO draw temp life based on targetscore and current score
  }
}
