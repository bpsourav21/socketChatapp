import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';

export default function getRoutes(store) {
  const clearMessages = () => {
    store.dispatch({
      type: 'CLEAR_MESSAGES'
    });
  };
  
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
    

      <Route path="*" component={NotFound} onLeave={clearMessages} />
    </Route>
  );
}
