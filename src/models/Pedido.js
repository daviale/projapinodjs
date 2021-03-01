import{Schema, model} from 'mongoose'

const pedidoSchema = new Schema({
    rechazado: Boolean,
    entregado: Boolean,
    preparado: Boolean,
    monto: Number,
    direeccion: [
        {
          type: Schema.Types.ObjectId,
          ref: "Direccion",
        }
               ],
      lista: {
        type:Schema.Types.ObjectId,
        ref: "Lista",
             }, 
                            },
 
  {
     timestamps: true,
     versionKey: false

  }

 
                          );


 export default model('Pedido', pedidoSchema)