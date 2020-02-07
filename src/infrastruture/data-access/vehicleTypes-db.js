import { vehicleType } from './models/vehicleType';

export default function makeVehicleTypesDb ({ makeDb }) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        update,
        remove
    })
    
    async function findAll () {
        await makeDb();
        const listVehicleType = await vehicleType.find();
        return listVehicleType;
    }

    async function findById (id) {
        await makeDb();
        const vehicleTypeResult = await vehicleType.findById({_id: id});
        return vehicleTypeResult; 
    }

    async function insert (vehicleTypeInfo) {
        await makeDb();
        const newVehicleType = new vehicleType(vehicleTypeInfo);
        const result = await newVehicleType.save();
        return {message:'Tipo Vehiculo creado...'};
    }

    async function update (id, vehicleTypeInfo) {
        const result = await vehicleType.findByIdAndUpdate({_id: id},vehicleTypeInfo);
        return {message:'Tipo Vehiculo actualizado...'};
    }

    async function remove (id){
        console.log('data-acces - Vehicle type --> remove ', id );
        const result = await vehicle.findByIdAndDelete({_id: id});
        return {message:'Tipo Vehiculo eliminado...'};;
    }

}