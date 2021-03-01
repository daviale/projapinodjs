import {Schema, model} from 'mongoose'

const direccionSchema = new Shema({
    nombre: String,
    barrio: String,
    referencia: String,
    
    usuario: {
        type: Schema.Types.ObjectId,
        ref: "Usuario"
             }
                               },
      
      {
          timestamps: true,
          versionKey: false
       
      }
        );

       export default model('Direccion', direccionSchema)