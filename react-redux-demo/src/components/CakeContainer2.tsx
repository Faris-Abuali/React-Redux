import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../state';
import { RootState } from '../state/rootReducer';

type Props = {}

const CakeContainer = (props) => {

    const numOfCakes = useSelector((state: RootState) => state.cake.numOfCakes);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default CakeContainer