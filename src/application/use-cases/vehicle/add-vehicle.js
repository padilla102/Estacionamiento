import { makeVehicle } from '../../../domain/vehicle'

export default function makeAddVehicle ({ vehiclesDb }) {
    return async function addVehicle (vehicleInfo) {
        console.log('save-vehicle -->');
        console.log(vehicleInfo)
        const vehicle = makeVehicle(vehicleInfo);

        console.log('save-vehicle --> vehicle devuelto del domain');
        console.log(vehicle);
        console.log(vehicle.getPlaca(),vehicle.getCylinder(),vehicle.getVehicleTypeId());

        await vehiclesDb.insert({
            placa: vehicle.getPlaca(),
            cylinder: vehicle.getCylinder(),
            vehicleTypeId: vehicle.getVehicleTypeId()
        });
        
        return {"message":"Vehiculo fue guardado"};
    }
}