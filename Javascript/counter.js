const counter = document.getElementById('counter')
console.log(1)

function getChrono(){
    const now = new Date().getTime();
    const countdownDate = new Date('March 5, 2023')
    const distanceBase = countdownDate - now

    const days = Math.floor(distanceBase / (1000 * 60 * 60 * 24))
    const hours  = Math.floor((distanceBase % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60))
    const seconds = Math.floor((distanceBase % (1000 * 60)) / 1000)

    counter.innerText = `${days}j ${hours}h ${seconds}s`
    
}

getChrono()

const countDownInterval = setInterval(() => {
    getChrono()
}, 1000)

