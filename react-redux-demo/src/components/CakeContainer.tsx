import React from 'react'
import { connect } from 'react-redux';
import { buyCake, addOneCake } from '../state/cake/cakeActions2';
// import { buyCake } from '../state';
import { RootState } from '../state/rootReducer';

type Props = {}

const CakeContainer: React.FC<
  Props & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = (props) => {
  return (
    <div>
      <h2>Number of cakes: {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy cake</button>
      <button onClick={props.addOneCake}>Add cake</button>
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
    buyCake: () => dispatch(buyCake(1)),
    addOneCake: () => dispatch(addOneCake()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer)