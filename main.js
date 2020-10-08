gameObjects = [] // array to iterate through during game loop
let paddle = new Paddle(); // instantiate paddle
let ball = new Ball(); // instantiate ball
gameObjects.push(paddle); // add paddle to array
gameObjects.push(ball); // add ball to array

function animate()
{
    requestAnimationFrame(animate); // waits until this animate is done and then calls it again
    ctx.clearRect(0, 0 , window.innerWidth, window.innerHeight); // clears the previous frame
    for (let i = 0; i < gameObjects.length; i++) // iterate through game objects
    {
        gameObjects[i].update(); // call update on each object
    }
}

animate();