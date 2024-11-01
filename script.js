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
//Čtvrtý úkol kliknutím na tlačítko se objeví text
const tlačítko = document.getElementById('tlačítko').addEventListener('click', function() {
    document.getElementById('text2').innerText = 'Text byl zobrazen!';
})
//Patý úkol napsáním jména nebo cokoliv jiného, vám vyskočí alert s pozdravem
const jmeno = document.getElementById('jmeno')

jmenobutton.addEventListener('click', function(){
    alert("Zdravím tě na této stránce "+jmeno.value)
})
//Sedmý úkol přejetím na text myší se změní
const mys = document.getElementById('myText');
const text3 = document.getElementById('text3');

    mys.addEventListener('mouseover', function() {
     mys.textContent = 'Text se změnil!';
})

    mys.addEventListener('mouseout', function() {
     mys.textContent = 'Přejeďte myší sem!';
})
//Osmý úkol po kliknutí na button se zobrazí aktuální čas
function zobrazCas() {
    const čas = new Date();
    const aktuálníčas = čas.toLocaleTimeString('cs-CZ');
    document.getElementById('čas').textContent = `Aktuální čas: ${aktuálníčas}`;
}
//Devatý úkol po kliknutí na button se zobrazí aktuální datum
function zobrazDatum() {
    const dnesnidatum = new Date();
    document.getElementById("datum").innerHTML = dnesnidatum.toLocaleString(); 
}

//Pokračování Dynamické webové stránky

//První úkol přičtení čísla 3 k hodnotě, kterou uživatel zadá
function pricteni() {
    let hodnota = parseFloat(document.getElementById('vlozeni_cisla').value);

    if (!isNaN(hodnota)) {
        let vysledek = hodnota + 3;

        document.getElementById('vysledek').innerHTML = "Výsledek: " + vysledek;
    } else {
        document.getElementById('vysledek').innerHTML = "Prosím, zadejte platné číslo.";
    }
}

//Druhý úkol sečtení dvou čísel po zadání do textu
function secti() {
    let vstup = document.getElementById('cisla').value;
    let cisla = vstup.split('+').map(Number);
    
    if (cisla.length == 2 && !isNaN(cisla[0]) && !isNaN(cisla[1])) {
        let vysledek_2 = cisla[0] + cisla[1];
        document.getElementById('vysledek_2').innerHTML = "Výsledek: " + vysledek_2;
    } else {
        document.getElementById('vysledek_2').innerHTML = "Zadejte prosím dvě platná čísla oddělená čárkou.";
    }
}
