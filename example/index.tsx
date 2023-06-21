import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Card, PepComponent, Wrapper} from '../.';

const App = () => {
  const [enabled, setEnabled] = React.useState(false);
  const [value, setValue] = React.useState('Loading State')

  const getWrapperState = (state) => {
    console.log('get wrappeer state ', state)
    setValue(state) 
  }

  return (
    <div className="react-app">
      <Wrapper wrapperState={getWrapperState}>
        <PepComponent onTableClicked={(pid:any)=>{alert(pid)}} stateToRender={value}></PepComponent>
      </Wrapper>
      
      {/* <Card></Card> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
