import{Schema, model} from 'mongoose'

const categoriaSchema = new Schema({ 
    nombre: String,
},{
    timestamp: true,
    versionKey: false

 })
 export default model('Categoria', categoriaSchema);

 