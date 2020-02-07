export default function makePutVehicle ({ editVehicle }) {
    return async function putVehicle(req) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const { placa, cylinder, vehicleTypeId}  = req.body;
            const _id = req.params.id;
            const response = await editVehicle(_id,{placa, cylinder, vehicleTypeId});
            return{
                headers,
                statusCode: 200,
                body: { response }
            }
        } catch (e) {
            // TODO: Error logging
            console.log(e)

            return {
                headers: {
                'Content-Type': 'application/json'
                },
                statusCode: 500,
                body: {
                error: e.message
                }
            }
        }
    }
}