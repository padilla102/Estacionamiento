export default function buildMakeVehicle(){
    return function makeVehicle({
        placa,
        cylinder,
        vehicleTypeId
    } = {}){
        // Reglas de negocios

        return Object.freeze({
            getPlaca: () => placa,
            getCylinder: () => cylinder,
            getVehicleTypeId: () => vehicleTypeId
        })
    }
}