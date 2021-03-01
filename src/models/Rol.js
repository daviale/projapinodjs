import{Schema, model} from 'mongoose'

const rolSchema = new Schema({
    nombre: String,


                            }
 ,{
     timestamps: true,
     versionKey: false


  }                      )

 export default model('Rol', rolSchema);