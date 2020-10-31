function headsOrTails(value){
    let result = getResult()
    return result == value ? "YEAAAAAH " + value + " Wins" : "Not your lock day"
 }
 
 function getResult() {
     let values = ["heads", "tails"]
     return values[Math.floor(Math.random() * values.length)]
 }
 
 console.log(headsOrTails("heads"))