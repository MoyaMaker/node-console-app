const descripcion = {
  descripcion: {
    // require: true,
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
  }
};

const completado = {
  completado: {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
  }
}

const argv = require('yargs')
  .command('crear', 'Crear un tarea', {
    descripcion
  }) // --descripcion, -d
  .command('actualizar', 'Actualizar un elemento de pendientes', {
    descripcion,
    completado
  })
  .command('listar', 'Mostrar elementos pendientes')
  .command('borrar', 'Eliminar elemento de lista', {
    descripcion
  })
  .help()
  .argv;

module.exports = {
  argv
}