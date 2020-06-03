import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('points_items', table => {
    table.increments('id').primary();
    table.integer('point_id').notNullable();
    table.integer('item_id').notNullable();
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropSchema('points_items')
}