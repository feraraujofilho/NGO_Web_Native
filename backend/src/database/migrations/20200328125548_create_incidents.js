
exports.up = function(knex) {
    // table creation
  return knex.schema.createTable("incidents", (table) => {
      table.increments()

      table.string("title").notNullable()
      table.string("description").notNullable()
      table.decimal("value").notNullable()

      table.string("ong_id").notNullable()

      table.foreign("ong_id").references("id").inTable("ongs")
  })
};

exports.down = function(knex) {
    // erase it
    return knew.schema.dropTable("incidents")
};
