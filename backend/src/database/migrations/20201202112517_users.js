
exports.up = function(knex) {
   return knex.schema.createTable('users', function (table) {
        table.increments('id').primary();
        table.string('nome', 50).notNullable();
        table.bigInteger('idade').notNullable();
        table.string('estado_civil', 50).notNullable();
        table.string('cidade', 50).notNullable();
        table.string('estado', 2).notNullable();
        table.timestamps();
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
