import { Controller, Get} from '@nestjs/common';
import { MedicamentosService } from './medicamentos.service';
import { Medicamento } from 'src/schemas/medicamento.schema';

@Controller('medicamentos')
export class MedicamentosController {
    constructor(private readonly medicamentosService: MedicamentosService) {}

    @Get()
    async findAll(): Promise<Medicamento[]> {
        return this.medicamentosService.findAll();
    }

}
