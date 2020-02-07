import {
    listVehicles,
    findById,
    addVehicle,
    editVehicle,
    removeVehicle
} from '../../../application/use-cases/vehicle'
import makeGetVehicles from './get';
import makePostVehicle from './post';
import makePutVehicle from './put';
import makeDelVehicle from './delete';
import makeGetByIDVehicle from './getById'

const getAll = makeGetVehicles({ listVehicles });
const getById = makeGetByIDVehicle({ findById });
const post = makePostVehicle({ addVehicle });
const put = makePutVehicle({ editVehicle });
const del = makeDelVehicle({ removeVehicle})

const vehicleController = Object.freeze({
    getAll,
    getById,
    post,
    put,
    del
});

export default vehicleController;
export { getAll, getById, post, put, del };

