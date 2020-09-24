const colors = require('colors');
const fs = require('fs');


let todoList = [];


const createTask = (description) => {

  chargeDB();

  let task = {
    description,
    complete: false
  };

  todoList.push(task);

  saveDB();

  return task;

};


const listTasks = () => {

  chargeDB();

  return todoList;

};


const saveDB = () => {

  let data = JSON.stringify(todoList);

  fs.writeFile('db/data.json', data, (err) => {
    if (err) throw new Error('No fue posible guardar el registro'.red, err);
    console.log('BD Actualizada!'.green);
  });

};


const updateTask = (description, complete = true) => {

  chargeDB();

  let index = todoList.findIndex(task => {
    return task.description === description;
  });

  if (index === -1) {
    return "No existe la descripción suministrada".red;
  }

  todoList[index].complete = complete;

  saveDB();

  return todoList[index];

};


const deleteTask = (description) => {

  chargeDB();

  let index = todoList.findIndex(task => {
    return task.description === description;
  });

  if (index === -1) {
    return "No existe la descripción suministrada".red;
  }

  todoList.splice(index,1);

  saveDB();

  return todoList;
};


const chargeDB = () => {

  try {
    todoList = require('../db/data.json');
  } catch (error) {
    todoList = [];
  }

};


module.exports = {
  createTask,
  saveDB,
  listTasks,
  updateTask,
  deleteTask
};