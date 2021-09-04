/* DOM */
const form = document.querySelector('#form');

/* Func */
function fibReverse(val) {
    let prev = 1n, next = 1n, fib = 0, step = 2;
    while(fib.toString().length < val) {
        fib = prev + next;
        [prev, next] = [next, fib]
        ++step
    }
    return step;
}

function onSubmitHandler(e){
    e.preventDefault();
    const val = +e.target[0].value;
    alert("Your Step is " + fibReverse(val))
}

/* Listeners */
form.addEventListener('submit', onSubmitHandler)



