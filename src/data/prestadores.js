const prestadores = [
    {
        nombre: 'Clínica San José',
        ubicacion: [
            { partido: 'Hurlingham', direccion: 'Av. Vergara 436' }
        ],
        telefono: 1123456789,
        especialidad: 'Clínica General',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dra. María González',
        ubicacion: [
            { partido: 'Morón', direccion: 'Calle Gorriti 1250' },
            { partido: 'Ituzaingó', direccion: 'Av. Ratti 950' }
        ],
        telefono: 1165432198,
        especialidad: 'Pediatría',
        tipo: 'Médico'
    },
    {
        nombre: 'Centro Médico San Martín',
        ubicacion: [
            { partido: 'San Martín', direccion: 'Av. San Martín 980' }
        ],
        telefono: 1147852369,
        especialidad: 'Cardiología',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dr. Ricardo López',
        ubicacion: [
            { partido: 'Ituzaingó', direccion: 'Calle Sarmiento 220' },
            { partido: 'Castelar', direccion: 'Av. Arias 510' }
        ],
        telefono: 1167895432,
        especialidad: 'Dermatología',
        tipo: 'Médico'
    },
    {
        nombre: 'Consultorios del Oeste',
        ubicacion: [
            { partido: 'Morón', direccion: 'Av. Rivadavia 14500, Haedo' }
        ],
        telefono: 1143218756,
        especialidad: 'Traumatología',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dra. Laura Fernández',
        ubicacion: [
            { partido: 'Merlo', direccion: 'Calle Belgrano 854' },
            { partido: 'Moreno', direccion: 'Av. Mitre 1100' }
        ],
        telefono: 1156897412,
        especialidad: 'Ginecología',
        tipo: 'Médico'
    },
    {
        nombre: 'Policlínico Central San Justo',
        ubicacion: [
            { partido: 'La Matanza', direccion: 'Av. Illia 3050, San Justo' }
        ],
        telefono: 1148752365,
        especialidad: 'Clínica General',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dr. Juan Pérez',
        ubicacion: [
            { partido: 'Ramos Mejía', direccion: 'Calle Mitre 640' },
            { partido: 'Morón', direccion: 'Av. Gaona 9950' }
        ],
        telefono: 1169325874,
        especialidad: 'Neurología',
        tipo: 'Médico'
    },
    {
        nombre: 'Clínica del Parque',
        ubicacion: [
            { partido: 'Tres de Febrero', direccion: 'Av. Roca 1215' }
        ],
        telefono: 1158741269,
        especialidad: 'Oftalmología',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dra. Natalia Ríos',
        ubicacion: [
            { partido: 'Morón', direccion: 'Calle Urquiza 950' },
            { partido: 'Ituzaingó', direccion: 'Av. Santa Rosa 3200' }
        ],
        telefono: 1165897432,
        especialidad: 'Endocrinología',
        tipo: 'Médico'
    },
    {
        nombre: 'Centro Médico Hurlingham',
        ubicacion: [
            { partido: 'Hurlingham', direccion: 'Av. Jauretche 1800' }
        ],
        telefono: 1145679832,
        especialidad: 'Clínica General',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dr. Martín Cabrera',
        ubicacion: [
            { partido: 'Luján', direccion: 'Calle Alsina 720' },
            { partido: 'Moreno', direccion: 'Av. del Libertador 2100' }
        ],
        telefono: 1159876541,
        especialidad: 'Otorrinolaringología',
        tipo: 'Médico'
    },
    {
        nombre: 'Instituto del Corazón Oeste',
        ubicacion: [
            { partido: 'Morón', direccion: 'Av. Gaona 9900' }
        ],
        telefono: 1148963214,
        especialidad: 'Cardiología',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dra. Verónica Díaz',
        ubicacion: [
            { partido: 'Ituzaingó', direccion: 'Calle Italia 420' },
            { partido: 'Castelar', direccion: 'Av. Zeballos 1800' }
        ],
        telefono: 1163214789,
        especialidad: 'Nutrición',
        tipo: 'Médico'
    },
    {
        nombre: 'Sanatorio Nuestra Señora del Pilar',
        ubicacion: [
            { partido: 'San Martín', direccion: 'Av. Márquez 2800' }
        ],
        telefono: 1147896523,
        especialidad: 'Clínica General',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dr. Esteban Morales',
        ubicacion: [
            { partido: 'Moreno', direccion: 'Calle French 1150' },
            { partido: 'Merlo', direccion: 'Av. Real 2050' }
        ],
        telefono: 1165479823,
        especialidad: 'Urología',
        tipo: 'Médico'
    },
    {
        nombre: 'Clínica Los Cedros',
        ubicacion: [
            { partido: 'Morón', direccion: 'Av. Rivadavia 17520, Castelar' }
        ],
        telefono: 1147853698,
        especialidad: 'Clínica General',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dra. Julieta Navarro',
        ubicacion: [
            { partido: 'Merlo', direccion: 'Calle Belgrano 500' },
            { partido: 'Moreno', direccion: 'Av. Alcorta 1450' }
        ],
        telefono: 1168759432,
        especialidad: 'Psicología',
        tipo: 'Médico'
    },
    {
        nombre: 'Centro de Salud Santa Clara',
        ubicacion: [
            { partido: 'San Miguel', direccion: 'Av. Mitre 2150' }
        ],
        telefono: 1158964321,
        especialidad: 'Clínica General',
        tipo: 'Clínica'
    },
    {
        nombre: 'Dr. Pablo Herrera',
        ubicacion: [
            { partido: 'Morón', direccion: 'Calle Rodríguez Peña 770' },
            { partido: 'Haedo', direccion: 'Av. Rivadavia 13900' }
        ],
        telefono: 1165412789,
        especialidad: 'Reumatología',
        tipo: 'Médico'
    }
];

export default prestadores;
