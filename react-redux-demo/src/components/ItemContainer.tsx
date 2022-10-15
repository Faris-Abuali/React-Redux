import React from 'react'
import { RootState } from '../state/rootReducer'
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { buyCake, buyIceCream } from '../state';

type ItemContainerProps = {
    cake?: boolean
}

/**
 * @param props 
 * This component is a HOC (Higher-Order Component) that wraps the CakeContainer and IceCreamContainer components. It conditionally renders the number of cakes or ice creams based on the props passed to it.
 */
const ItemContainer: React.FC<
    ItemContainerProps & ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>
> = ({ cake = false, item, buyItem }) => {
    return (
        <section>
            <h2>{cake ? "Cakes" : "Ice creams"} - {item}</h2>
            <button onClick={buyItem}>Buy {cake ? "cake" : "ice cream"}</button>
        </section>
    )
}

const mapStateToProps = (state: RootState, ownProps: ItemContainerProps) => {
    // 2nd parameter is the props of the component that we are wrapping
    const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch: Dispatch, ownProps: ItemContainerProps) => {
    const dispatchFunction = ownProps.cake
        ? () => dispatch(buyCake())
        : () => dispatch(buyIceCream());
    return {
        buyItem: dispatchFunction
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);