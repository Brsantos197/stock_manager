/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

// PRODUCTS
Route.get('/products', 'ProductsController.index')
Route.post('/product', 'ProductsController.create')
Route.patch('/product/:id', 'ProductsController.update')
Route.delete('/product/:id', 'ProductsController.delete')

// CATEGORIES
Route.get('/categories', 'CategoriesController.index')
Route.post('/category', 'CategoriesController.create')
Route.patch('/category/:id', 'CategoriesController.update')
Route.delete('/category/:id', 'CategoriesController.delete')