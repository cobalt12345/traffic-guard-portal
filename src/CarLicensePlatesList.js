import React from 'react';
import {listTrafficGuardParsedCarLicensePlatess} from './graphql/queries';
import awsConfig from './aws-exports'
import Amplify, {Auth} from "aws-amplify";
import AWSAppSyncClient, {AUTH_TYPE} from 'aws-appsync';
import gql from 'graphql-tag';
import EnhancedTable from "./EnhancedTable";
import {createConsole} from "./inlineConsole";

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
            platesList: null,
            inlineConsoleVisible: false
        };
        this.listReceived = this.listReceived.bind(this);
        this.showHideConsole = this.showHideConsole.bind(this);
    }

    listReceived(list) {
        this.setState({platesList: list})
    }

    componentDidMount() {
        apiClient.query({
            query: gql(listTrafficGuardParsedCarLicensePlatess)
        }).then(result => this.listReceived(result.data.listTrafficGuardParsedCarLicensePlatess.items),
                reason => console.error(`Query error: ${reason}`));

        const inlinedConsole = createConsole();
        document.body.appendChild(inlinedConsole);
        console.debug('Created inline console: ' + inlinedConsole);
        const table = document.querySelector('h1#carLicensePlates');
        table ? table.addEventListener('dblclick', event => this.showHideConsole())
            : console.warn('Webcam element not found. Inline console cannot be attached.');
    }

    componentWillUnmount() {

    }

    showHideConsole() {
        this.setState((prevState, props) => {
            let inlinedConsole = document.getElementById('consoleWrapper');
            if (prevState.inlineConsoleVisible) {
                inlinedConsole.setAttribute('hidden', 'true');
            } else {
                inlinedConsole.removeAttribute('hidden');
            }
            return {inlineConsoleVisible: !prevState.inlineConsoleVisible};
        });
    }

    render() {

        return (
            <div>
                <h1 id='carLicensePlates'>Car license plates: </h1><br></br>
                <ul>
                    {this.state.platesList != null ?
                        <EnhancedTable plates={this.state.platesList} /> : <p>No data</p>}
                </ul>
            </div>
        );
    }
}

export default CarLicensePlatesList;