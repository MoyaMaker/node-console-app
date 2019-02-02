const { TaskService } = require('../services/TaskService');
const colors = require('colors');

class Task {
  constructor() {
    this.todoList = TaskService.getTasks;
  }

  Create(description) {
    const newTask = {
      description,
      status: false
    };

    this.todoList.push(newTask);
    
    TaskService.saveTasks(this.todoList);

    console.log(colors.green(`= Tarea creada =`));
    console.log(colors.green(`Tarea: ${description}`));
    
  }

  Read(all = false, complete = false) {
    let filterList = [];
    let showList = [];
    if (all === true) {
      filterList = this.todoList;
    } else if (complete === true) {
      filterList = this.todoList.filter(task => task.status === true);
    } else {
      filterList = this.todoList.filter(task => task.status === false);
    }

    Array.from(filterList).forEach(task => {
      showList.push({
        Tarea: task.description,
        Estado: TaskService.getStatus(task.status)
      });
    });
    console.table(showList);
  }

  Update(description, status) {
    const indexTask = TaskService.findTask(this.todoList, description);
    if (indexTask === -1) {
      console.log(colors.red('No se encontró la descripción: ') + colors.yellow(description))
      return;
    }
    this.todoList[indexTask].status = status;

    TaskService.saveTasks(this.todoList);

    console.log(colors.green(`= Tarea Actualizada =`));
    console.log(colors.green(`Tarea: ${description}`));
    console.log(colors.green(`Estado: ${TaskService.getStatus(status)}`));
  }

  Delete(description) {
    const indexTask = TaskService.findTask(this.todoList, description);
    if (indexTask === -1) {
      console.log(colors.red('No se encontró la descripción: ') + colors.yellow(description))
      return;
    }
    this.todoList.splice(indexTask, 1);

    TaskService.saveTasks(this.todoList);

    console.log(colors.green(`= Tarea Eliminada =`));
    console.log(colors.green(`Tarea: ${description}`));
  }
}

module.exports = {
  Task
}