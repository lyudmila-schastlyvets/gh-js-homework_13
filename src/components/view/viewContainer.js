import { connect } from 'react-redux'
import View from './view'

const mapStateToProps = (state, ownProps) => {
    return {
        testUser: state.main.user
    }
}

export default connect(
    mapStateToProps)(View)
