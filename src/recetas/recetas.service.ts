import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Receta } from '../schemas/receta.schema';
import { CreateRecetaDto } from './dto/create-receta.dto';

@Injectable()
export class RecetasService {
    constructor(@InjectModel(Receta.name) private recetaModel: Model<Receta>) {

    }

    //Buscar TODAS las recetas
    async findAll(): Promise<Receta[]> {
        return this.recetaModel.find().exec();
    }

    //Buscar recetas por NUMERO de AFILIADO
    //EJ 663459901, 663459902, 663459903
    //Es afiliado titular si los dos ultimos digitos son '01' slice(7,9) === 01
    async findByNumeroAfiliado(nroABuscar: string): Promise<Receta[]> {
        const afiliadoComun = nroABuscar.slice(0,7);
        const esTitular = nroABuscar.slice(7,9) === '01';

        if (esTitular) {
            const numeroAfiliadoComun = parseInt(afiliadoComun);
            const rangoInferior = numeroAfiliadoComun * 100;        // numeroAfiliado + 00
            const rangoSuperior = numeroAfiliadoComun * 100 + 99;   // numeroAfiliado + 99

            return this.recetaModel.find({numeroAfiliado: { $gte: rangoInferior, $lte: rangoSuperior } }).exec();
        } else {
            return this.recetaModel.find({numeroAfiliado: parseInt(nroABuscar)}).exec();
        }
    }

    async deleteAll(): Promise<void> {
        await this.recetaModel.deleteMany({});
    }

    async create(recetaACrear: CreateRecetaDto): Promise<Receta> {
        
        // Calcular el nuevo número
        // numeroAfiliado+numeroIntegrante+tipoDeSolicitud+secuencia = 1234567-01-23-0001 = 123456701230001
        // turnos - autorizaciones - recetas - reintegros


        // numeroAfiliado = 7 numeros
        // numeroIntegrante = 2 numeros
        // recetas = 2 numeros en este caso: 20 
        // secuencia = 4 numeros


        // filtrar por afiliados
        // filtrar por integrante (si es necesario)
        // filtrar por tipo de solicitud (recetas = 20)
        // obtener la ultima secuencia y sumarle 1
        // si no hay, empezar en 0001

        const afiliado = recetaACrear.numeroAfiliado; //1234567-01
        const prefijoReceta = 20;
        const ultimaReceta = await this.recetaModel
            .findOne({ numeroAfiliado: afiliado})
            .sort({ numeroOrden: -1 })
            .exec();

        // Obtener la última receta filtrada
        // const ultimaRecetaFiltrada = recetasFiltradas.length > 0 ? recetasFiltradas[recetasFiltradas.length - 1] : null;
        const nuevoNumeroOrden = ultimaReceta ? ultimaReceta.numeroOrden + 1 : recetaACrear.numeroAfiliado * 1000000 + prefijoReceta * 10000 + 1; 
        // 1234567000000 + 200000 + 1

        // Crear la nueva receta con ese número
        const recetaCreada = new this.recetaModel({
            ...recetaACrear,
            numeroOrden: nuevoNumeroOrden,
        });

        return recetaCreada.save();
    }

    async insertMany(recetas: CreateRecetaDto[]): Promise<Receta[]> {
        return this.recetaModel.insertMany(recetas).then((docs) => docs.map((d) => d.toObject())); // esto convierte los docs en objetos simples (sin metodos de mongoose)
    }
}
