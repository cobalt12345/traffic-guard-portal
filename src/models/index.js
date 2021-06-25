// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TrafficGuardParsedCarLicensePlates } = initSchema(schema);

export {
  TrafficGuardParsedCarLicensePlates
};