import { UsersService } from 'src/users/users.service';
import users from '../data/users'

export async function seedUsers(usersService: UsersService) {

    await usersService.deleteAll();
    
    console.log('Coleccion afiliados limpiada');

    await usersService.insertMany(users);

    console.log('usuarios creados: ', users.length)
}
