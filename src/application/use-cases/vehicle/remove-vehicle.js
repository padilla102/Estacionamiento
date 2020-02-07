
export default function makeRemoveVehicle ({ vehiclesDb }) {
    return async function removeVehicle (id) {
        console.log('Use-Case remove');
        console.log(id)
        const result = await vehiclesDb.remove(id);
        return result;
    }
}