let box = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newGameBtn = document.querySelector("#new-btn")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turnO = true
let count = 0
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    turnO = true
    count = 0
    enableBox()
    msg-msgContainer.classList.add("hide")
}


box.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO){
            box.innerText = "O"
            turnO = false
        }else{
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        count++
        let isWinner = checkWinner()
        if(count === 9 && isWinner){
            gameDraw()
        }
    })
})

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`
    msgContainer.classList.remove("hide")
}

const disableBox = () => {
    for(let b of box){
        b.disabled = true
    }
}

const enableBox = () => {
    for(let b of box){
        b.disabled = false
        b.innerText = ""
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`
    msgContainer.classList.remove("hide")
    disableBox()
}

const checkWinner = () => {
    for(let patterns of winPatterns){
        let pos1Val = box[patterns[0]].innerText
        let pos2Val = box[patterns[1]].innerText
        let pos3Val = box[patterns[2]].innerText
        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val)
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame)
reset.addEventListener("click", resetGame)
