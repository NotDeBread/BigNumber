const million = Math.pow(10, 6)
const billion = Math.pow(10, 9)
const trillion = Math.pow(10, 12)
const quadrillion = Math.pow(10, 15)
const quintillion = Math.pow(10, 18)
const sextillion = Math.pow(10, 21)
const septillion = Math.pow(10, 24)
const octillion = Math.pow(10, 27)
const nonillion = Math.pow(10, 30)
const decillion = Math.pow(10, 33)
const undecillion = Math.pow(10, 36)
const duodecillion = Math.pow(10, 39)
const tredecillion = Math.pow(10, 42)
const quattuordecillion = Math.pow(10, 45)
const quindecillion = Math.pow(10, 48)
const sexdecillion = Math.pow(10, 51)
const septemdecillion = Math.pow(10, 54)
const octodecillion = Math.pow(10, 57)
const novemdecillion = Math.pow(10, 60)
const vigintillion = Math.pow(10, 63)
const unvigintillion = Math.pow(10, 66)
const duovigintillion = Math.pow(10, 69)
const trevigintillion = Math.pow(10, 72)
const quattuorvigintillion = Math.pow(10, 75)
const quinvigintillion = Math.pow(10, 78)
const sexvigintillion = Math.pow(10, 81)
const septvigintillion = Math.pow(10, 84)
const octovigintillion = Math.pow(10, 87)
const nonvigintillion = Math.pow(10, 90)
const trigintillion = Math.pow(10, 93)
const untrigintillion = Math.pow(10, 96)
const duotrigintillion = Math.pow(10, 99)
const googol = Math.pow(10, 100)

function formatNumber(number) {
    if(number >= googol) {
        return (Math.round(number / googol * 1000) / 1000) + " Googol"
    } else if(number >= duotrigintillion) {
        return (Math.round(number / duotrigintillion * 1000) / 1000) + " Duotrigintillion"
    } else if(number >= untrigintillion) {
        return (Math.round(number / untrigintillion * 1000) / 1000) + " Untrigintillion"
    } else if(number >= trigintillion) {
        return (Math.round(number / trigintillion * 1000) / 1000) + " Trigintillion"
    } else if(number >= nonvigintillion) {
        return (Math.round(number / nonvigintillion * 1000) / 1000) + " Nonvigintillion"
    } else if(number >= octovigintillion) {
        return (Math.round(number / octovigintillion * 1000) / 1000) + " Octovigintillion"
    } else if(number >= septvigintillion) {
        return (Math.round(number / septvigintillion * 1000) / 1000) + " Septvigintillion"
    } else if(number >= sexvigintillion) {
        return (Math.round(number / sexvigintillion * 1000) / 1000) + " Sexvigintillion"
    } else if(number >= quinvigintillion) {
        return (Math.round(number / quinvigintillion * 1000) / 1000) + " Quinvigintillion"
    } else if(number >= quattuorvigintillion) {
        return (Math.round(number / quattuorvigintillion * 1000) / 1000) + " Quattuorvigintillion"
    } else if(number >= trevigintillion) {
        return (Math.round(number / trevigintillion * 1000) / 1000) + " Trevigintillion"
    } else if(number >= duovigintillion) {
        return (Math.round(number / duovigintillion * 1000) / 1000) + " Duovigintillion"
    } else if(number >= unvigintillion) {
        return (Math.round(number / unvigintillion * 1000) / 1000) + " Unvigintillion"
    } else if(number >= vigintillion) {
        return (Math.round(number / vigintillion * 1000) / 1000) + " Vigintillion"
    } else if(number >= novemdecillion) {
        return (Math.round(number / novemdecillion * 1000) / 1000) + " Novemdecillion"
    } else if(number >= octodecillion) {
        return (Math.round(number / octodecillion * 1000) / 1000) + " Octodecillion"
    } else if(number >= septemdecillion) {
        return (Math.round(number / septemdecillion * 1000) / 1000) + " Septemdecillion"
    } else if(number >= sexdecillion) {
        return (Math.round(number / sexdecillion * 1000) / 1000) + " Sexdecillion"
    } else if(number >= quindecillion) {
        return (Math.round(number / quindecillion * 1000) / 1000) + " Quindecillion"
    } else if(number >= quattuordecillion) {
        return (Math.round(number / quattuordecillion * 1000) / 1000) + " Quattuordecillion"
    } else if(number >= tredecillion) {
        return (Math.round(number / tredecillion * 1000) / 1000) + " Tredecillion"
    } else if(number >= duodecillion) {
        return (Math.round(number / duodecillion * 1000) / 1000) + " Duodecillion"
    } else if(number >= undecillion) {
        return (Math.round(number / undecillion * 1000) / 1000) + " Undecillion"
    } else if(number >= decillion) {
        return (Math.round(number / decillion * 1000) / 1000) + " Decillion"
    } else if(number >= nonillion) {
        return (Math.round(number / nonillion * 1000) / 1000) + " Nonillion"
    } else if(number >= octillion) {
        return (Math.round(number / octillion * 1000) / 1000) + " Octillion"
    } else if(number >= septillion) {
        return (Math.round(number / septillion * 1000) / 1000) + " Septillion"
    } else if(number >= sextillion) {
        return (Math.round(number / sextillion * 1000) / 1000) + " Sextillion"
    } else if(number >= quintillion) {
        return (Math.round(number / quintillion * 1000) / 1000) + " Quintillion"
    } else if(number >= quadrillion) {
        return (Math.round(number / quadrillion * 1000) / 1000) + " Quadrillion"
    } else if(number >= trillion) {
        return (Math.round(number / trillion * 1000) / 1000) + " Trillion"
    } else if(number >= billion) {
        return (Math.round(number / billion * 1000) / 1000) + " Billion"
    } else if(number >= million) {
        return (Math.round(number / million * 1000) / 1000) + " Million"
    }
    return Math.round(number).toLocaleString()
}

document.addEventListener('keydown', displayNumber)

var input = document.getElementById('input').value

function displayNumber() {
    setTimeout(() => {
        var input = document.getElementById('input').value
        document.getElementById('numberDisplay').innerText = formatNumber(input)    
        setTimeout(() => {            
            if(document.getElementById('numberDisplay').innerText === 'NaN') {
                document.getElementById('numberDisplay').innerText = 'Invalid Number!'
            }
        }, 1);
        document.getElementById('length').innerText = `Length: ${input.length}`
    }, 1);
}
