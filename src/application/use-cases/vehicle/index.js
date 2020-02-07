import { vehiclesDb } from '../../../infrastruture/data-access';
import makeListVehicles from './list-vehicles';
import makeAddVehicle from './add-vehicle';
import makeEditVehicle from './edit-vehicle';
import makeRemoveVehicle from './remove-vehicle';
import makeFindByIDVehicles from './findByID-vehicle';

const addVehicle = makeAddVehicle({ vehiclesDb });
const listVehicles = makeListVehicles({ vehiclesDb });
const findById = makeFindByIDVehicles({ vehiclesDb });
const editVehicle = makeEditVehicle({ vehiclesDb });
const removeVehicle = makeRemoveVehicle({ vehiclesDb });

const vehicleService = Object.freeze({
    addVehicle,
    listVehicles,
    editVehicle,
    removeVehicle,
    findById
});

export default vehicleService;
export { listVehicles, addVehicle, editVehicle, removeVehicle, findById };