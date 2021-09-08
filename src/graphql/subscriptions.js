/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  subscription OnCreateTrafficGuardParsedCarLicensePlates {
    onCreateTrafficGuardParsedCarLicensePlates {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  subscription OnUpdateTrafficGuardParsedCarLicensePlates {
    onUpdateTrafficGuardParsedCarLicensePlates {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  subscription OnDeleteTrafficGuardParsedCarLicensePlates {
    onDeleteTrafficGuardParsedCarLicensePlates {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
      createdAt
      updatedAt
    }
  }
`;
export const onCreateParsedCarLicensePlates = /* GraphQL */ `
  subscription OnCreateParsedCarLicensePlates(
    $car_license_plate_number: String
    $parsed_timestamp: Int
    $parsed_date_time: String
    $gps_location: String
    $object_key_in_bucket: String
  ) {
    onCreateParsedCarLicensePlates(
      car_license_plate_number: $car_license_plate_number
      parsed_timestamp: $parsed_timestamp
      parsed_date_time: $parsed_date_time
      gps_location: $gps_location
      object_key_in_bucket: $object_key_in_bucket
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
    }
  }
`;
export const onUpdateParsedCarLicensePlates = /* GraphQL */ `
  subscription OnUpdateParsedCarLicensePlates(
    $car_license_plate_number: String
    $parsed_timestamp: Int
    $parsed_date_time: String
    $gps_location: String
    $object_key_in_bucket: String
  ) {
    onUpdateParsedCarLicensePlates(
      car_license_plate_number: $car_license_plate_number
      parsed_timestamp: $parsed_timestamp
      parsed_date_time: $parsed_date_time
      gps_location: $gps_location
      object_key_in_bucket: $object_key_in_bucket
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
    }
  }
`;
export const onDeleteParsedCarLicensePlates = /* GraphQL */ `
  subscription OnDeleteParsedCarLicensePlates(
    $car_license_plate_number: String
    $parsed_timestamp: Int
    $parsed_date_time: String
    $gps_location: String
    $object_key_in_bucket: String
  ) {
    onDeleteParsedCarLicensePlates(
      car_license_plate_number: $car_license_plate_number
      parsed_timestamp: $parsed_timestamp
      parsed_date_time: $parsed_date_time
      gps_location: $gps_location
      object_key_in_bucket: $object_key_in_bucket
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
    }
  }
`;
