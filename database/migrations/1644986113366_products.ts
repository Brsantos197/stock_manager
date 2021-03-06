import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Products extends BaseSchema {
  protected tableName = 'products'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('category_id').references('id').inTable('categories').notNullable()
      table.string('name', 100).notNullable()
      table.enum('type', ['DRY', 'REFRIGERATED', 'FROZEN']).defaultTo('DRY')
      table.integer('quantity').defaultTo(0).notNullable()
      table.boolean('status').defaultTo(false).notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
