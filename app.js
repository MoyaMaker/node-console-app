const colors = require('colors');

const { argv } = require('./config/yargs');
const { Task } = require('./controllers/TaskController');

const comando = argv._[0];

switch (comando) {
  case 'crear':
    new Task().Create(argv.descripcion);
    break;
  case 'listar':
    new Task().Read(argv.todas, argv.completado);
    break;
  case 'actualizar':
    new Task().Update(argv.descripcion, argv.completado);
    break;
  case 'borrar':
    new Task().Delete(argv.descripcion);
    break;
  default:
    console.log(colors.yellow('Comando no reconocido'));
}