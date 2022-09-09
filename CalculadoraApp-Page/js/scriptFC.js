let x
let op
let sgn

function suma(){
  x = parseInt(restg)
  restg = "0"
  sgn ="1"
  brest()
}

function resta(){
  x = parseInt(restg)
  restg = "0"
  sgn ="2"
  brest()
}

function multip(){
  x = parseInt(restg)
  restg = "0"
  sgn ="3"
  brest()
}

function division(){
  x = parseInt(restg)
  restg = "0"
  sgn ="4"
  brest()
}

function igual(){
  switch(sgn){
    case "1":
      op = x+parseInt(restg)
      restg = op
      arest()
      x
    break;
    case "2":
      op = x-parseInt(restg)
      restg = op
      arest()
      x
    break;
    case "3":
      op = x*parseInt(restg)
      restg = op
      arest()
      x
    break;
    case "4":
      op = x/parseInt(restg)
      restg = op
      arest()
      x
    break;
  }
}

function ac(){
  x = ""
  z = ""
  op = ""
  restg = ""
  brest()
}

function brest(){
  document.getElementById("result").innerHTML = 0
}