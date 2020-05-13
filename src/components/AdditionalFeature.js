import React from 'react';

import { addFeature } from '../actions/featureActions';
import { connect } from 'react-redux';

const AdditionalFeature = props => {
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
      onClick={() => addFeature(props.feature)}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log('AddedFeature.js mSTP is running...', { state });

//   // state.additionalFeatures.map(additionalFeature => {
//   //     if (additionalFeature.id === action.payload.id) {
//   //       return null;
//   //     }
//   //   }
//   //   )

//   return {
//     feature: state.car.features
//   }
// };

// export default connect(
//   mapStateToProps, {addFeature})(AdditionalFeature);

export default AdditionalFeature;