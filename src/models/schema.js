export const schema = {
    "models": {
        "TrafficGuardParsedCarLicensePlates": {
            "name": "TrafficGuardParsedCarLicensePlates",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "car_license_plate_number": {
                    "name": "car_license_plate_number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "parsed_timestamp": {
                    "name": "parsed_timestamp",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": true,
                    "attributes": []
                },
                "parsed_date_time": {
                    "name": "parsed_date_time",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "gps_location": {
                    "name": "gps_location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "object_key_in_bucket": {
                    "name": "object_key_in_bucket",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TrafficGuardParsedCarLicensePlates",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "car_license_plate_number",
                            "parsed_timestamp"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "object_key_in_bucket"
                        ],
                        "name": "ObjectKeyInBucketGSI",
                        "queryField": "carLicensePlateByBucketObjectKey"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "gps_location"
                        ],
                        "name": "GpsLocation",
                        "queryField": "carLicensePlateByGpsLocation"
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "fields": [
                            "parsed_timestamp",
                            "parsed_date_time"
                        ],
                        "name": "CaughtDateTime",
                        "queryField": "carLicensePlateByCaughtDateTime"
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "private",
                                "provider": "iam",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "version": "b519bf824e2ec71af1b72606837805c6"
};