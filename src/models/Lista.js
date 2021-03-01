import {Schema, model} from 'mongoose'

 const listaSchema = new Schema({
    nombre: String,
    producto: [
      {
        type: Schema.Types.ObjectId,
        ref: "Producto",
      }
              ],
    usuario: {
      type:Schema.Types.ObjectId,
      ref: "Usuario",
             },
                               },

  {
     timestamps: true,
     versionKey: false
  }
                          );



export default model('Lista', listaSchema);

 