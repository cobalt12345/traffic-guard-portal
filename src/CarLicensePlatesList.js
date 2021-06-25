import React from 'react';
import {listTrafficGuardParsedCarLicensePlatess} from './graphql/queries';
import {createTrafficGuardParsedCarLicensePlates} from './graphql/mutations';
import awsConfig from './aws-exports'
import Amplify, {Auth} from "aws-amplify";
import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import gql from 'graphql-tag';
import Table from './Table'

Amplify.configure({...awsConfig});

const apiClient = new AWSAppSyncClient({
    url: awsConfig.aws_appsync_graphqlEndpoint,
    region: awsConfig.aws_appsync_region,
    auth: {
        type: awsConfig.aws_appsync_authenticationType,
        credentials: () => Auth.currentCredentials()
    }
});

class CarLicensePlatesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            platesList: null
        };
        this.listReceived = this.listReceived.bind(this);
    }

    listReceived(list) {
        this.setState({platesList: list})
    }

    componentDidMount() {
        apiClient.query({
            query: gql(listTrafficGuardParsedCarLicensePlatess)
        }).then(result => this.listReceived(result.data.listTrafficGuardParsedCarLicensePlatess.items),
                reason => console.error(`Query error: ${reason}`));
    }

    componentWillUnmount() {

    }

    render() {

        return (
            <div>
                <h1>Car license plates: </h1><br></br>
                <ul>
                    {this.state.platesList != null ? <Table plates={this.state.platesList} /> : <p>No data</p>}
                </ul>
            </div>
        );
    }
}

export default CarLicensePlatesList;