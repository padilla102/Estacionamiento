import { makeVehicleType } from '../../../domain/vehicleType'

export default function makeAddVehicleType ({ vehicleTypesDb }) {
    return async function addVehicleType (vehicleTypeInfo) {
        console.log('save-vehicleType -->');
        console.log(vehicleTypeInfo)
        const vehicleType = makeVehicleType(vehicleTypeInfo);

        console.log('save-vehicleType --> vehicleType devuelto del domain');
        console.log(vehicleType);
        console.log({
            type: vehicleType.getType(),
            status: vehicleType.getStatus(),
            extraPayment: vehicleType.getExtraPayment(),
            minCylinder: vehicleType.getMinCylinder(),
            extraPaymentValue: vehicleType.getExtraPaymentValue()
        });

        const result = await vehicleTypesDb.insert({
            type: vehicleType.getType(),
            status: vehicleType.getStatus(),
            extraPayment: vehicleType.getExtraPayment(),
            minCylinder: vehicleType.getMinCylinder(),
            extraPaymentValue: vehicleType.getExtraPaymentValue()
        });
        
        return result;
    }
}