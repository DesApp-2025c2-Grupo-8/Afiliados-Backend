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
  }
]

export default reintegros;