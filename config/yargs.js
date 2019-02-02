const descripcion = {
  demand: true,
  alias: 'd',
  desc: 'Descripción de la tarea'
};

const completado = {
  alias: 'c',
  default: true,
  desc: 'Marca como completado o pendiente la tarea'
};

const argv = require('yargs')
  .command('crear', 'Crear un tarea', {
    descripcion
  }) // --descripcion, -d
  .command('actualizar', 'Actualizar un elemento de pendientes', {
    descripcion,
    completado
  })
  .command('listar', 'Mostrar elementos pendientes', {
    todas: {
      alias: 't',
      desc: 'Mostrar todas las tareas'
    },
    completado: {
      alias: 'c',
      desc: 'Mostrar tareas completadas'
    }
  })
  .command('borrar', 'Eliminar elemento de lista', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
}