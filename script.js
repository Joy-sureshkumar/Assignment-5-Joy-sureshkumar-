let diameter = 0
let radius = 0
let area = 0
let circumference = 0
const PI = 22 / 7

document.getElementById('button').addEventListener('click', areaOfCircle)
document.getElementById('button').addEventListener('click', circumferenceOfCircle)

//area of a circle = (d / 2)^2 * 3.14
function areaOfCircle() {
 diameter = document.getElementById('diameter').value
diameter = parseInt(diameter)
result = ((diameter / 2) ** 2) * PI;
document.getElementById('area').innerHTML = result
}

//circumference of a circle = PI * diameter
function circumferenceOfCircle() {
 diameter = document.getElementById('diameter').value
diameter = parseInt(diameter)
result = PI * diameter;
document.getElementById('circumference').innerHTML = result
}