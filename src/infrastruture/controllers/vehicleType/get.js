export default function makeGetVehicleTypes({ listVehicleTypes }){
    return async function getVehicleTypes () {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const result = await listVehicleTypes();
  
        return {
          headers,
          statusCode: 200,
          body: result
        }
      } catch (e) {
        // TODO: Error logging
        console.log(e)
        return {
          headers,
          statusCode: 500,
          body: {
            error: e.message
          }
        }
      }
    }
  }  
  