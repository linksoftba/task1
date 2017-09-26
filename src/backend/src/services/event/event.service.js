// Initializes the `Event` service on path `/event`
const createService = require('feathers-sequelize');
const createModel = require('../../models/event.model');
const hooks = require('./event.hooks');
const filters = require('./event.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'event',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/event', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('event');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }

  Promise.all([
    service.create({name: "event 1", time: "09:30:00", date: new Date()}),
    service.create({name: "event 2", time: "06:30:00", date: new Date()}),
    service.create({name: "event 3", time: "09:00:00", date: new Date()}),
    service.create({name: "event 4", time: "08:45:00", date: new Date()}),
    service.create({name: "event 5", time: "00:30:00", date: new Date()}),
    service.create({name: "event 6", time: "12:00:00", date: new Date()}),
    service.create({name: "event 7", time: "10:30:00", date: new Date()}),
    service.create({name: "event 8", time: "09:00:00", date: new Date()}),
    service.create({name: "event 9", time: "05:30:00", date: new Date()}),
    service.create({name: "event 10", time: "03:00:00", date: new Date()}),
  ])

  
  function findEventById(id) {
    service.get(id).then(results => console.log(results));
  }

};
