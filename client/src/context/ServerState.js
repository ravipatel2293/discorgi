import { useReducer } from 'react';
import ServerContext from './serverContext';
import serverReducer from './serverReducer';

const ServerState = (props) => {
  const initialState = {
    serverId: '1',
    serverName: ' Test 1',
    serverRole: null,
    openModal: null,
    channelId: null,
    channelName: null,
  };

  const [state, dispatch] = useReducer(serverReducer, initialState);

  return (
    <ServerContext.Provider value={{ ...state, dispatch }}>
      {props.children}
    </ServerContext.Provider>
  );
};

export default ServerState;
