export default function makeListVehicles ({ vehiclesDb }) {
    return async function listVehicles () {
        const vehicles = await vehiclesDb.findAll();
        return vehicles;
    }
}