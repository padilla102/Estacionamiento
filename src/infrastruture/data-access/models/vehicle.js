import { Schema, model } from 'mongoose';

const vehicleSchema = new Schema({
    placa: {
        type:String, 
        trim: true,
        required: true,
        unique: true
    },
    cylinder:{
        type:Number, 
        required: true
    },
    vehicleTypeId:{
        type:String, 
        required: true
    }
},{
    timestamps:true
});

const  vehicle = model('Vehicle', vehicleSchema);

export { vehicle };