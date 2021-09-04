/* DOM */
const form = document.querySelector('#form');

/* Func */
function waysFounder(val) {

    let ways = new Array(val + 1).fill(0);
        ways[0] = 1;
    for (let i = 1; i <= val - 1; i++) {
        for (let j = i; j <= val; j++) {
            ways[j] += ways[j - i];
        }
    }
    return ways[ways.length - 1]
}

function onSubmitHandler(e){
    e.preventDefault();
    const val = +e.target[0].value;
    alert("Your Ways qty is " + waysFounder(val))
}

/* Listeners */
form.addEventListener('submit', onSubmitHandler)



