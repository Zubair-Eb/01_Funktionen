"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken
// test();

// ausgabeNamen2("Rocky");
// ausgabeNamen2("David");
// ausgabeNamen2("Atanas");
ausgabeNamenParams("Maxine", "Mützerich");
ausgabeNamenParams(prompt("Vorname?"),prompt("Nachname?"));


function test()
{
console.log("Grizabella");
}

/***** Funktion 02a ******/

function ausgabeNamen2(firstName) {
    
    console.log("Hallo "+ firstName + "!");
    
}


function ausgabeNamenParams(firstName,familyName) {
    console.log("Hallo " + firstName + " " + familyName + "!");
    }