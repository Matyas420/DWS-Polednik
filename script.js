//První úkol vyskočí alert
let first = document.getElementById('first');

first.addEventListener('click', function(){
    alert("Něco se pokazilo.")
})
//Druhý úkol kliknutím na tlačítko se text v něm změní
const second = document.getElementById('second')

second.addEventListener('click', function(){
    second.textContent = "text se změnil";
})
//Třetí úkol kliknutím na tlačítko se změní vytvořený text
const button = document.getElementById('change')
const text = document.getElementById('text');

button.addEventListener('click', () => {
    text.textContent = 'Text byl změněn!';
})
//Čtvrtý úkol
const tlačítko = document.getElementById('tlačítko').addEventListener('click', function() {
    document.getElementById('text2').innerText = 'Text byl zobrazen!';
})
//Patý úkol
const jmeno = document.getElementById('jmeno')

jmenobutton.addEventListener('click', function(){
    alert("Zdravím tě na této stránce "+jmeno.value)
})
//Sedmý úkol 
const textElement = document.getElementById('myText');

    textElement.addEventListener('mouseover', function() {
     textElement.textContent = 'Text se změnil!';
})

    textElement.addEventListener('mouseout', function() {
     textElement.textContent = 'Přejeďte myší sem!';
})
//Osmý úkol
function zobrazCas() {
    const čas = new Date();
    const aktuálníčas = čas.toLocaleTimeString('cs-CZ');
    document.getElementById('čas').textContent = `Aktuální čas: ${aktuálníčas}`;
}