import './App.css';
import {AmplifySignOut} from "@aws-amplify/ui-react";
import CarLicensePlatesList from "./CarLicensePlatesList";

function App() {
  return (
      <div className="App">
        <CarLicensePlatesList />
        <AmplifySignOut />
      </div>
  );
}

export default App;
