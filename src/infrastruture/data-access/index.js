import makeVehiclesDb from './vehicles-db';
import makeVehicleTypesDb from './vehicleTypes-db';
import mongoose from 'mongoose';

const URI = 'mongodb://localhost:27017/parking-Db';

export async function makeDb () {

    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify:false
    });

    const cn = mongoose.connection;
    return cn.once('open', _ =>{
        console.log('Database is connected to ',URI);
    });
};

const vehiclesDb = makeVehiclesDb({ makeDb });
const vehicleTypesDb = makeVehicleTypesDb({ makeDb });

export { vehiclesDb, vehicleTypesDb };