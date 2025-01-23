const logger = (storeAPI: any) => (next: any) => (action: any) => {
  console.group('Dispatching Action');
  if (action.payload) {
  }
  console.log('State before action:', storeAPI.getState());
  const result = next(action);
  console.log('State after action:', storeAPI.getState());
  return result;
};

export default logger;
