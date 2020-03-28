
exports.up = function(knex) {
    // table creation
  return knex.schema.createTable("ongs", (table) => {
      table.string("id").primary();
      table.string("name").notNullable()
      table.string("email").notNullable()
      table.string("whatsapp").notNullable()
      table.string("city").notNullable()
      table.string("uf", 2).notNullable()
  })
};

exports.down = function(knex) {
    // erase it
    return knew.schema.dropTable("ongs")
};
