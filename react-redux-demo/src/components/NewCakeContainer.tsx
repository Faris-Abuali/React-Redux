import React, { useState } from 'react'
import { connect } from 'react-redux';
import { buyCake } from '../state';
import { RootState } from '../state/rootReducer';

type Props = {}

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);

    return (
        <div>
            <h2>Number of cakes - {props.numOfCakes}</h2>
            <input type="number" value={number} onChange={(e: any) => setNumber(e.target.value)} />
            <button onClick={() => props.buyCake(number)}>Buy {number} cakes</button>
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
        buyCake: (number: number) => dispatch(buyCake(number))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer)