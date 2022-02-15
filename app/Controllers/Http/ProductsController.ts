import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product';

export default class ProductsController {
  
  public async index({ response }: HttpContextContract) {
    try {
      const products = await Product.all()
      return response.json(products)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
  public async create({ request, response }: HttpContextContract) {
    try {
      const data = request.body()
      const product = await Product.create(data)
      return response.json(product)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const { name, category_id, type } = request.body()
      const product = await Product.find(id)
      if (product) {
        product.name = name
        product.type = type
        product.category_id = category_id
        await product.save()
      }
      return response.json(product)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const product = await Product.find(id)
      if (product) {
        await product.delete()
      }
      return response.json(product)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

}
