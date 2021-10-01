

const first = document.querySelector(".first");
const second = document.querySelector(".second");
const startBtn = document.querySelector(".start")
const result = document.querySelector(".result")
const checkBtn = document.querySelector(".check")
const image = document.querySelector('.image')
const refresh = document.querySelector(".refresh")
const answer = document.querySelector(".answer")

/* startBtn.addEventListener("click", addRandom) */
checkBtn.addEventListener("click", checkResult)
refresh.addEventListener("click", refreshAll)
answer.addEventListener("click", showAnswer)

function showAnswer() {
    result.value = +first.innerHTML + +second.innerHTML;
}

function checkResult() {
    if (Number(first.innerHTML) + Number(second.innerHTML) === +result.value) {
        const img = document.createElement("img")
        img.src = "https://emojio.ru/images/apple-b/1f44d.png"
        img.height = 200
        image.append(img)
    } else {
        const img = document.createElement("img")
        img.src = "https://emojio.ru/images/apple-b/1f44e.png"
        img.height = 200
        image.append(img)
    }
    
}

function addRandom() {
    first.innerHTML = Random()
    second.innerHTML = Random()
    result.value = ""

}

function Random() {
    return Math.round(Math.random() * 100);
}


function refreshAll() {
    image.innerHTML = ""
    first.innerHTML = ""
    second.innerHTML = ""
    result.value = ""
    addRandom()
}












