import * as health from './ping';
import * as testingF from './prueba';
import * as analizador from './parser';
export default{
    ...health,
    ...testingF,
    ...analizador
}