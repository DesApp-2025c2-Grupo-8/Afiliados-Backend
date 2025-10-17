const recetas = [
  {
    numeroOrden: 126535701200001,
    numeroAfiliado: 126535701,
    fechaDeCarga: '2015-05-03',
    integrante: 'Kyle Crane',
    medicamento: 'Antizina',
    cantidad: 1,
    presentacion: 'Inyectable',
    observaciones: 'Usar solo en crisis'
  },
  {
    numeroOrden: 663459902200001,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2015-03-14',
    integrante: 'Tomas Varela',
    medicamento: 'Omeprazol',
    cantidad: 17,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 938557201200001,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2016-06-22',
    integrante: 'Santiago Solari',
    medicamento: 'Amoxicilina',
    cantidad: 11,
    presentacion: 'Jarabe',
    observaciones: 'Agitar antes de usar'
  },
  {
    numeroOrden: 663459901200001,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2017-01-09',
    integrante: 'Valentin Varela',
    medicamento: 'Ibuprofeno',
    cantidad: 24,
    presentacion: 'Cápsulas',
    observaciones: 'Tomar con comida'
  },
  {
    numeroOrden: 776592801200001,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2017-11-30',
    integrante: 'Ignacio Palmier',
    medicamento: 'Diclofenac',
    cantidad: 6,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459903200001,
    numeroAfiliado: 663459903,
    fechaDeCarga: '2018-04-18',
    integrante: 'Santiago Varela',
    medicamento: 'Paracetamol',
    cantidad: 9,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 228510301200001,
    numeroAfiliado: 228510301,
    fechaDeCarga: '2018-09-25',
    integrante: 'Julieta Molina',
    medicamento: 'Insulina',
    cantidad: 2,
    presentacion: 'Inyectable',
    observaciones: 'Evitar exposición solar'
  },
  {
    numeroOrden: 663459904200001,
    numeroAfiliado: 663459904,
    fechaDeCarga: '2019-02-03',
    integrante: 'Julieta Varela',
    medicamento: 'Vitamina C',
    cantidad: 15,
    presentacion: 'Tabletas masticables',
    observaciones: ''
  },
  {
    numeroOrden: 663459902200002,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2019-07-19',
    integrante: 'Tomas Varela',
    medicamento: 'Antizina',
    cantidad: 1,
    presentacion: 'Inyectable',
    observaciones: 'Usar solo en crisis'
  },
  {
    numeroOrden: 938557201200002,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2020-01-11',
    integrante: 'Santiago Solari',
    medicamento: 'Loratadina',
    cantidad: 8,
    presentacion: 'Comprimido',
    observaciones: 'Evitar exposición solar'
  },
  {
    numeroOrden: 663459901200002,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2020-06-28',
    integrante: 'Valentin Varela',
    medicamento: 'Amoxicilina',
    cantidad: 5,
    presentacion: 'Jarabe',
    observaciones: ''
  },
  {
    numeroOrden: 776592801200002,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2020-12-15',
    integrante: 'Ignacio Palmier',
    medicamento: 'Omeprazol',
    cantidad: 10,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 663459903200002,
    numeroAfiliado: 663459903,
    fechaDeCarga: '2021-03-03',
    integrante: 'Santiago Varela',
    medicamento: 'Ibuprofeno',
    cantidad: 7,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 228510301200002,
    numeroAfiliado: 228510301,
    fechaDeCarga: '2021-08-21',
    integrante: 'Julieta Molina',
    medicamento: 'Diclofenac',
    cantidad: 12,
    presentacion: 'Comprimido',
    observaciones: 'No tomar con alcohol'
  },
  {
    numeroOrden: 663459904200002,
    numeroAfiliado: 663459904,
    fechaDeCarga: '2022-01-05',
    integrante: 'Julieta Varela',
    medicamento: 'Paracetamol',
    cantidad: 3,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459902200003,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2022-06-17',
    integrante: 'Tomas Varela',
    medicamento: 'Vitamina C',
    cantidad: 20,
    presentacion: 'Tabletas masticables',
    observaciones: ''
  },
  {
    numeroOrden: 938557201200003,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2022-11-30',
    integrante: 'Santiago Solari',
    medicamento: 'Insulina',
    cantidad: 1,
    presentacion: 'Inyectable',
    observaciones: ''
  },
  {
    numeroOrden: 663459901200003,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2023-03-12',
    integrante: 'Valentin Varela',
    medicamento: 'Loratadina',
    cantidad: 6,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 776592801200003,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2023-07-08',
    integrante: 'Ignacio Palmier',
    medicamento: 'Amoxicilina',
    cantidad: 9,
    presentacion: 'Jarabe',
    observaciones: ''
  },
  {
    numeroOrden: 663459903200003,
    numeroAfiliado: 663459903,
    fechaDeCarga: '2023-11-01',
    integrante: 'Santiago Varela',
    medicamento: 'Antizina',
    cantidad: 2,
    presentacion: 'Inyectable',
    observaciones: 'Usar solo en crisis'
  },
  {
    numeroOrden: 228510301200003,
    numeroAfiliado: 228510301,
    fechaDeCarga: '2024-01-15',
    integrante: 'Julieta Molina',
    medicamento: 'Ibuprofeno',
    cantidad: 14,
    presentacion: 'Cápsulas',
    observaciones: 'Tomar con comida'
  },
  {
    numeroOrden: 663459904200003,
    numeroAfiliado: 663459904,
    fechaDeCarga: '2024-03-22',
    integrante: 'Julieta Varela',
    medicamento: 'Omeprazol',
    cantidad: 11,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 663459902200004,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2024-05-10',
    integrante: 'Tomas Varela',
    medicamento: 'Diclofenac',
    cantidad: 13,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 938557201200004,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2024-07-01',
    integrante: 'Santiago Solari',
    medicamento: 'Paracetamol',
    cantidad: 10,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459901200004,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2024-08-18',
    integrante: 'Valentin Varela',
    medicamento: 'Vitamina C',
    cantidad: 18,
    presentacion: 'Tabletas masticables',
    observaciones: ''
  },
  {
    numeroOrden: 776592801200004,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2024-10-03',
    integrante: 'Ignacio Palmier',
    medicamento: 'Omeprazol',
    cantidad: 22,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 663459903200004,
    numeroAfiliado: 663459903,
    fechaDeCarga: '2024-11-11',
    integrante: 'Santiago Varela',
    medicamento: 'Amoxicilina',
    cantidad: 7,
    presentacion: 'Jarabe',
    observaciones: 'Agitar antes de usar'
  },
  {
    numeroOrden: 228510301200004,
    numeroAfiliado: 228510301,
    fechaDeCarga: '2025-01-02',
    integrante: 'Julieta Molina',
    medicamento: 'Antizina',
    cantidad: 3,
    presentacion: 'Inyectable',
    observaciones: 'Usar solo en crisis'
  },
  {
    numeroOrden: 663459904200004,
    numeroAfiliado: 663459904,
    fechaDeCarga: '2025-01-20',
    integrante: 'Julieta Varela',
    medicamento: 'Ibuprofeno',
    cantidad: 16,
    presentacion: 'Cápsulas',
    observaciones: 'Tomar con comida'
  },
  {
    numeroOrden: 663459902200005,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2025-02-05',
    integrante: 'Tomas Varela',
    medicamento: 'Diclofenac',
    cantidad: 10,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 938557201200005,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2025-02-18',
    integrante: 'Santiago Solari',
    medicamento: 'Vitamina C',
    cantidad: 25,
    presentacion: 'Tabletas masticables',
    observaciones: ''
  },
  {
    numeroOrden: 663459901200005,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2025-03-01',
    integrante: 'Valentin Varela',
    medicamento: 'Insulina',
    cantidad: 2,
    presentacion: 'Inyectable',
    observaciones: 'Evitar exposición solar'
  },
  {
    numeroOrden: 776592801200005,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2025-03-15',
    integrante: 'Ignacio Palmier',
    medicamento: 'Paracetamol',
    cantidad: 5,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459903200005,
    numeroAfiliado: 663459903,
    fechaDeCarga: '2025-03-28',
    integrante: 'Santiago Varela',
    medicamento: 'Loratadina',
    cantidad: 6,
    presentacion: 'Comprimido',
    observaciones: 'Evitar exposición solar'
  },
  {
    numeroOrden: 228510301200005,
    numeroAfiliado: 228510301,
    fechaDeCarga: '2025-04-10',
    integrante: 'Julieta Molina',
    medicamento: 'Omeprazol',
    cantidad: 8,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 663459904200005,
    numeroAfiliado: 663459904,
    fechaDeCarga: '2025-04-22',
    integrante: 'Julieta Varela',
    medicamento: 'Amoxicilina',
    cantidad: 4,
    presentacion: 'Jarabe',
    observaciones: ''
  },
  {
    numeroOrden: 663459902200006,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2025-05-05',
    integrante: 'Tomas Varela',
    medicamento: 'Ibuprofeno',
    cantidad: 12,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 938557201200006,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2025-05-18',
    integrante: 'Santiago Solari',
    medicamento: 'Diclofenac',
    cantidad: 9,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459901200006,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2025-06-01',
    integrante: 'Valentin Varela',
    medicamento: 'Antizina',
    cantidad: 1,
    presentacion: 'Inyectable',
    observaciones: 'Usar solo en crisis'
  },
  {
    numeroOrden: 776592801200006,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2025-06-15',
    integrante: 'Ignacio Palmier',
    medicamento: 'Vitamina C',
    cantidad: 20,
    presentacion: 'Tabletas masticables',
    observaciones: ''
  },
  {
    numeroOrden: 663459903200006,
    numeroAfiliado: 663459903,
    fechaDeCarga: '2025-06-28',
    integrante: 'Santiago Varela',
    medicamento: 'Insulina',
    cantidad: 3,
    presentacion: 'Inyectable',
    observaciones: ''
  },
  {
    numeroOrden: 228510301200006,
    numeroAfiliado: 228510301,
    fechaDeCarga: '2025-07-10',
    integrante: 'Julieta Molina',
    medicamento: 'Paracetamol',
    cantidad: 7,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459904200006,
    numeroAfiliado: 663459904,
    fechaDeCarga: '2025-07-22',
    integrante: 'Julieta Varela',
    medicamento: 'Loratadina',
    cantidad: 5,
    presentacion: 'Comprimido',
    observaciones: ''
  },
  {
    numeroOrden: 663459902200007,
    numeroAfiliado: 663459902,
    fechaDeCarga: '2025-08-05',
    integrante: 'Tomas Varela',
    medicamento: 'Omeprazol',
    cantidad: 14,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 938557201200007,
    numeroAfiliado: 938557201,
    fechaDeCarga: '2025-08-18',
    integrante: 'Santiago Solari',
    medicamento: 'Amoxicilina',
    cantidad: 6,
    presentacion: 'Jarabe',
    observaciones: ''
  },
  {
    numeroOrden: 663459901200007,
    numeroAfiliado: 663459901,
    fechaDeCarga: '2025-09-01',
    integrante: 'Valentin Varela',
    medicamento: 'Ibuprofeno',
    cantidad: 10,
    presentacion: 'Cápsulas',
    observaciones: ''
  },
  {
    numeroOrden: 776592801200007,
    numeroAfiliado: 776592801,
    fechaDeCarga: '2025-09-15',
    integrante: 'Ignacio Palmier',
    medicamento: 'Diclofenac',
    cantidad: 8,
    presentacion: 'Comprimido',
    observaciones: ''
  }
];

export default recetas;