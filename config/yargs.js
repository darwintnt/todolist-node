const argv = require('yargs')
  .command('create', 'create a task', {
      description: {
        alias: 'd',
        demand: true
      }
    })
  .command('update', 'update a task', {
    description: {
      alias: 'd',
      demand: true,
      desc: 'Descripción de la tarea por hacer'
    },
    complete: {
      alias: 'c',
      default: true,
      desc: 'Marcar como completada o pendiente una tarea'
    }
  })
  .command('delete', 'delete a task', {
    description: {
      alias: 'd',
      demand: true,
      desc: 'Descripción de la tarea a eliminar'
    },
  })
  .help()
  .argv;


  module.exports = {
    argv
  };
