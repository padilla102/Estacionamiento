export default function makePostVehicleType ({ addVehicleType }) {
    return async function postVehicleType(req) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {
            const { type, status, extraPayment, minCylinder, extraPaymentValue}  = req.body;
            const response = await addVehicleType({type, status, extraPayment, minCylinder, extraPaymentValue});
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