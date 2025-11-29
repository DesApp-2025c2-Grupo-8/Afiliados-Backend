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
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-10",
        hora: "08:30",
        especialidad: "Cardiología",
        medico: "Dra. Leon",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Hipólito Yrigoyen 8500"
            }
        ]

    },
    {
        numeroAfiliado: 663459905,
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
        numeroAfiliado: 228510301,
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
    

    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-10-15",
        hora: "09:30",
        especialidad: "Cirujano",
        medico: "Dr. Santiki",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Morón 123"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-9-15",
        hora: "10:30",
        especialidad: "Cirujano",
        medico: "Dra. Kovacic",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Morón 123"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-12-18",
        hora: "09:15",
        especialidad: "Dermatólogo",
        medico: "Dr. Funes",
        lugarDeAtencion: [
            {
                partido: "Adrogué",
                direccion: "Av. Espora 1020"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-22",
        hora: "11:45",
        especialidad: "Cardiología",
        medico: "Dra. Barrenechea",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Av. Hipólito Yrigoyen 2400"
            }
        ]
    },
    {
        numeroAfiliado: 663459905,
        integrante: "Santiago Varela",
        fecha: "2025-10-30",
        hora: "17:00",
        especialidad: "Traumatólogo",
        medico: "Dr. Paredes",
        lugarDeAtencion: [
            {
                partido: "Banfield",
                direccion: "Alsina 332"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-11-12",
        hora: "12:00",
        especialidad: "Traumatólogo",
        medico: "Dr. Goya",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Brown 550"
            }
        ]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-11-14",
        hora: "09:00",
        especialidad: "Clínico",
        medico: "Dr. Herrera",
        lugarDeAtencion: [
            {
                partido: "Ituzaingó",
                direccion: "Rivadavia 9000"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-10-22",
        hora: "10:10",
        especialidad: "Cirujano",
        medico: "Dr. Franchino",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "San Martín 1560"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-09-20",
        hora: "08:15",
        especialidad: "Cirujano",
        medico: "Dr. Maidana",
        lugarDeAtencion: [
            {
                partido: "Haedo",
                direccion: "Av. Rivadavia 17800"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-12-05",
        hora: "13:20",
        especialidad: "Dermatólogo",
        medico: "Dra. Leiva",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Alsina 220"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-28",
        hora: "15:40",
        especialidad: "Cardiología",
        medico: "Dr. Piatti",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Sarmiento 875"
            }
        ]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-12-03",
        hora: "18:30",
        especialidad: "Clínico",
        medico: "Dra. Cobos",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Av. Yrigoyen 501"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-07-14",
        hora: "10:20",
        especialidad: "Dermatólogo",
        medico: "Dra. Leiva",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Alsina 220"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-06-03",
        hora: "14:00",
        especialidad: "Cardiología",
        medico: "Dr. Piatti",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Sarmiento 875"
            }
        ]
    },
    {
        numeroAfiliado: 663459905,
        integrante: "Santiago Varela",
        fecha: "2025-05-22",
        hora: "09:45",
        especialidad: "Traumatólogo",
        medico: "Dr. Goya",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Brown 550"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-08-11",
        hora: "16:00",
        especialidad: "Traumatólogo",
        medico: "Dr. Paredes",
        lugarDeAtencion: [
            {
                partido: "Banfield",
                direccion: "Alsina 332"
            }
        ]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-06-19",
        hora: "11:30",
        especialidad: "Clínico",
        medico: "Dr. Herrera",
        lugarDeAtencion: [
            {
                partido: "Ituzaingó",
                direccion: "Rivadavia 9000"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-05-28",
        hora: "08:30",
        especialidad: "Cirujano",
        medico: "Dr. Franchino",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "San Martín 1560"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-07-02",
        hora: "13:15",
        especialidad: "Cirujano",
        medico: "Dr. Maidana",
        lugarDeAtencion: [
            {
                partido: "Haedo",
                direccion: "Av. Rivadavia 17800"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-05-17",
        hora: "09:00",
        especialidad: "Dermatólogo",
        medico: "Dr. Funes",
        lugarDeAtencion: [
            {
                partido: "Adrogué",
                direccion: "Av. Espora 1020"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-08-25",
        hora: "17:40",
        especialidad: "Cardiología",
        medico: "Dra. Barrenechea",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Av. Hipólito Yrigoyen 2400"
            }
        ]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-07-09",
        hora: "15:25",
        especialidad: "Clínico",
        medico: "Dra. Cobos",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Av. Yrigoyen 501"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-06-27",
        hora: "12:50",
        especialidad: "Traumatólogo",
        medico: "Dr. Goya",
        lugarDeAtencion: [
            {
                partido: "Banfield",
                direccion: "Alsina 332"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-08-04",
        hora: "18:10",
        especialidad: "Cirujano",
        medico: "Dr. Franchino",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "San Martín 1560"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-11-28",
        hora: "09:10",
        especialidad: "Dermatólogo",
        medico: "Dra. Montenegro",
        lugarDeAtencion: [
            {
                partido: "Lomas de Zamora",
                direccion: "Av. Meeks 450"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-02",
        hora: "11:20",
        especialidad: "Cardiología",
        medico: "Dr. Ferreyra",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Av. 9 de Julio 755"
            }
        ]
    },
    {
        numeroAfiliado: 663459905,
        integrante: "Santiago Varela",
        fecha: "2025-12-05",
        hora: "15:45",
        especialidad: "Traumatólogo",
        medico: "Dr. Giordano",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Belgrano 210"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-12-03",
        hora: "08:50",
        especialidad: "Traumatólogo",
        medico: "Dr. Paredes",
        lugarDeAtencion: [
            {
                partido: "Banfield",
                direccion: "Alsina 332"
            }
        ]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-11-29",
        hora: "10:30",
        especialidad: "Clínico",
        medico: "Dra. Herrera",
        lugarDeAtencion: [
            {
                partido: "Ituzaingó",
                direccion: "Rivadavia 9000"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-12-09",
        hora: "16:10",
        especialidad: "Cirujano",
        medico: "Dr. Franchino",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "San Martín 1560"
            }
        ]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-12-11",
        hora: "14:00",
        especialidad: "Cirujano",
        medico: "Dra. Kovacic",
        lugarDeAtencion: [
            {
                partido: "Haedo",
                direccion: "Av. Rivadavia 17800"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-12-07",
        hora: "09:50",
        especialidad: "Dermatólogo",
        medico: "Dr. Funes",
        lugarDeAtencion: [
            {
                partido: "Adrogué",
                direccion: "Av. Espora 1020"
            }
        ]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-10",
        hora: "17:15",
        especialidad: "Cardiología",
        medico: "Dra. Barrenechea",
        lugarDeAtencion: [
            {
                partido: "Lanús",
                direccion: "Av. Hipólito Yrigoyen 2400"
            }
        ]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-12-06",
        hora: "13:40",
        especialidad: "Clínico",
        medico: "Dr. Cobos",
        lugarDeAtencion: [
            {
                partido: "Morón",
                direccion: "Av. Yrigoyen 501"
            }
        ]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-12-12",
        hora: "09:25",
        especialidad: "Traumatólogo",
        medico: "Dr. Goya",
        lugarDeAtencion: [
            {
                partido: "Banfield",
                direccion: "Alsina 332"
            }
        ]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-12-08",
        hora: "18:20",
        especialidad: "Cirujano",
        medico: "Dr. Santiki",
        lugarDeAtencion: [
            {
                partido: "Ramos Mejía",
                direccion: "San Martín 1560"
            }
        ]
    },
    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-05-18",
        hora: "08:40",
        especialidad: "Dermatólogo",
        medico: "Dr. Ledesma",
        lugarDeAtencion: [{ partido: "Lomas de Zamora", direccion: "Colombres 701" }]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-06-02",
        hora: "11:15",
        especialidad: "Cardiología",
        medico: "Dra. Molina",
        lugarDeAtencion: [{ partido: "Banfield", direccion: "Alsina 340" }]
    },
    {
        numeroAfiliado: 663459905,
        integrante: "Santiago Varela",
        fecha: "2025-05-29",
        hora: "14:10",
        especialidad: "Traumatólogo",
        medico: "Dr. Figueroa",
        lugarDeAtencion: [{ partido: "Lanús", direccion: "Av. 25 de Mayo 221" }]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-06-07",
        hora: "09:00",
        especialidad: "Traumatólogo",
        medico: "Dr. Murúa",
        lugarDeAtencion: [{ partido: "Adrogué", direccion: "Espora 980" }]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-05-21",
        hora: "10:50",
        especialidad: "Clínico",
        medico: "Dra. Ferreira",
        lugarDeAtencion: [{ partido: "Haedo", direccion: "Rivadavia 17980" }]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-06-12",
        hora: "15:35",
        especialidad: "Cirujano",
        medico: "Dr. Colombi",
        lugarDeAtencion: [{ partido: "Ramos Mejía", direccion: "Pellegrini 1500" }]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-05-17",
        hora: "08:20",
        especialidad: "Cirujano",
        medico: "Dra. Lichtenstein",
        lugarDeAtencion: [{ partido: "Morón", direccion: "Belgrano 450" }]
    },

    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-12-03",
        hora: "10:45",
        especialidad: "Dermatólogo",
        medico: "Dra. Montenegro",
        lugarDeAtencion: [{ partido: "Lanús", direccion: "Av. Hipólito Yrigoyen 2400" }]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-12-06",
        hora: "09:20",
        especialidad: "Cardiología",
        medico: "Dr. Franco",
        lugarDeAtencion: [{ partido: "Lomas de Zamora", direccion: "Portela 220" }]
    },
    {
        numeroAfiliado: 663459905,
        integrante: "Santiago Varela",
        fecha: "2025-12-09",
        hora: "16:05",
        especialidad: "Traumatólogo",
        medico: "Dr. Vignolo",
        lugarDeAtencion: [{ partido: "Banfield", direccion: "Belgrano 341" }]
    },
    {
        numeroAfiliado: 663459903,
        integrante: "Tomás Varela",
        fecha: "2025-12-10",
        hora: "13:30",
        especialidad: "Traumatólogo",
        medico: "Dr. Paredes",
        lugarDeAtencion: [{ partido: "Morón", direccion: "Morón 123" }]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-12-11",
        hora: "08:55",
        especialidad: "Clínico",
        medico: "Dra. Herrera",
        lugarDeAtencion: [{ partido: "Ituzaingó", direccion: "Rivadavia 9000" }]
    },
    {
        numeroAfiliado: 776592801,
        integrante: "Ignacio Palmier",
        fecha: "2025-12-12",
        hora: "18:10",
        especialidad: "Cirujano",
        medico: "Dr. Santiki",
        lugarDeAtencion: [{ partido: "Ramos Mejía", direccion: "San Martín 1560" }]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-12-08",
        hora: "14:45",
        especialidad: "Cirujano",
        medico: "Dra. Kovacic",
        lugarDeAtencion: [{ partido: "Haedo", direccion: "Av. Rivadavia 17800" }]
    },

    {
        numeroAfiliado: 663459901,
        integrante: "Valentín Varela",
        fecha: "2025-05-26",
        hora: "11:10",
        especialidad: "Dermatólogo",
        medico: "Dr. Garritano",
        lugarDeAtencion: [{ partido: "Lomas de Zamora", direccion: "Colombres 421" }]
    },
    {
        numeroAfiliado: 663459904,
        integrante: "Julieta Varela",
        fecha: "2025-06-14",
        hora: "15:00",
        especialidad: "Cardiología",
        medico: "Dr. Barrenechea",
        lugarDeAtencion: [{ partido: "Lanús", direccion: "Av. 9 de Julio 755" }]
    },
    {
        numeroAfiliado: 663459905,
        integrante: "Santiago Varela",
        fecha: "2025-05-30",
        hora: "17:40",
        especialidad: "Traumatólogo",
        medico: "Dr. Giordano",
        lugarDeAtencion: [{ partido: "Banfield", direccion: "Alsina 332" }]
    },
    {
        numeroAfiliado: 938557201,
        integrante: "Santiago Solari",
        fecha: "2025-12-05",
        hora: "09:35",
        especialidad: "Cirujano",
        medico: "Dr. Franchino",
        lugarDeAtencion: [{ partido: "Morón", direccion: "Belgrano 450" }]
    },
    {
        numeroAfiliado: 228510301,
        integrante: "Julieta Molina",
        fecha: "2025-12-04",
        hora: "16:50",
        especialidad: "Clínico",
        medico: "Dr. Varela",
        lugarDeAtencion: [{ partido: "Haedo", direccion: "Güemes 600" }]
    }

]

module.exports = turnos;