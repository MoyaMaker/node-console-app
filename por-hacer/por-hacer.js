const fs = require('fs');

let todo = [];

const guardarDB = () => {
  const data = JSON.stringify(todo);

  fs.writeFile('db/data.json', data, (error) => {
    if (error) throw Error('No se pudo grabar', error);
  });
};

const cargarDB = () => {
  try {
    todo = require('../db/data.json');
  } catch (error) {
    todo = [];
  }
};

const crear = (descripcion) => {
  cargarDB();

  const porHacer = {
    descripcion,
    completado: false
  }
  todo.push(porHacer);
  guardarDB();

  return porHacer;
};

const getListado = () => {
  cargarDB();
  return todo;
};

const actualizar = (descripcion, completado) => {
  cargarDB();

  const tareaIndex = todo.findIndex(tarea => tarea.descripcion === descripcion);

  if (tareaIndex >= 0) {
    todo[tareaIndex].completado = completado;
    guardarDB();
    return true;
  } else {
    return false;
  }
};

const borrar = (descripcion) => {
  cargarDB();

  const tareaIndex = todo.findIndex(tarea => tarea.descripcion === descripcion);

  if (tareaIndex >= 0) {
    todo.splice(tareaIndex, 1);
    guardarDB();
    return true;
  } else {
    return false;
  }
};

module.exports = {
  crear,
  getListado,
  actualizar,
  borrar
}