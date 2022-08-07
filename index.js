'use strict'

let strength = 0;
let strengthExp = 0;
let dex = 0;
let dexExp = 0;
let int = 0;
let intExp = 0;
let ego = 0;
let egoExp = 0;
let guts = 0;
let gutsExp = 0;

initialize();
update();

function update() {
    localStorage.strength = strength;
    localStorage.strengthExp = strengthExp;
    localStorage.strengthExpMax = strengthExpMax
    localStorage.dex = dex;
    localStorage.dexExpMax = dexExpMax
    localStorage.dexExp = dexExp;
    localStorage.int = int;
    localStorage.intExp = intExp;
    localStorage.intExpMax = intExpMax
    localStorage.ego = ego;
    localStorage.egoExp = egoExp;
    localStorage.egoExpMax = egoExpMax
    localStorage.guts = guts;
    localStorage.gutsExp = gutsExp;
    localStorage.gutsExpMax = gutsExpMax;
}

function addStrength() {
    document.getElementById("strengthBar").value += 1;
    update();
}

function addStrength() {
    document.getElementById("strengthBar").value += 1;
    update();
}

function addDex() {
    document.getElementById("dexBar").value += 1;
    update();
}

function addInt() {
    document.getElementById("intBar").value += 1;
    update();
}

function addEgo() {
    document.getElementById("egoBar").value += 1;
    update();
}

function addGuts() {
    document.getElementById("gutsBar").value += 1;
    update();
}

function initialize()
{
    if (isNaN(localStorage.strength))
    {
        localStorage.strength = 0;
        strength = 0;
    }
    else
    {
        strength = Number(localStorage.strength);
    }

    if (isNaN(localStorage.strengthExp))
    {
       localStorage.strengthExp = 0;
      strengthExp = 0;
    }
    else
    {
        strengthExp = Number(localStorage.strengthExp);
    }

    if (isNaN(localStorage.strengthExpMax))
    {
        localStorage.strengthExpMax = 0;
        strengthExpMax = 0;
    }
    else
    {
        strengthExpMax = Number(localStorage.strengthExpMax);
    }

    if (isNaN(localStorage.dex))
    {
        localStorage.dex = 0;
        dex = 0;
    }
    else
    {
        dex = Number(localStorage.dex);
    }

    if (isNaN(localStorage.dexExp))
    {
        localStorage.dexExp = 0;
        dexExp = 0;
    }
    else
    {
        dexExp = Number(localStorage.dexExp);
    }

    if (isNaN(localStorage.dexExpMax))
    {
        localStorage.dexExpMax = 0;
        dexExpMax = 0;
    }
    else
    {
        dexExpMax = Number(localStorage.dexExpMax);
    }

    if (isNaN(localStorage.int))
    {
        localStorage.int = 0;
        int = 0;
    }
    else
    {
        int = Number(localStorage.int);
    }

    if (isNaN(localStorage.intExp))
    {
        localStorage.intExp = 0;
        intExp = 0;
    }
    else
    {
        intExp = Number(localStorage.intExp);
    }

    if (isNaN(localStorage.intExpMax))
    {
        localStorage.intExpMax = 0;
        intExpMax = 0;
    }
    else
    {
        intExpMax = Number(localStorage.intExpMax);
    }

    if (isNaN(localStorage.ego))
    {
        localStorage.ego = 0;
        ego = 0;
    }
    else
    {
        ego = Number(localStorage.ego);
    }

    if (isNaN(localStorage.egoExp))
    {
        localStorage.egoExp = 0;
        egoExp = 0;
    }
    else
    {
        egoExp = Number(localStorage.egoExp);
    }

    if (isNaN(localStorage.egoExpMax))
    {
        localStorage.egoExpMax = 0;
        egoExpMax = 0;
    }
    else
    {
        egoExpMax = Number(localStorage.egoExpMax);
    }

    if (isNaN(localStorage.guts))
    {
        localStorage.guts = 0;
        guts = 0;
    }
    else
    {
        guts = Number(localStorage.guts);
    }

    if (isNaN(localStorage.gutsExp))
    {
        localStorage.gutsExp = 0;
        gutsExp = 0;
    }
    else
    {
        gutsExp = Number(localStorage.gutsExp);
    }

    if (isNaN(localStorage.gutsExpMax))
    {
        localStorage.gutsExpMax = 0;
        gutsExpMax = 0;
    }
    else
    {
        gutsExpMax = Number(localStorage.gutsExpMax);
    }
}