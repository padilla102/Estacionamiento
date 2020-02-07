import {
    listVehicleTypes,
    addVehicleType
} from '../../../application/use-cases/vehicleType'
import makeGetVehicleTypes from './get';
import makePostVehicleType from './post';

const getAll = makeGetVehicleTypes ({ listVehicleTypes });
const post = makePostVehicleType({ addVehicleType });

const vehicleTypeController = Object.freeze({
    getAll,
    post
});

export default vehicleTypeController;
export { getAll, post };