import { vehicleTypesDb } from '../../../infrastruture/data-access';
import makeAddVehicleType from './add-VehicleType';
import makeListVehicleTypes from './list-vehicleType';

const addVehicleType = makeAddVehicleType({ vehicleTypesDb });
const listVehicleTypes = makeListVehicleTypes({ vehicleTypesDb });

const vehicleTypeService = Object.freeze({
    addVehicleType,
    listVehicleTypes
});

export default vehicleTypeService;
export { addVehicleType, listVehicleTypes };