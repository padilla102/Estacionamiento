export default function makeGetVehicles({ listVehicles }){
  return async function getVehicles () {
    const headers = {
      'Content-Type': 'application/json'
    }
    try {
      const result = await listVehicles();

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
