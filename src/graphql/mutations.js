/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  mutation CreateTrafficGuardParsedCarLicensePlates(
    $input: CreateTrafficGuardParsedCarLicensePlatesInput!
    $condition: ModelTrafficGuardParsedCarLicensePlatesConditionInput
  ) {
    createTrafficGuardParsedCarLicensePlates(
      input: $input
      condition: $condition
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  mutation UpdateTrafficGuardParsedCarLicensePlates(
    $input: UpdateTrafficGuardParsedCarLicensePlatesInput!
    $condition: ModelTrafficGuardParsedCarLicensePlatesConditionInput
  ) {
    updateTrafficGuardParsedCarLicensePlates(
      input: $input
      condition: $condition
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  mutation DeleteTrafficGuardParsedCarLicensePlates(
    $input: DeleteTrafficGuardParsedCarLicensePlatesInput!
    $condition: ModelTrafficGuardParsedCarLicensePlatesConditionInput
  ) {
    deleteTrafficGuardParsedCarLicensePlates(
      input: $input
      condition: $condition
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
