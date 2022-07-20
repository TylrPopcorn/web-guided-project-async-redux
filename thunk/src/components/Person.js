import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { GET_PERSON, FETCH_FAIL } from "../actions"

const Person = (props) => {
  const { person, isFetching, error } = props
  //console.log("props from redux: ", props);
  const { getP2, FetchF2 } = props

  useEffect(() => {
    getP2()
  }, [])

  if (error) {
    return <h2>We got an error: {error}</h2>;
  }

  if (isFetching) {
    return <h2>Fetching person for ya!</h2>;
  }

  const handleClick = () => {
    getP2()
  }

  return (
    <>
      <div>
        <h2>Say Hi to: {person.name.first} {person.name.last}</h2>
        <img src={person.picture.large} />
      </div>
      <button onClick={handleClick}>Get new person</button>
      <button onClick={
        () => {
          FetchF2("error triggered!")
        }
      }> Trigger an ERROR </button>
    </>
  );
};

const mapStateToProps = state => {
  return {
    person: state.person,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(mapStateToProps, { getP2: GET_PERSON, FetchF2: FETCH_FAIL })(Person);