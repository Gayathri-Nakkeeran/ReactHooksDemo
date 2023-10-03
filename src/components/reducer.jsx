// import React, { useState } from 'react';

// const App = () => {
//   const [name, setName] = useState('');
//   const [isValid, setIsValid] = useState(false);

//   // This function is triggered when the user types something
//   const changeHandler = (event) => {
//     const enteredName = event.target.value;
//     setName(enteredName);
//     if (enteredName.length >= 3) {
//       setIsValid(true);
//     } else {
//       setIsValid(false);
//     }
//   };

//   // This function is trigger when the user clicks the "submit" button
//   const submitHandler = (event) => {
//     event.preventDefault();
//     alert(name);
//     setName('');
//     setIsValid(false)
//   };

//   return (
//     <form style={styles.container}>
//       <input
//         type="text"
//         value={name}
//         onChange={changeHandler}
//         style={styles.input}
//       />
//       <button disabled={!isValid} onClick={submitHandler}>
//         Submit
//       </button>
//     </form>
//   );
// };

// export default App;

// const styles = {
//     container: {
//       padding: 50,
//     },
//   };


  //Now With useReducer

import React, { useReducer } from 'react';

const App = () => {
  // The initial state
  const initialState = {
    name: '',
    isValid: false,
  };

  // The reducer function
  const [nameState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'CHANGE':
        // Update the state
        return {
          name: action.value,
          isValid: action.value.length >= 3 ? true : false,
        };
      case 'SUBMIT':
        // Reset the state
        return {
          ...initialState,
        };
      default:
        return state;
    }
  }, initialState);

  // This function is called when the user types something
  const changeHandler = (event) => {
    dispatch({
      type: 'CHANGE',
      value: event.target.value,
    });
  };

  // This function is trigger when the user clicks the "submit" button
  const submitHandler = (event) => {
    event.preventDefault();
    alert(nameState.name);
    dispatch({
      type: 'SUBMIT'
    })
  };

  return (
    <form style={styles.container}>
      <input
        type="text"
        value={nameState.name}
        onChange={changeHandler}
        style={styles.input}
      />
      <button disabled={!nameState.isValid} onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};

export default App;

const styles = {
  container: {
    padding: 50,
  },
};