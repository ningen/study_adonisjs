// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PostsController {
    public async index() {
        return [
            {
                id: 1,
                title: 'Hello World'
            },
            {
                id: 2,
                title: 'Hello universe'
            }
        ]
    }
}