export default function makeListVehicleTypes ({ vehicleTypesDb }) {
    return async function listVehicleTypes () {
        const vehicleTypes = await vehicleTypesDb.findAll();
        return vehicleTypes;
    }
}