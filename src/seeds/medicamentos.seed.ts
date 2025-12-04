import { MedicamentosService } from 'src/medicamentos/medicamentos.service';
import medicamentos from '../data/medicamentos'

export async function seedMedicamentos(medicamentoACrear: MedicamentosService) {
    await medicamentoACrear.deleteAll();
    
    console.log('Coleccion medicamentos limpiada');

    await medicamentoACrear.insertMany(medicamentos);

    console.log('medicamentos creados: ', medicamentos.length)
}
