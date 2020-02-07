export default function makeGetByIDVehicle ({ findById }){
    return async function getByIDVehicle (req) {
      const headers = {
        'Content-Type': 'application/json'
      }
      try {
        const _id = req.params.id;
        const result = await findById(_id);
  
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
  