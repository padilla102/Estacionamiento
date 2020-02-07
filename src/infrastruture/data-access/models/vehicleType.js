import { Schema, model } from 'mongoose';

const vehicleTypeSchema = Schema({
    type: {
        type:String, 
        trim: true,
        required: true,
        unique: true
    },
    status:{
        type:Boolean, 
        required: true
    },
    extraPayment:{
        type:Boolean, 
        required: true
    },
    minCylinder:{
        type:Number
    },
    extraPaymentValue:{
        type:Number
    }
},{
    timestamps:true
});

const  vehicleType = model('VehicleType', vehicleTypeSchema);

export { vehicleType };