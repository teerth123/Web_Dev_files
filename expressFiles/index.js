const express = require("express")
const app = express();

app.use(express.json())
//array of objects
const basket = [{
    balls: [{
        color: "red",
        size: "big"
    }, {
        color: "blue",
        size: "small"
    }]
}]

app.get('/', (req, res)=>{
    const no_balls = basket[0].balls.length
    let blue_balls = 0;
    let red_balls = 0;
    for(let i=0; i<no_balls; i++){
        if(basket[0].balls[i].color=="blue"){
            blue_balls++;
        }
        else red_balls++;
    }
    
    res.json({
        no_balls,
        blue_balls,  
        red_balls  
    })
    
})

app.post('/', (req, res)=>{
  const ball = req.body.ball;
  basket[0].balls.push({ball});
  res.json({
    message:"added"
  })
})

app.put('/', (req, res)=>{
  const ball = req.body.ball;
  for(let i=0; i<basket[0].balls.length; i++){
    if(basket[0].balls[i].color==ball.color)  basket[0].balls[i].color = "blue"
  }
  res.json({
    message:"updated"
  })
})

app.delete('/', (req, res)=>{
  const ball = req.body.ball;
  const update = [];
  for(let i=0; i<basket[0].balls.length; i++){
    if(basket[0].balls[i].color=="blue") update.push(basket[0].balls[i])
  }

  basket[0].balls = update;
  res.json({
    message: "deleted"
  })

})
app.listen(3000)