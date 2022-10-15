import React from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../state';
import { RootState } from '../state/rootReducer';

type Props = {}

const CakeContainer = (props) => {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    numOfCakes: state.cake.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)