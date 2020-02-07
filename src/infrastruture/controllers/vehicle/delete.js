export default function makeDelVehicle ({ removeVehicle }) {
    return async function delVehicle(req) {
        const headers = {
            'Content-Type': 'application/json'
        }
        try {

            console.log('controller-delete')
            console.log(req.params.id)
            const _id = req.params.id;
            const response = await removeVehicle(_id);
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