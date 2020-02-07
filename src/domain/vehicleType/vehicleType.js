export default function buildMakeVehicleType(){
    return function makeVehicleType({
        type,
        status = true,
        extraPayment = false,
        minCylinder = 0,
        extraPaymentValue = 0
    } = {}){
        // Reglas de negocios

        return Object.freeze({
            getType: () => type,
            getStatus: () => status,
            getExtraPayment: () => extraPayment,
            getMinCylinder : () => minCylinder,
            getExtraPaymentValue: () => extraPaymentValue
        })
    }
}