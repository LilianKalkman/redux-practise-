export const increment = () => {
  return {
    type: 'INCREMENT'
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT'
  };
};

export const add = (value) => {
  return {
    type: 'ADD',
    value: 5
  };
};

export const subtract = (value) => {
  return {
    type: 'ADD',
    value: 5
  };
};

export const showresult = (result) => {
  return {
    type: 'SHOW_RESULT',
    result: result
  };
};

export const deleteresult = (id) => {
  return {
    type: 'DELETE_RESULT',
    id: id
  };
};
