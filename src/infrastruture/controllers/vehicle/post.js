export default function makePostVehicle ({ addVehicle }) {
    return async function postVehicle(req) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const { placa, cylinder, vehicleTypeId}  = req.body;
            const response = await addVehicle({placa, cylinder, vehicleTypeId});
            return{
                headers,
                statusCode: 201,
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