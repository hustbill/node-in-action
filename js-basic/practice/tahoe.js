var tahoe = {
  resorts: ["Kirkwood", "Squaw", "Alpine"],
  print: function(delay=1000) {
    // setTimeout(function() {  // cannot read property 'join ' of undefined
    setTimeout(() => {    //
      console.log(this.resorts.join(','))
    }, delay)
  }
}

tahoe.print()


function directions(...args) {
   var [start, ...remaining] = args
   var [finish, ...stops] = remaining.reverse()

   console.log(`drive through ${args.length} towns`)
   console.log(`start in ${start}`)
   console.log(`the destination is ${finish}`)
   console.log(`stopping ${stops.length} times in between`)
}


directions(
  "Truckee",
  "Taheo City",
  "Sunnyside",
  "Homewood",
  "Tahoma"
)
