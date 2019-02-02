const fs = require('fs');
class TaskService {
  static getStatus(status) {
    return status ? 'Completada' : 'Pendiente';
  }

  static get getTasks() {
    let list;
    try {
      list = require('../db/data.json');
    } catch (error) {
      list = [];
    }
    return list;
  }

  static saveTasks(taskList) {
    const jsonTask = JSON.stringify(taskList);

    fs.writeFile('db/data.json', jsonTask, (error) => {
      if (error) throw Error('No se puedo guardar', error);
    });
  }

  static findTask(taskList, description) {
    return taskList.findIndex(task => task.description === description);
  }
}

module.exports = {
  TaskService
}