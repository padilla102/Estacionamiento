import { makeVehicle } from '../../../domain/vehicle'

export default function makeEditVehicle ({ vehiclesDb }) {
    return async function editVehicle (id, vehicleInfo) {
        console.log('edit-vehicle -->');
        console.log(vehicleInfo)
        const vehicle = makeVehicle(vehicleInfo);

        console.log('save-vehicle --> vehicle devuelto del domain');
        console.log(vehicle);
        console.log(vehicle.getPlaca(),vehicle.getCylinder(),vehicle.getVehicleTypeId());

        await vehiclesDb.update(id, {
            placa: vehicle.getPlaca(),
            cylinder: vehicle.getCylinder(),
            vehicleTypeId: vehicle.getVehicleTypeId()
        });
        
        return {"message":"Vehiculo fue guardado"};
    }
}