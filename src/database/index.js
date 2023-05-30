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
        this.connection = new Sequelize('postgresql://postgres:T3ixYxgvuN4eisHyQo7u@containers-us-west-138.railway.app:6700/railway')
        models.map(model => model.init(this.connection)).map(model => model.associate && model.associate(this.connection.models))
    }

    mongo() {
        this.mongoConnection = mongoose.connect('mongodb://mongo:imxlxEap7Lva6K4AubyT@containers-us-west-174.railway.app:7400',
            {
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
    }
}

export default new Database()