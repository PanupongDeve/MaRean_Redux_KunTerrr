import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        number: state.number,
        actionText: state.actionText
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        add: () =>  dispatch({ type: 'ADD'}),
        sub: () =>  dispatch({ type: 'SUB'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps)