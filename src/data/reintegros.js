const reintegros = [
  {
    "numeroAfiliado": 126535701,
    "numeroOrden": "126535701200001",
    "estado": "Pago",
    "fechaDeCarga": "2023-10-18T10:00:00.000Z",
    "fechaDePrestacion": "2015-05-03T00:00:00.000Z",
    "integrante": "Kyle Crane",
    "medico": "Dr. Zere",
    "especialidad": "Científico virólogo",
    "lugarDeAtencion": "Laboratorio móvil",
    "observaciones": "Consulta post-vacuna",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2024-10-17T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200001",
    "estado": "Pendiente",
    "fechaDeCarga": "2024-09-01T15:30:00.000Z",
    "fechaDePrestacion": "2024-08-28T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Lena",
    "especialidad": "Clínica médica",
    "lugarDeAtencion": "Centro Médico Sector A",
    "observaciones": "Control anual y análisis",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2024-08-30T00:00:00.000Z",
      "monto": 6200,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200001",
    "estado": "Rechazado",
    "fechaDeCarga": "2024-08-20T11:45:00.000Z",
    "fechaDePrestacion": "2024-08-15T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Dr. Camden",
    "especialidad": "Traumatología",
    "lugarDeAtencion": "Hospital Central",
    "observaciones": "Fractura menor en muñeca.",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2024-08-18T00:00:00.000Z",
      "monto": 12000,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200001",
    "estado": "Pago",
    "fechaDeCarga": "2024-07-05T09:10:00.000Z",
    "fechaDePrestacion": "2024-06-30T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Zere",
    "especialidad": "Científico virólogo",
    "lugarDeAtencion": "Laboratorio móvil",
    "observaciones": "Segundo chequeo trimestral",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2024-07-03T00:00:00.000Z",
      "monto": 3800,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200001",
    "estado": "Pago",
    "fechaDeCarga": "2024-05-12T14:20:00.000Z",
    "fechaDePrestacion": "2024-05-08T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dr. Zere",
    "especialidad": "Clínica médica",
    "lugarDeAtencion": "Centro Médico Sector A",
    "observaciones": "Control de rutina.",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2024-05-10T00:00:00.000Z",
      "monto": 5100,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },
  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200001",
    "estado": "Pendiente",
    "fechaDeCarga": "2024-04-01T10:00:00.000Z",
    "fechaDePrestacion": "2024-03-27T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dra. Lena",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Consultorio Pediátrico",
    "observaciones": "Vacuna obligatoria.",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2024-03-29T00:00:00.000Z",
      "monto": 3000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200001",
    "estado": "Rechazado",
    "fechaDeCarga": "2024-02-19T17:00:00.000Z",
    "fechaDePrestacion": "2024-02-14T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Dr. Camden",
    "especialidad": "Dermatología",
    "lugarDeAtencion": "Clínica de Piel",
    "observaciones": "Tratamiento no cubierto.",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2024-02-16T00:00:00.000Z",
      "monto": 7500,
      "personaFacturada": "Kyle Crane",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200001",
    "estado": "Pago",
    "fechaDeCarga": "2024-01-10T08:30:00.000Z",
    "fechaDePrestacion": "2024-01-05T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dra. Lena",
    "especialidad": "Clínica médica",
    "lugarDeAtencion": "Hospital Central",
    "observaciones": "Revisión general post-gripe.",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2024-01-08T00:00:00.000Z",
      "monto": 4900,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },
  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200002",
    "estado": "Pago",
    "fechaDeCarga": "2023-12-05T12:00:00.000Z",
    "fechaDePrestacion": "2023-11-30T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dr. Zere",
    "especialidad": "Científico virólogo",
    "lugarDeAtencion": "Laboratorio móvil",
    "observaciones": "Chequeo de fin de año.",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2023-12-03T00:00:00.000Z",
      "monto": 4100,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200002",
    "estado": "Pendiente",
    "fechaDeCarga": "2023-11-28T10:00:00.000Z",
    "fechaDePrestacion": "2023-11-25T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Dra. Morgan",
    "especialidad": "Nutricionista",
    "lugarDeAtencion": "Consultorio Pediátrico",
    "observaciones": "Control de crecimiento.",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2023-11-27T00:00:00.000Z",
      "monto": 2500,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200002",
    "estado": "Pago",
    "fechaDeCarga": "2023-10-14T11:00:00.000Z",
    "fechaDePrestacion": "2023-10-10T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Zere",
    "especialidad": "Clínica médica",
    "lugarDeAtencion": "Centro Médico Sector A",
    "observaciones": "Análisis de laboratorio.",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2023-10-12T00:00:00.000Z",
      "monto": 5500,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200002",
    "estado": "Pendiente",
    "fechaDeCarga": "2023-08-25T16:00:00.000Z",
    "fechaDePrestacion": "2023-08-20T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dra. Morgan",
    "especialidad": "Oftalmología",
    "lugarDeAtencion": "Consultorio Ocular",
    "observaciones": "Revisión visual.",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2023-08-23T00:00:00.000Z",
      "monto": 6800,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200002",
    "estado": "Rechazado",
    "fechaDeCarga": "2023-07-03T09:00:00.000Z",
    "fechaDePrestacion": "2023-06-29T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dr. Camden",
    "especialidad": "Kinesiología",
    "lugarDeAtencion": "Centro de Rehabilitación",
    "observaciones": "Sesiones de rehabilitación sin orden.",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2023-07-01T00:00:00.000Z",
      "monto": 9000,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200002",
    "estado": "Pago",
    "fechaDeCarga": "2023-05-19T13:40:00.000Z",
    "fechaDePrestacion": "2023-05-15T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Dra. Lena",
    "especialidad": "Clínica médica",
    "lugarDeAtencion": "Centro Médico Sector A",
    "observaciones": "Control por dolor de cabeza.",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2023-05-17T00:00:00.000Z",
      "monto": 3500,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },
  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200002",
    "estado": "Pago",
    "fechaDeCarga": "2023-04-12T10:00:00.000Z",
    "fechaDePrestacion": "2023-04-08T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dra. Morgan",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Consultorio Pediátrico",
    "observaciones": "Consulta por resfrío.",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2023-04-10T00:00:00.000Z",
      "monto": 2800,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200003",
    "estado": "Pendiente",
    "fechaDeCarga": "2023-02-01T14:00:00.000Z",
    "fechaDePrestacion": "2023-01-27T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dr. Zere",
    "especialidad": "Científico virólogo",
    "lugarDeAtencion": "Laboratorio móvil",
    "observaciones": "Primer chequeo anual.",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2023-01-30T00:00:00.000Z",
      "monto": 4300,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200003",
    "estado": "Rechazado",
    "fechaDeCarga": "2022-11-20T11:00:00.000Z",
    "fechaDePrestacion": "2022-11-15T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Dra. Morgan",
    "especialidad": "Clínica médica",
    "lugarDeAtencion": "Centro Médico Sector A",
    "observaciones": "Documentación incompleta.",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2022-11-18T00:00:00.000Z",
      "monto": 5800,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200003",
    "estado": "Pago",
    "fechaDeCarga": "2022-09-10T15:00:00.000Z",
    "fechaDePrestacion": "2022-09-05T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Camden",
    "especialidad": "Traumatología",
    "lugarDeAtencion": "Hospital Central",
    "observaciones": "Revisión de lesión antigua.",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2022-09-08T00:00:00.000Z",
      "monto": 8100,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200003",
    "estado": "Pendiente",
    "fechaDeCarga": "2022-06-05T09:30:00.000Z",
    "fechaDePrestacion": "2022-06-01T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dra. Lena",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Consultorio Pediátrico",
    "observaciones": "Control de crecimiento.",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2022-06-03T00:00:00.000Z",
      "monto": 2200,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200003",
    "estado": "Pago",
    "fechaDeCarga": "2015-03-14T00:00:00.000Z",
    "fechaDePrestacion": "2015-03-14T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dr. Zere",
    "especialidad": "Científico virólogo",
    "lugarDeAtencion": "Laboratorio móvil",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2015-03-14T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200004",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-01-05T15:00:00.000Z",
    "fechaDePrestacion": "2025-03-05T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Ríos",
    "especialidad": "Kinesiología",
    "lugarDeAtencion": "Sanatorio Juncal",
    "observaciones": "Revisión de lesión.",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2025-01-08T00:00:00.000Z",
      "monto": 10000,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200005",
    "estado": "Pago",
    "fechaDeCarga": "2025-07-07T15:00:00.000Z",
    "fechaDePrestacion": "2025-07-07T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dra. Díaz",
    "especialidad": "Clínica",
    "lugarDeAtencion": "Sanatorio Otamendi",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-07-07T00:00:00.000Z",
      "monto": 12000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200006",
    "estado": "Pago",
    "fechaDeCarga": "2025-07-08T15:00:00.000Z",
    "fechaDePrestacion": "2025-07-20T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dra. Díaz",
    "especialidad": "Clínica",
    "lugarDeAtencion": "Sanatorio Otamendi",
    "observaciones": "",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2025-07-09T00:00:00.000Z",
      "monto": 5000,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },

  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200007",
    "estado": "Pago",
    "fechaDeCarga": "2025-09-15T15:00:00.000Z",
    "fechaDePrestacion": "2025-09-20T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dra. Sosa",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Clínica Constituyentes",
    "observaciones": "",
    "datosFactura": {
      "cuit": 271234567814,
      "fechaDeFactura": "2025-09-15T00:00:00.000Z",
      "monto": 5400,
      "personaFacturada": "Tariq Khan",
      "medioDePago": "Transferencia",
      "cbu": "0000003100009876543210"
    }
  },

  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200008",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-20T15:00:00.000Z",
    "fechaDePrestacion": "2025-11-25T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Martinez",
    "especialidad": "Traumatólogo",
    "lugarDeAtencion": "Clínica Constituyentes",
    "observaciones": "",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2025-11-25T00:00:00.000Z",
      "monto": 8100,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200001",
    "estado": "Pago",
    "fechaDeCarga": "2025-01-15T15:00:00.000Z",
    "fechaDePrestacion": "2025-01-25T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dr. Menendez",
    "especialidad": "Kinesiología",
    "lugarDeAtencion": "Clínica Constituyentes",
    "observaciones": "",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2025-01-25T00:00:00.000Z",
      "monto": 8100,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200002",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-03-01T15:00:00.000Z",
    "fechaDePrestacion": "2025-03-01T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Lic. Gutierrez",
    "especialidad": "Psicología",
    "lugarDeAtencion": "Clínica Cruz Celeste",
    "observaciones": "",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2025-03-05T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200003",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-08-06T15:00:00.000Z",
    "fechaDePrestacion": "2025-08-09T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dra. Miño",
    "especialidad": "Clínica",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-08-09T00:00:00.000Z",
      "monto": 5000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200004",
    "estado": "Pago",
    "fechaDeCarga": "2025-09-10T15:00:00.000Z",
    "fechaDePrestacion": "2025-09-10T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dra. Aguirre",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-09-10T00:00:00.000Z",
      "monto": 5000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200005",
    "estado": "Observación",
    "fechaDeCarga": "2025-11-10T15:00:00.000Z",
    "fechaDePrestacion": "2025-11-10T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dra. Aguirre",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-11T00:00:00.000Z",
      "monto": 10000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200006",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-11-21T15:00:00.000Z",
    "fechaDePrestacion": "2025-11-21T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dr. Castillán",
    "especialidad": "Clínica",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "Chequeo por dolor abdominal.",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-22T00:00:00.000Z",
      "monto": 10000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200007",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-24T15:00:00.000Z",
    "fechaDePrestacion": "2025-11-24T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dr. Castillán",
    "especialidad": "Clínica",
    "lugarDeAtencion": "Sanatorio Juncal",
    "observaciones": "Chequeo por dolor abdominal.",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-12-03T00:00:00.000Z",
      "monto": 10500,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459902,
    "numeroOrden": "663459902200008",
    "estado": "Pago",
    "fechaDeCarga": "2025-12-03T15:00:00.000Z",
    "fechaDePrestacion": "2025-12-03T00:00:00.000Z",
    "integrante": "Millie Bobby Brown",
    "medico": "Dr. Molinari",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-12-03T00:00:00.000Z",
      "monto": 10500,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200010",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-11-24T15:00:00.000Z",
    "fechaDePrestacion": "2025-11-25T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Martinez",
    "especialidad": "Endocrinólogo",
    "lugarDeAtencion": "Clínica Cruz Celeste",
    "observaciones": "",
    "datosFactura": {
      "cuit": 305566778895,
      "fechaDeFactura": "2025-11-25T00:00:00.000Z",
      "monto": 12000,
      "personaFacturada": "Rahim Aldemir",
      "medioDePago": "Efectivo",
      "cbu": null
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200011",
    "estado": "Observación",
    "fechaDeCarga": "2025-12-01T15:00:00.000Z",
    "fechaDePrestacion": "2025-12-10T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dra. Aguilar",
    "especialidad": "Clínica",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-12-03T00:00:00.000Z",
      "monto": 10500,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },
  {
    "numeroAfiliado": 663459901,
    "numeroOrden": "663459901200012",
    "estado": "Observación",
    "fechaDeCarga": "2025-12-01T15:00:00.000Z",
    "fechaDePrestacion": "2025-12-10T00:00:00.000Z",
    "integrante": "Valentin Varela",
    "medico": "Dr. Jara",
    "especialidad": "Nefrología",
    "lugarDeAtencion": "Sanatorio Juncal",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-12-03T00:00:00.000Z",
      "monto": 10500,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200004",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-01-02T14:00:00.000Z",
    "fechaDePrestacion": "2025-01-10T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dr. Aguilar",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "Primer chequeo anual.",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-01-11T00:00:00.000Z",
      "monto": 10000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200005",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-08-08T14:00:00.000Z",
    "fechaDePrestacion": "2025-08-10T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Cantero",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Sanatorio Juncal",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-08-10T00:00:00.000Z",
      "monto": 10000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200006",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-09-09T14:00:00.000Z",
    "fechaDePrestacion": "2025-09-10T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Carrasco",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Sanatorio Juncal",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-09-10T00:00:00.000Z",
      "monto": 8000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200007",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-11-11T14:00:00.000Z",
    "fechaDePrestacion": "2025-11-18T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Aguirre",
    "especialidad": "Psicología",
    "lugarDeAtencion": "Clínica Aguero",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-14T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200008",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-15T14:00:00.000Z",
    "fechaDePrestacion": "2025-11-18T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Álvarez",
    "especialidad": "Kinesiología",
    "lugarDeAtencion": "Clínica Aguero",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-15T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200009",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-25T14:00:00.000Z",
    "fechaDePrestacion": "2025-11-28T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Maldonado",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-25T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200010",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-30T14:00:00.000Z",
    "fechaDePrestacion": "2025-11-30T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Maldonado",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-30T00:00:00.000Z",
      "monto": 7000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },
  {
    "numeroAfiliado": 663459903,
    "numeroOrden": "663459903200011",
    "estado": "Observación",
    "fechaDeCarga": "2025-11-30T14:00:00.000Z",
    "fechaDePrestacion": "2025-11-30T00:00:00.000Z",
    "integrante": "Tomas Varela",
    "medico": "Dra. Gutierrez",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-30T00:00:00.000Z",
      "monto": 7000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200004",
    "estado": "Pago",
    "fechaDeCarga": "2025-01-19T00:00:00.000Z",
    "fechaDePrestacion": "2025-01-14T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dr. Zere",
    "especialidad": "Científico virólogo",
    "lugarDeAtencion": "Laboratorio móvil",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-01-14T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200005",
    "estado": "Pago",
    "fechaDeCarga": "2025-05-05T00:00:00.000Z",
    "fechaDePrestacion": "2025-05-14T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dr. Carabajal",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Sanatorio Otamendi",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2023-05-14T00:00:00.000Z",
      "monto": 8000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200006",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-07-17T00:00:00.000Z",
    "fechaDePrestacion": "2025-07-19T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dra. Arevalo",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2023-07-19T00:00:00.000Z",
      "monto": 9000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200007",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-09-29T00:00:00.000Z",
    "fechaDePrestacion": "2025-09-29T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dra. Gubau",
    "especialidad": "Endocrinología",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-09-29T00:00:00.000Z",
      "monto": 4100,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200008",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-12T00:00:00.000Z",
    "fechaDePrestacion": "2025-11-15T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dra. Sosa",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Clínica Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-15T00:00:00.000Z",
      "monto": 4100,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200009",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-29T00:00:00.000Z",
    "fechaDePrestacion": "2025-11-28T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dr. Gutierrez",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Sanatorio Casco",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-28T00:00:00.000Z",
      "monto": 8000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459905,
    "numeroOrden": "663459905200010",
    "estado": "Pago",
    "fechaDeCarga": "2025-12-02T00:00:00.000Z",
    "fechaDePrestacion": "2025-12-03T00:00:00.000Z",
    "integrante": "Santiago Varela",
    "medico": "Dr. Gutierrez",
    "especialidad": "Clínico",
    "lugarDeAtencion": "Sanatorio Casco",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-12-05T00:00:00.000Z",
      "monto": 4000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200003",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-12-01T10:00:00.000Z",
    "fechaDePrestacion": "2025-12-02T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dra. Mendez",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Consultorio Pediátrico",
    "observaciones": "Consulta.",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-12-02T00:00:00.000Z",
      "monto": 5000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },

  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200004",
    "estado": "Pago",
    "fechaDeCarga": "2025-03-13T10:00:00.000Z",
    "fechaDePrestacion": "2025-03-15T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dra. Lopilato",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Consultorio",
    "observaciones": "",
    "datosFactura": {
      "cuit": 349988776654,
      "fechaDeFactura": "2025-01-15T00:00:00.000Z",
      "monto": 5000,
      "personaFacturada": "Jade Aldemir",
      "medioDePago": "Transferencia",
      "cbu": "0000003100004444444444"
    }
  },

  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200005",
    "estado": "Pago",
    "fechaDeCarga": "2025-08-20T10:00:00.000Z",
    "fechaDePrestacion": "2025-08-20T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dr. Aguilar",
    "especialidad": "Endocrinología",
    "lugarDeAtencion": "Clínica Aguero",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-08-20T00:00:00.000Z",
      "monto": 6000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200006",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-12T10:00:00.000Z",
    "fechaDePrestacion": "2025-11-12T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dr. Díaz",
    "especialidad": "Clínico",
    "lugarDeAtencion": "Clínica Cruz Celeste",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-12T00:00:00.000Z",
      "monto": 7800,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200007",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-11-23T10:00:00.000Z",
    "fechaDePrestacion": "2025-11-29T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dra. Menendez",
    "especialidad": "Psicología",
    "lugarDeAtencion": "Clínica Cruz Celeste",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-23T00:00:00.000Z",
      "monto": 15000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },

  {
    "numeroAfiliado": 663459904,
    "numeroOrden": "663459904200008",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-29T10:00:00.000Z",
    "fechaDePrestacion": "2025-11-29T00:00:00.000Z",
    "integrante": "Julieta Varela",
    "medico": "Dra. Menendez",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Clínica Constituyentes",
    "observaciones": "",
    "datosFactura": {
      "cuit": 234455667711,
      "fechaDeFactura": "2025-11-29T00:00:00.000Z",
      "monto": 11000,
      "personaFacturada": "Brecken Harris",
      "medioDePago": "Transferencia",
      "cbu": "0000003100001234567891"
    }
  },



  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200004",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-01-08T11:00:00.000Z",
    "fechaDePrestacion": "2025-01-07T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Dr. Quinteros",
    "especialidad": "Oftalmología",
    "lugarDeAtencion": "Consultorios Externos Unidad B",
    "observaciones": "Requiere autorización previa.",
    "datosFactura": {
      "cuit": 20456789012,
      "fechaDeFactura": "2025-01-07T00:00:00.000Z",
      "monto": 9150,
      "personaFacturada": "Farmacia Central S.A.",
      "medioDePago": "Efectivo",
      "cbu": "0000000100001234567890"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200005",
    "estado": "Pago",
    "fechaDeCarga": "2025-04-15T11:00:00.000Z",
    "fechaDePrestacion": "2025-04-10T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Lic. Ríos",
    "especialidad": "Kinesiología",
    "lugarDeAtencion": "Centro de Rehabilitación 'El Buen Paso'",
    "observaciones": "10 sesiones de rehabilitación.",
    "datosFactura": {
      "cuit": 23543210987,
      "fechaDeFactura": "2025-04-14T00:00:00.000Z",
      "monto": 15000,
      "personaFacturada": "Lic. Analía Ríos",
      "medioDePago": "Débito Automático",
      "cbu": "0000002500005555444433"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200006",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-07-28T11:00:00.000Z",
    "fechaDePrestacion": "2025-07-27T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Dra. Castro",
    "especialidad": "Cardiología",
    "lugarDeAtencion": "Hospital Central",
    "observaciones": "Falta firma del médico en la orden.",
    "datosFactura": {
      "cuit": 30876543210,
      "fechaDeFactura": "2025-07-27T00:00:00.000Z",
      "monto": 7250,
      "personaFacturada": "Hospital Central SRL",
      "medioDePago": "Cheque",
      "cbu": "0000000300009988776655"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200007",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-13T11:00:00.000Z",
    "fechaDePrestacion": "2025-11-12T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Lic. Sosa",
    "especialidad": "Psicología",
    "lugarDeAtencion": "Consultorio Privado",
    "observaciones": "Tratamiento prolongado, 3ra sesión del mes.",
    "datosFactura": {
      "cuit": 27112233445,
      "fechaDeFactura": "2025-11-22T00:00:00.000Z",
      "monto": 6500,
      "personaFacturada": "Lic. Patricia Sosa",
      "medioDePago": "Tarjeta de Crédito",
      "cbu": "0000005000001020304050"
    }
  },
  {
    "numeroAfiliado": 938557201,
    "numeroOrden": "938557201200008",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-28T11:00:00.000Z",
    "fechaDePrestacion": "2025-11-25T00:00:00.000Z",
    "integrante": "Santiago Solari",
    "medico": "Dr. Vázquez",
    "especialidad": "Diagnóstico por Imágenes",
    "lugarDeAtencion": "Clínica Modelo",
    "observaciones": "Estudio simple, sin contraste.",
    "datosFactura": {
      "cuit": 30998877665,
      "fechaDeFactura": "2025-11-29T00:00:00.000Z",
      "monto": 11400,
      "personaFacturada": "Clínica Modelo S.R.L.",
      "medioDePago": "Transferencia",
      "cbu": "0000002100006789012345"
    }
  },

  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200003",
    "estado": "Pago",
    "fechaDeCarga": "2025-01-21T13:40:00.000Z",
    "fechaDePrestacion": "2025-01-18T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Dr. Ruiz",
    "especialidad": "Dermatología",
    "lugarDeAtencion": "Sanatorio Güemes",
    "observaciones": "Consulta por control de lunares.",
    "datosFactura": {
      "cuit": 20412345678,
      "fechaDeFactura": "2025-01-21T00:00:00.000Z",
      "monto": 7900,
      "personaFacturada": "Sanatorio Güemes S.A.",
      "medioDePago": "Transferencia",
      "cbu": "0000001000001122334455"
    }
  },
  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200004",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-03-08T13:40:00.000Z",
    "fechaDePrestacion": "2025-03-05T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Lic. Díaz",
    "especialidad": "Fonoaudiología",
    "lugarDeAtencion": "Centro Terapéutico 'Voz Activa'",
    "observaciones": "La orden no corresponde a la especialidad facturada.",
    "datosFactura": {
      "cuit": 23987654321,
      "fechaDeFactura": "2025-03-07T00:00:00.000Z",
      "monto": 4200,
      "personaFacturada": "Lic. Carla Díaz",
      "medioDePago": "Efectivo",
      "cbu": "0000002200009988776655"
    }
  },
  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200005",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-08-10T13:40:00.000Z",
    "fechaDePrestacion": "2025-08-08T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Dr. Giménez",
    "especialidad": "Gastroenterología",
    "lugarDeAtencion": "Hospital de la Comunidad",
    "observaciones": "Solicitud de endoscopía.",
    "datosFactura": {
      "cuit": 30543210987,
      "fechaDeFactura": "2025-08-09T00:00:00.000Z",
      "monto": 18500,
      "personaFacturada": "Hospital de la Comunidad",
      "medioDePago": "Débito Automático",
      "cbu": "0000003500004455667788"
    }
  },
  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200006",
    "estado": "Pago",
    "fechaDeCarga": "2025-09-20T13:40:00.000Z",
    "fechaDePrestacion": "2025-09-17T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Dra. López",
    "especialidad": "Pediatría",
    "lugarDeAtencion": "Consultorio Pediátrico Central",
    "observaciones": "Control de niño sano.",
    "datosFactura": {
      "cuit": 27334455667,
      "fechaDeFactura": "2025-09-19T00:00:00.000Z",
      "monto": 6100,
      "personaFacturada": "Dra. Sofía López",
      "medioDePago": "Tarjeta de Crédito",
      "cbu": "0000004000001020304050"
    }
  },
  {
    "numeroAfiliado": 228510301,
    "numeroOrden": "228510301200007",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-14T13:40:00.000Z",
    "fechaDePrestacion": "2025-11-21T00:00:00.000Z",
    "integrante": "Julieta Molina",
    "medico": "Dr. Ibarra",
    "especialidad": "Odontología",
    "lugarDeAtencion": "Clínica Odontológica Integral",
    "observaciones": "Extracción de molar.",
    "datosFactura": {
      "cuit": 30112233445,
      "fechaDeFactura": "2025-11-30T00:00:00.000Z",
      "monto": 12800,
      "personaFacturada": "Clínica Odontológica S.R.L.",
      "medioDePago": "Transferencia",
      "cbu": "0000001500006789012345"
    }
  },

  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200004",
    "estado": "Pago",
    "fechaDeCarga": "2025-01-20T09:30:00.000Z",
    "fechaDePrestacion": "2025-01-18T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dr. Sosa",
    "especialidad": "Traumatología",
    "lugarDeAtencion": "Clínica de la Columna",
    "observaciones": "Control post-yeso en tobillo.",
    "datosFactura": {
      "cuit": 20123456789,
      "fechaDeFactura": "2025-01-19T00:00:00.000Z",
      "monto": 15600,
      "personaFacturada": "Clínica de la Columna SRL",
      "medioDePago": "Tarjeta de Débito",
      "cbu": "0000001000001111222233"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200005",
    "estado": "Pago",
    "fechaDeCarga": "2025-07-30T09:30:00.000Z",
    "fechaDePrestacion": "2025-07-28T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dra. Ramos",
    "especialidad": "Nutrición",
    "lugarDeAtencion": "Consultorio Externo Unidad C",
    "observaciones": "",
    "datosFactura": {
      "cuit": 27987654321,
      "fechaDeFactura": "2025-07-29T00:00:00.000Z",
      "monto": 5100,
      "personaFacturada": "Dra. Silvina Ramos",
      "medioDePago": "Efectivo",
      "cbu": "0000002500009999888877"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200006",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-09-13T09:30:00.000Z",
    "fechaDePrestacion": "2025-09-10T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Lic. Pereyra",
    "especialidad": "Psicopedagogía",
    "lugarDeAtencion": "Centro Educativo Integral",
    "observaciones": "Sesión de evaluación. Motivo: Orden vencida.",
    "datosFactura": {
      "cuit": 23678901234,
      "fechaDeFactura": "2025-09-12T00:00:00.000Z",
      "monto": 4500,
      "personaFacturada": "Lic. Matías Pereyra",
      "medioDePago": "Cheque",
      "cbu": "0000003000005555444433"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200007",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-15T09:30:00.000Z",
    "fechaDePrestacion": "2025-11-12T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dr. Juárez",
    "especialidad": "Otorrinolaringología",
    "lugarDeAtencion": "Clínica San Marcos",
    "observaciones": "Control de oído y audición.",
    "datosFactura": {
      "cuit": 30556677889,
      "fechaDeFactura": "2025-11-22T00:00:00.000Z",
      "monto": 8900,
      "personaFacturada": "Clínica San Marcos S.A.",
      "medioDePago": "Transferencia",
      "cbu": "0000004100001010101010"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200008",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-29T09:30:00.000Z",
    "fechaDePrestacion": "2025-11-27T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dra. Bosch",
    "especialidad": "Análisis Clínicos",
    "lugarDeAtencion": "Laboratorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 27001122334,
      "fechaDeFactura": "2025-11-29T00:00:00.000Z",
      "monto": 7300,
      "personaFacturada": "Laboratorio Central S.R.L.",
      "medioDePago": "Transferencia",
      "cbu": "0000000500006789012345"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200009",
    "estado": "Observación",
    "fechaDeCarga": "2025-11-30T09:30:00.000Z",
    "fechaDePrestacion": "2025-12-20T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dr. Bosco",
    "especialidad": "Clínico",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 27001122394,
      "fechaDeFactura": "2025-12-29T00:00:00.000Z",
      "monto": 5000,
      "personaFacturada": "Sanatorio Central S.R.L.",
      "medioDePago": "Transferencia",
      "cbu": "0000000500006789010345"
    }
  },
  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200010",
    "estado": "Pago",
    "fechaDeCarga": "2025-11-22T09:30:00.000Z",
    "fechaDePrestacion": "2025-11-25T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Lic. Calvo",
    "especialidad": "Psicología",
    "lugarDeAtencion": "Sanatorio Central",
    "observaciones": "",
    "datosFactura": {
      "cuit": 27001122394,
      "fechaDeFactura": "2025-11-29T00:00:00.000Z",
      "monto": 12000,
      "personaFacturada": "Sanatorio Central S.R.L.",
      "medioDePago": "Transferencia",
      "cbu": "0000000500006789010345"
    }
  },

  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200011",
    "estado": "Rechazado",
    "fechaDeCarga": "2025-11-28T09:30:00.000Z",
    "fechaDePrestacion": "2025-12-02T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dra. Aguirre",
    "especialidad": "Dermatología",
    "lugarDeAtencion": "Clínica San Marcos",
    "observaciones": "Control.",
    "datosFactura": {
      "cuit": 30556677889,
      "fechaDeFactura": "2025-12-09T00:00:00.000Z",
      "monto": 8900,
      "personaFacturada": "Clínica San Marcos S.A.",
      "medioDePago": "Transferencia",
      "cbu": "0000004100001010101010"
    }
  },

  {
    "numeroAfiliado": 776592801,
    "numeroOrden": "776592801200012",
    "estado": "Pendiente",
    "fechaDeCarga": "2025-11-28T09:30:00.000Z",
    "fechaDePrestacion": "2025-12-02T00:00:00.000Z",
    "integrante": "Ignacio Palmier",
    "medico": "Dr. Mendez",
    "especialidad": "Neurología",
    "lugarDeAtencion": "Clínica San Marcos",
    "observaciones": "Control.",
    "datosFactura": {
      "cuit": 30556677889,
      "fechaDeFactura": "2025-12-09T00:00:00.000Z",
      "monto": 8900,
      "personaFacturada": "Clínica San Marcos S.A.",
      "medioDePago": "Transferencia",
      "cbu": "0000004100001010101010"
    }
  },

  
]

export default reintegros;