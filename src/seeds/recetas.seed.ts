import  { RecetasService } from "../recetas/recetas.service"
import { faker } from '@faker-js/faker';

export async function seedRecetas(recetasService: RecetasService){

    await recetasService.deleteAll();

    const recetas = Array.from({length: 20}).map((_, index) =>({
        numeroOrden: index + 1,
        fechaDeCarga: faker.date.recent( { days: 365}),
        integrante: faker.person.fullName(),
        medicamento: faker.commerce.productName(),
        cantidad: faker.number.int({ min:1, max:30}),
        presentacion: faker.helpers.arrayElement(['tabletas', 'cápsulas', 'jarabe', 'inyecciones', 'pomada']),
        observaciones: faker.helpers.arrayElement([
            'Tomar despues de las comidas',
            'Evitar exposicion al sol',
            'Sin Observaciones'
        ]),
    }))


    await recetasService.insertMany(recetas);

    console.log('recetas creadas')
}