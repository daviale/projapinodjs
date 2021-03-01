import{Schema, model} from 'mongoose'

const productoSchema = new Schema({
  nombre: String,
  peso: String,
  medida: String,
  precio: Number,
  imgURL: String,
  estado: Boolean,
  
  categoria:  {
    type: Schema.Types.ObjectId,
    ref: "Categoria",
              },
                              },
  { 
    timestamps: true,
    versionKey: false
  }
  
                          );

  export default model('Producto', productoSchema);