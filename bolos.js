let strubg = '';
let scoresum = 0;
function tiro() {
    for (let i = 1; i <= 10; i++) {
        var tiro1 = Math.round(Math.random() * 10)
        var rest = 10 - tiro1
        var tiro2 = Math.round(Math.random() * rest)
        var score = tiro1 + tiro2
        if (tiro1 === 10 || tiro2 === 10){
            score += score
        }
        else if(score === 10){
            score += tiro1
        }
        scoresum = scoresum + score
        strubg = strubg + `<div class="hit">
        <div class="hits">
            <div class="first">
                ${tiro1}
            </div>
            <div class="first">
                ${tiro2}
            </div>
        </div>
        <div class="totalscore">
            ${scoresum}
        </div>
        </div>`
    }
    document.getElementById("tbody").innerHTML = strubg
}

let clean = '';
function limpiar() {
    document.getElementById("tbody").innerHTML = clean
}