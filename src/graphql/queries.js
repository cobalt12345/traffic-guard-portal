/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  query GetTrafficGuardParsedCarLicensePlates(
    $car_license_plate_number: String!
    $parsed_timestamp: Int!
  ) {
    getTrafficGuardParsedCarLicensePlates(
      car_license_plate_number: $car_license_plate_number
      parsed_timestamp: $parsed_timestamp
    ) {
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
export const listTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  query ListTrafficGuardParsedCarLicensePlates(
    $car_license_plate_number: String
    $parsed_timestamp: ModelIntKeyConditionInput
    $filter: ModelTrafficGuardParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrafficGuardParsedCarLicensePlates(
      car_license_plate_number: $car_license_plate_number
      parsed_timestamp: $parsed_timestamp
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const carLicensePlateByBucketObjectKey = /* GraphQL */ `
  query CarLicensePlateByBucketObjectKey(
    $object_key_in_bucket: String
    $sortDirection: ModelSortDirection
    $filter: ModelTrafficGuardParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    carLicensePlateByBucketObjectKey(
      object_key_in_bucket: $object_key_in_bucket
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const carLicensePlateByGpsLocation = /* GraphQL */ `
  query CarLicensePlateByGpsLocation(
    $gps_location: String
    $sortDirection: ModelSortDirection
    $filter: ModelTrafficGuardParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    carLicensePlateByGpsLocation(
      gps_location: $gps_location
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const carLicensePlateByCaughtDateTime = /* GraphQL */ `
  query CarLicensePlateByCaughtDateTime(
    $parsed_timestamp: Int
    $parsed_date_time: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTrafficGuardParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    carLicensePlateByCaughtDateTime(
      parsed_timestamp: $parsed_timestamp
      parsed_date_time: $parsed_date_time
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getParsedCarLicensePlates = /* GraphQL */ `
  query GetParsedCarLicensePlates(
    $car_license_plate_number: String!
    $parsed_timestamp: Int!
  ) {
    getParsedCarLicensePlates(
      car_license_plate_number: $car_license_plate_number
      parsed_timestamp: $parsed_timestamp
    ) {
      car_license_plate_number
      parsed_timestamp
      parsed_date_time
      gps_location
      object_key_in_bucket
    }
  }
`;
export const listParsedCarLicensePlates = /* GraphQL */ `
  query ListParsedCarLicensePlates(
    $filter: TableParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParsedCarLicensePlates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
      }
      nextToken
    }
  }
`;
export const queryParsedCarLicensePlatesByObjectKeyInBucketGSI = /* GraphQL */ `
  query QueryParsedCarLicensePlatesByObjectKeyInBucketGSI(
    $object_key_in_bucket: String!
    $first: Int
    $after: String
  ) {
    queryParsedCarLicensePlatesByObjectKeyInBucketGSI(
      object_key_in_bucket: $object_key_in_bucket
      first: $first
      after: $after
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
      }
      nextToken
    }
  }
`;
export const queryParsedCarLicensePlatesByGpsLocation = /* GraphQL */ `
  query QueryParsedCarLicensePlatesByGpsLocation(
    $gps_location: String!
    $first: Int
    $after: String
  ) {
    queryParsedCarLicensePlatesByGpsLocation(
      gps_location: $gps_location
      first: $first
      after: $after
    ) {
      items {
        car_license_plate_number
        parsed_timestamp
        parsed_date_time
        gps_location
        object_key_in_bucket
      }
      nextToken
    }
  }
`;
