/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncTrafficGuardParsedCarLicensePlates = /* GraphQL */ `
  query SyncTrafficGuardParsedCarLicensePlates(
    $filter: ModelTrafficGuardParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTrafficGuardParsedCarLicensePlates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listTrafficGuardParsedCarLicensePlatess = /* GraphQL */ `
  query ListTrafficGuardParsedCarLicensePlatess(
    $car_license_plate_number: String
    $parsed_timestamp: ModelIntKeyConditionInput
    $filter: ModelTrafficGuardParsedCarLicensePlatesFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTrafficGuardParsedCarLicensePlatess(
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
