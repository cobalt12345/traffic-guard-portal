import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class TrafficGuardParsedCarLicensePlates {
  readonly id: string;
  readonly car_license_plate_number: string;
  readonly parsed_timestamp: number;
  readonly parsed_date_time: string;
  readonly gps_location?: string;
  readonly object_key_in_bucket: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TrafficGuardParsedCarLicensePlates>);
  static copyOf(source: TrafficGuardParsedCarLicensePlates, mutator: (draft: MutableModel<TrafficGuardParsedCarLicensePlates>) => MutableModel<TrafficGuardParsedCarLicensePlates> | void): TrafficGuardParsedCarLicensePlates;
}