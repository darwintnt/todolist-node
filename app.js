const colors = require('colors');
const argv = require('./config/yargs').argv;
const { createTask, listTasks, updateTask, deleteTask } = require('./to-do/todo');

let command = argv._[0];

switch (command) {
  case 'create':
    let task = createTask(argv.description);
    console.log(task);
    break;
  case 'list':
    let tasks = listTasks();

    for (let task of tasks) {
      console.log("=========== Por hacer ==============".green);
      console.log(task.description);
      console.log(`Estado: ${task.complete}`);
      console.log("====================================".green);
    }
    break;
  case 'update':
    let update = updateTask(argv.description, argv.complete);
    console.log(update);
    break;
  case 'delete':
    let trashed = deleteTask(argv.description);
    console.log(trashed);
    break;
  default:
    console.log('command not found'.red);
    break;
}