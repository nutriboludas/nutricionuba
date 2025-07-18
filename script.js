
document.addEventListener("DOMContentLoaded", function () {
    const materias = {
        "CBC": [
            "Química",
            "Introducción al Conocimiento de la Sociedad y el Estado",
            "Introducción al Pensamiento Científico",
            "Matemática",
            "Física e Introducción a la Biofísica",
            "Biología e Introducción a la Biología Celular"
        ],
        "Segundo año": [
            "Bioquímica de la Nutrición",
            "Anatomía",
            "Fisiología",
            "Nutrición Normal",
            "Introducción a la Salud Publica",
            "Socioantropología",
            "Estadística"
        ],
        "Tercer año": [
            "Fisiopatología",
            "Técnica Dietética",
            "Bromatología y Tecnología Alimentaria",
            "Microbiología y Parasitología",
            "Alimentación del Niño Sano",
            "Desarrollo de la Comunidad",
            "Economía General y Familiar",
            "Bioestadística",
            "Relaciones Humanas y Éticas",
            "Saneamiento Ambiental e Higiene de los Alimentos",
            "Producción y Mercadeo de Alimentos",
            "Metodología de la Investigación en Nutrición"
        ],
        "Cuarto año": [
            "Psicología de la Nutrición",
            "Educación en Nutrición",
            "Administración de Servicios de alimentación",
            "Planificación y Administración General y Sanitaria",
            "Epidemiología en Nutrición",
            "Evaluación Nutricional",
            "Técnica Dietoterapica",
            "Fisiopatología y Dietoterapia del Niño",
            "Nutrición en Salud Publica",
            "Dietoterapia del Adulto"
        ],
        "Quinto año": [
            "Prácticas de Nutrición en Salud Pública",
            "Prácticas de Dietoterapia y Administración de Servicios de Alimentación",
            "Seminarios",
            "Política Alimentaria",
            "Informática",
            "Comunicación y Audiovisuales",
            "Extensión Rural",
            "Técnica Dietética Experimental",
            "Inglés Técnico",
            "Interacción droga-alimentos en enfermedades de la nutrición",
            "Nutrición y Deporte",
            "Nutrición en el Paciente Crítico"
        ]
    };

    const optativas = [
        "Política Alimentaria", "Informática", "Comunicación y Audiovisuales",
        "Extensión Rural", "Técnica Dietética Experimental", "Inglés Técnico",
        "Interacción droga-alimentos en enfermedades de la nutrición",
        "Nutrición y Deporte", "Nutrición en el Paciente Crítico"
    ];

    const correlatividades = {
        "Fisiopatología": ["Anatomía", "Fisiología", "Bioquímica de la Nutrición", "Nutrición Normal"],
        "Técnica Dietética": ["Bioquímica de la Nutrición", "Nutrición Normal"],
        "Bromatología y Tecnología Alimentaria": ["Bioquímica de la Nutrición", "Nutrición Normal"],
        "Microbiología y Parasitología": ["Bioquímica de la Nutrición", "Anatomía", "Fisiología"],
        "Alimentación del Niño Sano": ["Anatomía", "Fisiología", "Bioquímica de la Nutrición", "Nutrición Normal"],
        "Desarrollo de la Comunidad": ["CBC"],
        "Economía General y Familiar": ["Nutrición Normal"],
        "Bioestadística": ["Estadística"],
        "Relaciones Humanas y Éticas": ["CBC"],
        "Saneamiento Ambiental e Higiene de los Alimentos": ["Introducción a la Salud Publica"],
        "Producción y Mercadeo de Alimentos": ["regular:Economía General y Familiar"],
        "Metodología de la Investigación en Nutrición": ["regular:Bioestadística"],
        "Psicología de la Nutrición": ["Socioantropología", "Alimentación del Niño Sano"],
        "Educación en Nutrición": ["Alimentación del Niño Sano", "Desarrollo de la Comunidad", "Técnica Dietética", "Bromatología y Tecnología Alimentaria"],
        "Administración de Servicios de alimentación": ["Producción y Mercadeo de Alimentos", "Técnica Dietética", "Bromatología y Tecnología Alimentaria"],
        "Planificación y Administración General y Sanitaria": ["Introducción a la Salud Publica", "Economía General y Familiar"],
        "Epidemiología en Nutrición": ["Metodología de la Investigación en Nutrición"],
        "Evaluación Nutricional": ["Bioestadística", "Alimentación del Niño Sano"],
        "Técnica Dietoterapica": ["Fisiopatología", "Técnica Dietética", "Bromatología y Tecnología Alimentaria"],
        "Fisiopatología y Dietoterapia del Niño": ["Alimentación del Niño Sano", "Fisiopatología", "Técnica Dietética", "Bromatología y Tecnología Alimentaria"],
        "Nutrición en Salud Publica": ["Introducción a la Salud Publica", "regular:Epidemiología en Nutrición", "regular:Evaluación Nutricional"],
        "Dietoterapia del Adulto": ["Fisiopatología", "Técnica Dietética", "Bromatología y Tecnología Alimentaria"],
        "Prácticas de Nutrición en Salud Pública": ["4toCompleto"],
        "Prácticas de Dietoterapia y Administración de Servicios de Alimentación": ["4toCompleto"],
        "Seminarios": ["4toCompleto"]
    };

    const tiposMaterias = {
        "Química": "Cuatrimestral",
        "Introducción al Conocimiento de la Sociedad y el Estado": "Cuatrimestral",
        "Introducción al Pensamiento Científico": "Cuatrimestral",
        "Matemática": "Cuatrimestral",
        "Física e Introducción a la Biofísica": "Cuatrimestral",
        "Biología e Introducción a la Biología Celular": "Cuatrimestral",
        "Bioquímica de la Nutrición": "Anual",
        "Anatomía": "Anual",
        "Fisiología": "Anual",
        "Nutrición Normal": "Anual",
        "Introducción a la Salud Publica": "Cuatrimestral",
        "Socioantropología": "Cuatrimestral",
        "Estadística": "Cuatrimestral",
        "Fisiopatología": "Anual",
        "Técnica Dietética": "Anual",
        "Bromatología y Tecnología Alimentaria": "Anual",
        "Microbiología y Parasitología": "Cuatrimestral",
        "Alimentación del Niño Sano": "Cuatrimestral",
        "Desarrollo de la Comunidad": "Cuatrimestral",
        "Economía General y Familiar": "Cuatrimestral",
        "Bioestadística": "Cuatrimestral",
        "Relaciones Humanas y Éticas": "Cuatrimestral",
        "Saneamiento Ambiental e Higiene de los Alimentos": "Cuatrimestral",
        "Producción y Mercadeo de Alimentos": "Cuatrimestral",
        "Metodología de la Investigación en Nutrición": "Cuatrimestral",
        "Psicología de la Nutrición": "Cuatrimestral",
        "Educación en Nutrición": "Anual",
        "Administración de Servicios de alimentación": "Anual",
        "Planificación y Administración General y Sanitaria": "Cuatrimestral",
        "Epidemiología en Nutrición": "Cuatrimestral",
        "Evaluación Nutricional": "Cuatrimestral",
        "Técnica Dietoterapica": "Anual",
        "Fisiopatología y Dietoterapia del Niño": "Cuatrimestral",
        "Nutrición en Salud Publica": "Cuatrimestral",
        "Dietoterapia del Adulto": "Anual",
        "Prácticas de Nutrición en Salud Pública": "Cuatrimestral",
        "Prácticas de Dietoterapia y Administración de Servicios de Alimentación": "Cuatrimestral",
        "Seminarios": "Cuatrimestral",
        "Política Alimentaria": "Cuatrimestral",
        "Informática": "Cuatrimestral",
        "Comunicación y Audiovisuales": "Cuatrimestral",
        "Extensión Rural": "Cuatrimestral",
        "Técnica Dietética Experimental": "Cuatrimestral",
        "Inglés Técnico": "Cuatrimestral",
        "Interacción droga-alimentos en enfermedades de la nutrición": "Cuatrimestral",
        "Nutrición y Deporte": "Cuatrimestral",
        "Nutrición en el Paciente Crítico": "Cuatrimestral"
    };

    const estados = ["normal", "regular", "aprobada"];
    const contenedor = document.getElementById("malla");
    let estadoMaterias = JSON.parse(localStorage.getItem("estadoMaterias") || "{}");
    let notasMaterias = JSON.parse(localStorage.getItem("notasMaterias") || "{}");

    function estaAprobada(m) {
        return estadoMaterias[m] === "aprobada";
    }

    function estaRegular(m) {
        return estadoMaterias[m] === "regular" || estaAprobada(m);
    }

    function cumpleRequisitos(materia) {
        if (optativas.includes(materia)) {
            const terceroOk = materias["Tercer año"].every(estaAprobada);
            const anuales4 = [
                "Administración de Servicios de alimentación",
                "Planificación y Administración General y Sanitaria",
                "Dietoterapia del Adulto"
            ].filter(estaAprobada).length;
            const cuatri4 = [
                "Psicología de la Nutrición",
                "Educación en Nutrición",
                "Epidemiología en Nutrición",
                "Evaluación Nutricional",
                "Técnica Dietoterapica",
                "Fisiopatología y Dietoterapia del Niño",
                "Nutrición en Salud Publica"
            ].filter(estaAprobada).length;

            if (materia === "Interacción droga-alimentos en enfermedades de la nutrición") {
                return terceroOk &&
                    estaAprobada("Dietoterapia del Adulto") &&
                    estaAprobada("Fisiopatología y Dietoterapia del Niño") &&
                    anuales4 >= 2 &&
                    cuatri4 >= 2;
            }

            return terceroOk && anuales4 >= 3 && cuatri4 >= 3;
        }

        const reqs = correlatividades[materia];
        if (!reqs) {
            if (materias["Segundo año"].includes(materia)) {
                return materias["CBC"].every(estaAprobada);
            }
            return true;
        }
        for (let r of reqs) {
            if (r === "CBC") {
                if (!materias["CBC"].every(estaAprobada)) return false;
            } else if (r === "4toCompleto") {
                const anteriores = [].concat(...Object.values(materias).slice(0, 4));
                if (!anteriores.every(estaAprobada)) return false;
            } else if (r.startsWith("regular:")) {
                const mat = r.split(":")[1];
                if (!estaRegular(mat)) return false;
            } else if (!estaAprobada(r)) {
                return false;
            }
        }
        return true;
    }

    function actualizarBloqueos() {
        document.querySelectorAll(".materia").forEach(div => {
            const nombre = div.dataset.nombre;
            const input = div.querySelector("input");
            if (!cumpleRequisitos(nombre)) {
                div.classList.add("bloqueada");
                input.disabled = true;
            } else {
                div.classList.remove("bloqueada");
                input.disabled = false;
            }
        });
    }

    for (const [anio, lista] of Object.entries(materias)) {
        const grupo = document.createElement("div");
        grupo.className = "grupo-anio";

        const columna = document.createElement("div");
        columna.className = "anio";
        const titulo = document.createElement("h2");
        titulo.textContent = anio;
        columna.appendChild(titulo);

        lista.forEach(nombre => {
            const item = document.createElement("div");
            item.className = "materia";
            item.dataset.nombre = nombre;

            if (estadoMaterias[nombre]) {
                item.classList.add(estadoMaterias[nombre]);
            }

            const boton = document.createElement("div");
            boton.textContent = nombre + (tiposMaterias[nombre] ? " (" + tiposMaterias[nombre] + ")" : "");

            const input = document.createElement("input");
            input.type = "number";
            input.min = 1;
            input.max = 10;
            input.placeholder = "Nota";
            input.value = notasMaterias[nombre] || "";

            
    input.readOnly = true;
    input.addEventListener("click", (e) => {
        e.stopPropagation();
        let notas = Array.isArray(notasMaterias[nombre]) ? notasMaterias[nombre] : (notasMaterias[nombre] ? [parseInt(notasMaterias[nombre])] : []);
        crearHistorialNotas(nombre, notas, nuevasNotas => {
            notasMaterias[nombre] = nuevasNotas;
            input.value = nuevasNotas[nuevasNotas.length - 1] || "";
            localStorage.setItem("notasMaterias", JSON.stringify(notasMaterias));
            actualizarPromedio();
        });
    });
    // ignorar el input tipo texto directo
    input.addEventListener("input", () => {
        notasMaterias[nombre] = input.value;

                localStorage.setItem("notasMaterias", JSON.stringify(notasMaterias));
                actualizarPromedio();
            });

            item.addEventListener("click", () => {
                if (item.classList.contains("bloqueada")) return;
                let estadoActual = estados.find(s => item.classList.contains(s)) || "normal";
                item.classList.remove(estadoActual);
                let nuevoEstado = estados[(estados.indexOf(estadoActual) + 1) % estados.length];
                if (nuevoEstado !== "normal") item.classList.add(nuevoEstado);
                estadoMaterias[nombre] = nuevoEstado;
                localStorage.setItem("estadoMaterias", JSON.stringify(estadoMaterias));
                actualizarProgreso();
                actualizarPromedio();
                actualizarBloqueos();
            });

            item.appendChild(boton);
            item.appendChild(input);
            columna.appendChild(item);
        });

        grupo.appendChild(columna);
        contenedor.appendChild(grupo);
    }

    function actualizarPromedio() {
    let total = 0, count = 0;
    let desdeSegundo = [].concat(...Object.values(materias).slice(1));

    for (const [materia, notas] of Object.entries(notasMaterias)) {
        if (!desdeSegundo.includes(materia)) continue;

        if (Array.isArray(notas)) {
            notas.forEach(nota => {
                const n = parseFloat(nota);
                if (!isNaN(n)) {
                    total += n;
                    count++;
                }
            });
        } else {
            const n = parseFloat(notas);
            if (!isNaN(n)) {
                total += n;
                count++;
            }
        }
    }

    const promedio = count > 0 ? (total / count).toFixed(2) : "—";
    document.getElementById("promedio").textContent = promedio;
}

    function actualizarProgreso() {
        let total = 0, completadas = 0, optativasAprobadas = 0;
        for (const [anio, lista] of Object.entries(materias)) {
            lista.forEach(nombre => {
                if (optativas.includes(nombre)) {
                    total += 1 / 3;
                    if (estadoMaterias[nombre] === "aprobada" && optativasAprobadas < 3) {
                        completadas += 1 / 3;
                        optativasAprobadas++;
                    }
                } else {
                    total++;
                    if (estadoMaterias[nombre] === "aprobada") completadas++;
                }
            });
        }
        const porcentaje = Math.round((completadas / total) * 100);
        document.getElementById("barra-progreso").style.width = porcentaje + "%";
        document.getElementById("porcentaje-progreso").textContent = porcentaje + "%";
    }

    actualizarPromedio();
    actualizarProgreso();
    actualizarBloqueos();
});



function crearHistorialNotas(nombre, notas, callbackActualizar) {
    const popup = document.createElement("div");
    popup.classList.add("popup-notas");

    const titulo = document.createElement("h3");
    titulo.textContent = nombre;
    popup.appendChild(titulo);

    const lista = document.createElement("ul");
    lista.classList.add("lista-notas");

    notas.forEach((nota, i) => {
        const item = document.createElement("li");
        item.textContent = nota;
        const eliminar = document.createElement("button");
        eliminar.textContent = "✖";
        eliminar.onclick = () => {
            notas.splice(i, 1);
            popup.remove();
            callbackActualizar(notas);
        };
        item.appendChild(eliminar);
        lista.appendChild(item);
    });
    popup.appendChild(lista);

    const input = document.createElement("input");
    input.type = "number";
    input.min = 1;
    input.max = 10;
    input.placeholder = "Nueva nota";
    popup.appendChild(input);

    const agregar = document.createElement("button");
    agregar.textContent = "Agregar";
    agregar.onclick = () => {
        const valor = parseInt(input.value);
        if (!isNaN(valor) && valor >= 1 && valor <= 10) {
            notas.push(valor);
            popup.remove();
            callbackActualizar(notas);
        }
    };
    popup.appendChild(agregar);

    const cerrar = document.createElement("button");
    cerrar.textContent = "Cerrar";
    cerrar.onclick = () => popup.remove();
    popup.appendChild(cerrar);

    document.body.appendChild(popup);
}
