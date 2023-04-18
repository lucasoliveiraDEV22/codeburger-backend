import { Sequelize } from 'sequelize'
import Category from '../app/models/Category'
import Product from '../app/models/Product'
import User from '../app/models/Users'
import configDatabase from '../config/database'
import mongoose from 'mongoose'

const models = [User, Product, Category]

class Database {
    constructor() {
        this.init()
        this.mongo()
    }

    init() {
        this.connection = new Sequelize(configDatabase)
        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }

    mongo() {
        this.mongoConnection = mongoose.connect('mongodb://localhost:27017/codeburger',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
    }
}

export default new Database()