import {Schema, model} from 'mongoose'

const usuarioSchema = new Schema({
    nombre: {
        type: String,
        unique: true,
      },
      correo: {
        type: String,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      rol: [
        {
          type: Schema.Types.ObjectId,
          ref: "Rol",
        },
      ],
 },{
    timestamps: true,
    versionKey: false 

  }

 
 );

 export default model('Usuario', usuarioSchema)











