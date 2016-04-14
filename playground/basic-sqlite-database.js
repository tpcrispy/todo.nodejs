var Sequelize = require('sequelize');
var sequelize = new Sequelize(undefined, undefined, undefined, {
	dialect: 'sqlite',
	storage: __dirname + '/basic-sqlite-database.sqlite'
});

var Todo = sequelize.define('todo', {
	description: {
		type: Sequelize.STRING,
		allowNull: false,
		validate: {
			len: [1, 200]

		}

	},
	completed: {
		type: Sequelize.BOOLEAN,
		allowNull: false,
		defaultValue: false

	}

});

sequelize.sync({
	//force: true
}).then(function() {
	console.log('Everything is synced');

	ToDo.findById(2).then(function(todo){
		if (todo){
			console.log(todo.toJSON());
		}else {
			console.log('todo no found');
		}
	});


	