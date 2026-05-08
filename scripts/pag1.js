
function agua(){

    let metros = parseFloat(document.getElementById("metros").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const total = metros * costo;
    document.getElementById("resul").textContent =
    "El pago total es: $" + total;
}

function luz(){

    let kw = parseFloat(document.getElementById("kw").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const total = kw * costo;
    document.getElementById("resul").textContent =
    "El pago total es: $" + total;
}


function descuento(){

    let precio = parseFloat(document.getElementById("precio").value);
    const descuento = precio * 0.20;
    const subtotal = precio - descuento;
    const iva = subtotal * 0.15;
    const total = subtotal + iva;
    document.getElementById("resul").textContent =
    "Precio con descuento: $" + subtotal;
    document.getElementById("total").textContent =
    "Precio final con IVA: $" + total;
}

function ahorro(){

    let sueldo = parseFloat(document.getElementById("sueldo").value);
    const ahorroSemanal = sueldo * 0.15;
    const ahorroMensual = ahorroSemanal * 4;
    const ahorroAnual = ahorroMensual * 12;
    document.getElementById("resul").textContent =
    "Ahorro semanal: $" + ahorroSemanal;
    document.getElementById("total").textContent =
    "Ahorro anual: $" + ahorroAnual;
}

function cheque(){

    let dias = parseFloat(document.getElementById("dias").value);
    let hotel = parseFloat(document.getElementById("hotel").value);
    let comida = parseFloat(document.getElementById("comida").value);
    const gastoHotel = hotel * dias;
    const gastoComida = comida * dias;
    const extras = dias * 100;
    const total = gastoHotel + gastoComida + extras;
    document.getElementById("resul").textContent =
    "Hotel: $" + gastoHotel +
    " | Comida: $" + gastoComida +
    " | Extras: $" + extras +
    " | Total: $" + total;
}

function potencia(){

    let resistencia = parseFloat(document.getElementById("resistencia").value);
    let corriente = parseFloat(document.getElementById("corriente").value);
    const voltaje = resistencia * corriente;
    const potencia = voltaje * corriente;
    document.getElementById("resul").textContent =
    "La potencia eléctrica es: " + potencia;
}

function area(){

    let lado = parseFloat(document.getElementById("lado").value);
    const resultado = lado * lado;
    document.getElementById("resul").textContent =
    "El área del cuadrado es: " + resultado;
}

function promedio(){

    let e1 = parseFloat(document.getElementById("e1").value);
    let e2 = parseFloat(document.getElementById("e2").value);
    let e3 = parseFloat(document.getElementById("e3").value);
    const resultado =
    (e1 * 0.25) +
    (e2 * 0.25) +
    (e3 * 0.50);
    document.getElementById("resul").textContent =
    "El promedio final es: " + resultado;
}

function tiempo(){

    let edad = parseFloat(document.getElementById("edad").value);
    const meses = edad * 12;
    const semanas = edad * 52;
    const dias = edad * 365;
    const horas = dias * 24;
    document.getElementById("resul").textContent =
    "Meses: " + meses +
    " | Semanas: " + semanas +
    " | Días: " + dias +
    " | Horas: " + horas;
}

function llamada(){

    let minutos = parseFloat(document.getElementById("minutos").value);
    let costo = parseFloat(document.getElementById("costo").value);
    const total = minutos * costo;
    document.getElementById("resul").textContent =
    "El costo total es: $" + total;
}
function hotel(){

    let dias = parseFloat(document.getElementById("dias").value);

    let costo = parseFloat(document.getElementById("costo").value);

    const total = dias * costo;

    document.getElementById("resul").textContent =
    "El total de hospedaje es: $" + total;
}