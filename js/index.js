'use strict'

import { debounce } from "./debounce.js"
import { throttle } from "./throttle.js"
import "./highlight.js"

function increaseNumber(element) {
  element.textContent = Number(element.textContent) + 1
};

function adjustInputSize(element) {
  element.style.width = `${element.value.length+1}ch`
}

let debounceDelay = 1000
let throttleDelay = 1000
const normalEl = document.getElementById('normal')
const debounceEl = document.getElementById('debounce')
const debounceTime = document.querySelector('.debounce.highlight .hljs-number')
const throttleEl = document.getElementById('throttle')
const throttleTime = document.getElementById('.throttle.highlight .hljs-number')
const debounceInput = document.getElementById('debounceInput')

debounceInput.setAttribute('value', debounceDelay / 1000)
throttleInput.setAttribute('value', throttleDelay / 1000)

debounceInput.oninput = (event) => {
  adjustInputSize(event.target)
  const newTime = Number(event.target.value || 0) * 1000
  debounceDelay = newTime
  debounceTime.textContent = newTime
}

throttleInput.oninput = (event) => {
  adjustInputSize(event.target)
  const newTime = Number(event.target.value || 0) * 1000
  throttleDelay = newTime
  throttleTime.textContent = newTime
}

document.body.onmousemove = () => {

  increaseNumber(normalEl)

  debounce(() => {
    increaseNumber(debounceEl)
  }, debounceDelay)

  throttle(() => {
    increaseNumber(throttleEl)
  }, throttleDelay)

}
