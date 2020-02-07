export default function makeFindByIDVehicles ({ vehiclesDb }) {
    return async function findByIDVehicles (id) {
        const vehicle = await vehiclesDb.findById(id);
        return vehicle;
    }
}