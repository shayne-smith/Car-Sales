import React from 'react';
import { connect } from 'react-redux';

import { removeFeature } from '../actions/featureActions';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button"
      onClick={() => props.removeFeature(props.feature)}
      >X</button>
      {props.feature.name}
    </li>
  );
};

// it might be a good idea to leave the individial feature components as functional components
// const mapStateToProps = state => {
//   console.log('AddedFeature.js mSTP is running...', { state });

//   return {
//     feature: state.car.features
//   }
// };

export default connect(null, { removeFeature })(AddedFeature);

// export default AddedFeature;