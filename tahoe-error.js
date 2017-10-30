var tahoe = {
  resorts: ["Kirkwood", "Squaw", "Alpine"],
  print: function(delay=1000) {
    setTimeout(function() {
      console.log(this.resorts.join(','))
    }, delay)
  }
}

tahoe.print() // cannot read property 'join ' of undefined
