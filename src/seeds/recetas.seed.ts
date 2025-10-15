import { RecetasService } from "../recetas/recetas.service"
import { faker } from '@faker-js/faker';

export async function seedRecetas(recetasService: RecetasService) {

    await recetasService.deleteAll();



    const afiliados = [123456701, 123478901, 765432101, 765432102];

    // cada afiliado arranca con correlativo 0
    const contadores = Object.fromEntries(afiliados.map(a => [a, 0]));

    const recetas = Array.from({ length: 20 }).map(() => {
        // elige un afiliado aleatorio
        const numeroAfiliado = faker.helpers.arrayElement(afiliados);

        // incrementa el correlativo de ese afiliado (independiente del resto)
        contadores[numeroAfiliado]++;

        // formatea el número correlativo a 4 dígitos
        const correlativo = String(contadores[numeroAfiliado]).padStart(4, '0');

        // genera el número de orden: <afiliado>20<correlativo>
        const numeroOrden = Number(`${numeroAfiliado}20${correlativo}`);

        return {
            numeroAfiliado,
            numeroOrden,
            fechaDeCarga: faker.date.recent({ days: 365 }),
            integrante: faker.person.fullName(),
            medicamento: faker.commerce.productName(),
            cantidad: faker.number.int({ min: 1, max: 30 }),
            presentacion: faker.helpers.arrayElement([
                'tabletas',
                'cápsulas',
                'jarabe',
                'inyecciones',
                'pomada',
            ]),
            observaciones: faker.helpers.arrayElement([
                'Tomar después de las comidas',
                'Evitar exposición al sol',
                'Sin observaciones',
            ]),
        };
    });

    // console.log(recetas);




    await recetasService.insertMany(recetas);

    console.log('recetas creadas')
}