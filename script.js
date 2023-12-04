// 1. Sukurkite su HTML formą su vienu laukeliu - fullname, ir po apačia - lentelę su dviem stulpeliais - name ir surname. JavaScripte pasirašykite konstruktorių, kuris turės vardą, pavardę ir metodą - atsirasti lentelėje. Kai vartotojas įrašo savo pilną vardą - su JS metodais išskirkite jį į dvi dalis; pasirūpinkite, kad nebūtų tarpelių prieš ir po vardo; pirmą raidę vardo ir pavardės padidinkit, o kitas - sumažinkit (capitalization); sukurkite objektą naudojant konstruktorių; ir galiausiai iškvieskite metodą, kad pridėtų į lentelę. Taip, naudojant OOP pagrindus, vartotojui įrašius duomenis į formą, atsiras apačioje lentelėje išskirtas vardas ir pavardė, o ir leis tolimesniai projekto plėtrai (t.y. darbui su objektais).

// 2. Sukurkite HTML formą, kurioje vartotojas galės įrašyti (į input laukelius): car brand, model, mileage, price ir image (url laukelis). Per konstruktorių, sukuriams objektas ir jis atvaizduojamas po forma (CSS rašykite CSS'e) kaip atvaizduota nuotraukoje apačioje. Paspaudus ant automobilio bloko - turi alert išmesti kainą (pavyzdys nuotrauka su automobiliais)
// Konstruktorius
function Person(name, surname) {
    this.name = name;
    this.surname = surname;
    // Metodas pridėti į lentelę
    this.addToTable = function() {
        const tableBody = document.querySelector('#resultTable tbody');
        const row = tableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        cell1.textContent = this.name;
        cell2.textContent = this.surname;
    }
}
function processForm() {
    //  vartotojo full name
    const fullnameInput = document.getElementById('fullname')
    const fullname = fullnameInput.value.trim()
    // Patikrinti, ar įvestis ne tusčia
    if (fullname !== '') {
        // padalinti ivestus duomenis į vardą ir pavardę
        const [name, surname] = fullname.split(' ')
        // Sukurti naują objektą su konstruktoriumi
        const person = new Person(
            name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(),
            surname.charAt(0).toUpperCase() + surname.slice(1).toLowerCase()
        )
        // pridėti į lentelę
        person.addToTable()

        // išvalyti 
        fullnameInput.value = ''
    } else {
        alert('Please enter a fullname.')
    }
}
