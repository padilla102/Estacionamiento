import { vehicle } from './models/vehicle';

export default function makeVehiclesDb ({ makeDb }) {
    return Object.freeze({
        findAll,
        findById,
        insert,
        update,
        remove
    })
    
    async function findAll () {
        await makeDb();
        const vehicles = await vehicle.find();
        return vehicles;
    }

    async function findById (id) {
        await makeDb();
        const vehicleResult = await vehicle.findById({_id: id});
        return vehicleResult; 
    }

    async function insert (vehicleInfo) {
        await makeDb();
        const newVehicle = new vehicle(vehicleInfo);
        await newVehicle.save();
        return {message:'Vehiculo Creado...'};
    }

    async function update (id, vehicleInfo) {
        await vehicle.findByIdAndUpdate({_id: id},vehicleInfo);
        return {message:'Vehiculo actualizado...'};
    }

    async function remove (id){
        console.log('data-acces remove');
        console.log(id);
        await vehicle.findByIdAndDelete({_id: id});
        return {message: 'Vehiculo eliminado...'}
    }

}



