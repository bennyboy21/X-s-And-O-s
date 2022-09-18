// Functions
function openMiniXOsGame(id, index) {
    document.getElementById(id).style.animation = "fullScreen 1s forwards 0s"
    document.getElementById("final-Game-Result-Holder").style.animation = "hideGameResults 1s forwards 0s"

    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        if(i != index) {
            miniGames[i].style.animation = "getRidOfOtherGames 1s forwards 0s"
        }
    }

    document.getElementById('h-Line-One').style.animation = "getRidOfMainBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "getRidOfMainBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "getRidOfMainBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "getRidOfMainBoard 1s forwards 0s"

    var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    placeMarkerContainers[index].style.display = 'grid'
    index = index + 1
    // var Xs = document.querySelectorAll('.game-'+index)
    
    // for(var i=0;i<Xs.length;i++) {
    //     Xs[i].classList.add("fullScreen")
    // }

    playingGame = true
    currentGame = index
    boxID = id
}

function placeMarker(id, index) {
    if(playingGame) {
        if(placesTaken[index] == 0) {
            
            if(playerOneTurn) {
                placesTaken[index] = 1
                console.log(index)
                index = index + 1
                document.getElementById(id).innerHTML = "<div class='x fullScreen game-"+currentGame+"'>+</div>"
                playerOneTurn = false
            } else {
                placesTaken[index] = 2
                console.log(index)
                index = index + 1
                document.getElementById(id).innerHTML = "<div class='o fullScreen game-"+currentGame+"'></div>"
                playerOneTurn = true
            }

            markersPlaced++

            if(placesTaken[0] == 1 && placesTaken[1] == 1 && placesTaken[2] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[0] == 1 && placesTaken[4] == 1 && placesTaken[8] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[2] == 1 && placesTaken[5] == 1 && placesTaken[8] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[2] == 2 && placesTaken[5] == 2 && placesTaken[8] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[0] == 1 && placesTaken[3] == 1 && placesTaken[6] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[1] == 1 && placesTaken[4] == 1 && placesTaken[7] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[2] == 1 && placesTaken[4] == 1 && placesTaken[6] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[3] == 1 && placesTaken[4] == 1 && placesTaken[5] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[3] == 1 && placesTaken[4] == 1 && placesTaken[5] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[6] == 1 && placesTaken[7] == 1 && placesTaken[8] == 1) {
                setTimeout(function() {
                    xWonGame()
                }, 500)
            } else if(placesTaken[0] == 2 && placesTaken[1] == 2 && placesTaken[2] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[0] == 2 && placesTaken[4] == 2 && placesTaken[8] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[0] == 2 && placesTaken[3] == 2 && placesTaken[6] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[1] == 2 && placesTaken[4] == 2 && placesTaken[7] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[2] == 2 && placesTaken[4] == 2 && placesTaken[6] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[3] == 2 && placesTaken[4] == 2 && placesTaken[5] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[3] == 2 && placesTaken[4] == 2 && placesTaken[5] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(placesTaken[6] == 2 && placesTaken[7] == 2 && placesTaken[8] == 2) {
                setTimeout(function() {
                    oWonGame()
                }, 500)
            } else if(markersPlaced == 9) {
                console.log("tied")
                setTimeout(function() {
                    tiedGame()
                }, 500)
            }
        }else {
            console.log("error")
        }
        // console.log(placesTaken)
    }
    // console.log(playingGame)
}

function tiedGame() {
    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
    document.getElementById("final-Game-Result-Holder").style.animation = "showGameResults 1s forwards 0s"
    
    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        miniGames[i].style.animation = "bringBackOtherGames 1s forwards 0s"
    }

    document.getElementById('h-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"

    // var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    // placeMarkerContainers[currentGame].style.display = 'grid'

    var Xs = document.querySelectorAll('.game-'+currentGame)
    console.log(currentGame)
    // console.log(Xs)

    for(var i=0;i<Xs.length;i++) {
        Xs[i].classList.remove("fullScreen")
        console.log(Xs[i])
    }

    document.getElementById("game-Result-"+currentGame).innerHTML = '<div class="tie-Container"><div class="x-Holder"><div class="x-Main-Tie">+</div></div><div class="o-Holder"><div class="o-Main-Tie"></div></div></div>'
    
    bigGamePlacesTaken[currentGame - 1] = 3
    playingGame = false
    currentGame = null
    placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    markersPlaced = 0
    
    checkBigGameWins()
}

function xWonGame() {
    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
    document.getElementById("final-Game-Result-Holder").style.animation = "showGameResults 1s forwards 0s"

    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        miniGames[i].style.animation = "bringBackOtherGames 1s forwards 0s"
    }

    document.getElementById('h-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"

    var hlo = document.querySelectorAll('.h-Line-One')
    var hlt = document.querySelectorAll('.h-Line-Two')
    var vlo = document.querySelectorAll('.v-Line-One')
    var vlt = document.querySelectorAll('.v-Line-Two')

    // hlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // hlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    // placeMarkerContainers[currentGame].style.display = 'grid'

    var Xs = document.querySelectorAll('.game-'+currentGame)
    console.log(currentGame)
    // console.log(Xs)

    for(var i=0;i<Xs.length;i++) {
        Xs[i].classList.remove("fullScreen")
        console.log(Xs[i])
    }

    document.getElementById("game-Result-"+currentGame).innerHTML = '<div class="x-Main">+</div>'
    
    bigGamePlacesTaken[currentGame - 1] = 1
    playingGame = false
    currentGame = null
    placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    markersPlaced = 0
    
    checkBigGameWins()
}

function oWonGame() {
    document.getElementById(boxID).style.animation = "exitFullScreen 1s forwards 0s"
    document.getElementById("final-Game-Result-Holder").style.animation = "showGameResults 1s forwards 0s"

    var miniGames = document.querySelectorAll('.mini-Section-Open')
    
    for(var i=0;i<miniGames.length;i++) {
        miniGames[i].style.animation = "bringBackOtherGames 1s forwards 0s"
    }

    document.getElementById('h-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('h-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-One').style.animation = "bringBackBoard 1s forwards 0s"
    document.getElementById('v-Line-Two').style.animation = "bringBackBoard 1s forwards 0s"

    var hlo = document.querySelectorAll('.h-Line-One')
    var hlt = document.querySelectorAll('.h-Line-Two')
    var vlo = document.querySelectorAll('.v-Line-One')
    var vlt = document.querySelectorAll('.v-Line-Two')

    // hlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // hlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlo[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // vlt[currentGame].style.animation = "exitFullScreen 1s forwards 0s"
    // var placeMarkerContainers = document.querySelectorAll(".place-Markers-Container")

    // placeMarkerContainers[currentGame].style.display = 'grid'

    var Xs = document.querySelectorAll('.game-'+currentGame)
    console.log(currentGame)
    // console.log(Xs)

    for(var i=0;i<Xs.length;i++) {
        Xs[i].classList.remove("fullScreen")
        console.log(Xs[i])
    }

    document.getElementById("game-Result-"+currentGame).innerHTML = '<div class="o-Main"></div>'
    
    bigGamePlacesTaken[currentGame - 1] = 2
    playingGame = false
    currentGame = null
    placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    markersPlaced = 0

    checkBigGameWins()
}

function checkBigGameWins() {
    if(bigGamePlacesTaken[0] == 3 && bigGamePlacesTaken[1] == 3 && bigGamePlacesTaken[2] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[0] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[8] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[0] == 3 && bigGamePlacesTaken[3] == 3 && bigGamePlacesTaken[6] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[1] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[7] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[2] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[6] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[3] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[5] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[3] == 3 && bigGamePlacesTaken[4] == 3 && bigGamePlacesTaken[5] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if(bigGamePlacesTaken[6] == 3 && bigGamePlacesTaken[7] == 3 && bigGamePlacesTaken[8] == 3) {
        setTimeout(function() {
            tiedBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 1 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[1] == 1 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[2] == 1 || bigGamePlacesTaken[2] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 1 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[8] == 1 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 1 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[3] == 1 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[6] == 1 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[1] == 1 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[7] == 1 || bigGamePlacesTaken[7] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[2] == 1 || bigGamePlacesTaken[2] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[6] == 1 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 1 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 1 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 1 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 1 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 1 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[6] == 1 || bigGamePlacesTaken[6] == 3) && (bigGamePlacesTaken[7] == 1 || bigGamePlacesTaken[7] == 3) && (bigGamePlacesTaken[8] == 1 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            xWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 2 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[1] == 2 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[2] == 2 || bigGamePlacesTaken[2] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 2 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[8] == 2 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[0] == 2 || bigGamePlacesTaken[0] == 3) && (bigGamePlacesTaken[3] == 2 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[6] == 2 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[1] == 2 || bigGamePlacesTaken[1] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[7] == 2 || bigGamePlacesTaken[7] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[2] == 2 || bigGamePlacesTaken[2] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[6] == 2 || bigGamePlacesTaken[6] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 2 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 2 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[3] == 2 || bigGamePlacesTaken[3] == 3) && (bigGamePlacesTaken[4] == 2 || bigGamePlacesTaken[4] == 3) && (bigGamePlacesTaken[5] == 2 || bigGamePlacesTaken[5] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if((bigGamePlacesTaken[6] == 2 || bigGamePlacesTaken[6] == 3) && (bigGamePlacesTaken[7] == 2 || bigGamePlacesTaken[7] == 3) && (bigGamePlacesTaken[8] == 2 || bigGamePlacesTaken[8] == 3)) {
        setTimeout(function() {
            oWonBigGame()
        }, 500)
    } else if(bigGameMarkersPlaced == 9) {
        tiedBigGame()
    }
    
    bigGameMarkersPlaced++
}

function xWonBigGame() {
    alert("X's won")
}

function oWonBigGame() {
    alert("O's won")
}

function tiedBigGame() {
    alert("Tied Game")
}


// Main
var boxID = ""
var placesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var markersPlaced = 0
var currentGame = null
var playingGame = false
var playerOneTurn = true
var bigGamePlacesTaken = [0, 0, 0, 0, 0, 0, 0, 0, 0]
var bigGameMarkersPlaced = 0