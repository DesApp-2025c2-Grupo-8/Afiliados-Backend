const turnos = [
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-12-01",
        hora: "08:30",
        especialidad: "Dermatólogo",
        medico: "Dra. Lena",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Hipólito Yrigoyen 8500"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-10-15",
        hora: "14:30",
        especialidad: "Clínica General",
        medico: "Dr. García",
        lugarDeAtencion: [
            {
                partido: "Adrogué",
                direccion: "Av. Espor 700"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-11-03",
        hora: "10:30",
        especialidad: "Dermatólogo",
        medico: "Dra. Lena",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Hipólito Yrigoyen 8500"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2026-01-10",
        hora: "12:00",
        especialidad: "Oftalmólogo",
        medico: "Dr. Fernando Torres",
        lugarDeAtencion: [
            {
                partido: "Banfield",
                direccion: "Av. banfield 8931"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-12-12",
        hora: "16:00",
        especialidad: "Cardiólogo",
        medico: "Dra. Sofía Gutierrez",
        lugarDeAtencion: [
            {
                partido: "Adrogué",
                direccion: "Av. Hipólito Yrigoyen 12500"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Santiago Varela",
        fecha: "2025-10-29",
        hora: "15:30",
        especialidad: "Traumatólogo",
        medico: "Dr. Zene",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Hipólito Yrigoyen 1234"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Santiago Varela",
        fecha: "2025-09-01",
        hora: "15:30",
        especialidad: "Pediatra",
        medico: "Dra. Laura Gómez",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Av. 9 de Julio 1500"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Santiago Varela",
        fecha: "2025-12-05",
        hora: "11:00",
        especialidad: "Odontólogo",
        medico: "Dr. Joaquin Rivas",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Lomas 1893"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Santiago Varela",
        fecha: "2025-12-20",
        hora: "14:00",
        especialidad: "Pediatra",
        medico: "Dra. Laura Gómez",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Av. 9 de Julio 1500"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Santiago Varela",
        fecha: "2026-01-15",
        hora: "09:30",
        especialidad: "Kinesiología",
        medico: "Dr. Martín Zene",
        lugarDeAtencion: [
            {
                partido: "Adrogué",
                direccion: "Av. Espora 700"
            }
        ]
    },
    {
        numeroAfiliado: 663459902,
        integrante: "Tomás Varela",
        fecha: "2025-11-05",
        hora: "10:30",
        especialidad: "Traumatólogo",
        medico: "Dr. Zene",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Morón 123"
            }
        ]
    },
    {
        numeroAfiliado: 663459902,
        integrante: "Tomás Varela",
        fecha: "2025-11-20",
        hora: "17:00",
        especialidad: "Pediatra",
        medico: "Dra. Laura Gómez",
        lugarDeAtencion: [
            {
                partido: "Castelar",
                direccion: "Castelar 1123"
            }
        ]
    },
    {
        numeroAfiliado: 663459902,
        integrante: "Tomás Varela",
        fecha: "2025-12-18",
        hora: "12:00",
        especialidad: "Otorrinolaringólogo",
        medico: "Dr. Juan Flores",
        lugarDeAtencion: [
            {
                partido: "Haedo",
                direccion: "Rivadavia 1234"
            }
        ]
    },
    {
        numeroAfiliado: 663459902,
        integrante: "Tomás Varela",
        fecha: "2025-12-17",
        hora: "10:00",
        especialidad: "Nutricionista",
        medico: "Dra. Ana Torres",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Morón 123"
            }
        ]
    },
    {
        numeroAfiliado: 663459902,
        integrante: "Tomás Varela",
        fecha: "2025-12-28",
        hora: "15:30",
        especialidad: "Pediatra",
        medico: "Dra. Laura Gómez",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Av. 9 de Julio 123"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Molina",
        fecha: "2025-11-01",
        hora: "08:30",
        especialidad: "Clínico",
        medico: "Dra. Lena",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Morón 123"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Molina",
        fecha: "2025-11-12",
        hora: "14:30",
        especialidad: "Nutricionista",
        medico: "Dra. Carla Ruiz",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "Alvear 255"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Molina",
        fecha: "2025-12-03",
        hora: "17:30",
        especialidad: "Oftalmólogo",
        medico: "Dr. Marcelo Pérez",
        lugarDeAtencion: [
            {
                partido: "San Justo",
                direccion: "Arieta 12123"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Molina",
        fecha: "2025-12-29",
        hora: "11:00",
        especialidad: "Psicología",
        medico: "Lic. Paula Díaz",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "Rivadavia 4500"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Molina",
        fecha: "2026-01-18",
        hora: "15:00",
        especialidad: "Dermatólogo",
        medico: "Dra. Lena",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Morón 123"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-10-20",
        hora: "14:00",
        especialidad: "Oftalmólogo",
        medico: "Dr. Fernando Valles",
        lugarDeAtencion: [
            {
                partido: "Quilmes",
                direccion: "Quilmes 123"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-11-15",
        hora: "11:00",
        especialidad: "Clínica General",
        medico: "Dr. Marcelo Pérez",
        lugarDeAtencion: [
            {
                partido: "Bernal",
                direccion: "Belgrano 500"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-12-12",
        hora: "16:30",
        especialidad: "Traumatólogo",
        medico: "Dr. Zene",
        lugarDeAtencion: [
            {
                partido: "Quilmes",
                direccion: "Mitre 123"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2026-01-07",
        hora: "09:30",
        especialidad: "Cardiólogo",
        medico: "Dra. Sofía Torres",
        lugarDeAtencion: [
            {
                partido: "Avellaneda",
                direccion: "Av. Mitre 6050"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-10-20",
        hora: "14:00",
        especialidad: "Odontólogo",
        medico: "Dr. Martín Perez",
        lugarDeAtencion: [
            {
                partido: "Bernal",
                direccion: "Belgrano 5403"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-09-25",
        hora: "09:00",
        especialidad: "Odontólogo",
        medico: "Dra. Sofía Rivas",
        lugarDeAtencion: [
            {
                partido: "Hurlingham",
                direccion: "hurlingham 123"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-10-05",
        hora: "12:00",
        especialidad: "Psicología",
        medico: "Lic. Paula Díaz",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Av. 9 de Julio 123"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-12-05",
        hora: "18:00",
        especialidad: "Clínica General",
        medico: "Dr. Roberto García",
        lugarDeAtencion: [
            {
                partido: "Ituzaingó",
                direccion: "Montevideo 1123"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2026-01-18",
        hora: "10:30",
        especialidad: "Nutricionista",
        medico: "Lic. Ana Torres",
        lugarDeAtencion: [
            {
                partido: "Hurlingham",
                direccion: "hurlingham 123"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-09-25",
        hora: "09:00",
        especialidad: "Kinesiología",
        medico: "Dr. Martín Zene",
        lugarDeAtencion: [
            {
                partido: "Hurlingham",
                direccion: "Origone 125"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-08-01",
        hora: "17:00",
        especialidad: "Pediatra",
        medico: "Dra. Laura Díaz",
        lugarDeAtencion: [
            {
                partido: "Avellaneda",
                direccion: "Mitre 5678"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-11-20",
        hora: "15:00",
        especialidad: "Nutricionista",
        medico: "Lic. Ana Torres",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Pavón 3000"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-22",
        hora: "11:30",
        especialidad: "Otorrinolaringólogo",
        medico: "Dr. Juan Flores",
        lugarDeAtencion: [
            {
                partido: "Quilmes",
                direccion: "Quilmes 123"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2026-01-10",
        hora: "16:00",
        especialidad: "Oftalmólogo",
        medico: "Dr. Federico zene",
        lugarDeAtencion: [
            {
                partido: "Avellaneda",
                direccion: "Mitre 550"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2026-01-21",
        hora: "10:30",
        especialidad: "Pediatra",
        medico: "Dr. Laura Gómez",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "9 de Julio 7550"
            }
        ]
    },
    

]

module.exports = turnos;