import React from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/featureActions';

const AdditionalFeature = props => {

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" 
      onClick={() => props.addFeature(props.feature)}
      >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log('AdditionalFeature.js mSTP is running...', { state });

//   // state.additionalFeatures.map(additionalFeature => {
//   //     if (additionalFeature.id === action.payload.id) {
//   //       return null;
//   //     }
//   //   }
//   //   )

//   return {
//     feature: state.additionalFeatures[1],
//     features: state.additionalFeatures,
//     id: state.additionalFeatures[1].id
//   }
// };

export default connect(null, { addFeature })(AdditionalFeature);

// export default AdditionalFeature;