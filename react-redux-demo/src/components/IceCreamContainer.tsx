import React from 'react'
import { connect } from 'react-redux';
import { buyIceCream } from '../state';
import { RootState } from '../state/rootReducer';

type Props = {}

const IceCreamContainer = (props) => {
    return (
        <div>
            <h2>Number of Ice Creams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>Buy Ice Cream</button>
        </div>
    )
}

const mapStateToProps = (state: RootState) => {
    return {
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer)