// Modo estrito
"use strict"

// Elementos
const section = document.getElementById("section")
const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")

// Definindo o tamanho da seção
canvas.width = section.offsetWidth
canvas.height = section.offsetHeight
const sectionWidth = canvas.width
const sectionHeight = canvas.height

// Variáveis para a criação do efeito
const katakana = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"
const latim = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbers = "0123456789"
const alphabet = katakana + latim + numbers
const fontSize = 16
const columns = Math.floor(sectionWidth / fontSize)
const drops = []

// Laço para criar colunas na seção
for(let x = 0; x < columns; x++) {
    drops[x] = 1
}

// Função para criar o estilo do efeito
function matrixEffectStyle() {
    context.fillStyle = "rgba(0, 0, 0, 0.05)"
    context.fillRect(0, 0, sectionWidth, sectionHeight)
    context.fillStyle = "#0f0"
    context.font = fontSize + "px sans-serif"
}

// Função para criar o efeito
function matrixEffect() {
    for(let i = 0; i < drops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length))
        context.fillText(text, i * fontSize, drops[i] * fontSize)

        if(drops[i] * fontSize > sectionHeight && Math.random() > 0.975) {
            drops[i] = 0
        }
        drops[i]++
    }
    matrixEffectStyle()
}
// Adicionando função matrix effect dentro de um intervalo
setInterval(matrixEffect, 30);