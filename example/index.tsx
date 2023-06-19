import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Card, PepComponent} from '../.';
const App = () => {
  const [enabled, setEnabled] = React.useState(false);
  return (
    <div className="react-app">
      <PepComponent onTableClicked={(pid:any)=>{alert(pid)}} stateToRender="Loading State"></PepComponent>
      <Card></Card>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
