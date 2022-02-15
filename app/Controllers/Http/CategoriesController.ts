import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Category from 'App/Models/Category'

export default class CategoriesController {
  public async index({ response }: HttpContextContract) {
    try {
      const categories = await Category.all()
      return response.json(categories)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  public async create({ request, response }: HttpContextContract) {
    try {
      const data = request.body()
      const category = await Category.create(data)
      return response.json(category)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  public async update({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const { name } = request.body()
      const category = await Category.find(id)
      if (category) {
        category.name = name
        await category.save()
      }
      return response.json(category)
    } catch (error) {
      console.error(error)
      throw error
    }
  }

  public async delete({ request, response }: HttpContextContract) {
    try {
      const { id } = request.params()
      const category = await Category.find(id)
      if (category) {
        await category.delete()
      }
      return response.json(category)
    } catch (error) {
      console.error(error)
      throw error
    }
  }
  
}
