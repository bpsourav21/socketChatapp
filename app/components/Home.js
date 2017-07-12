import React from 'react';
import { connect } from 'react-redux';
import { IndexRoute, Route, Link } from 'react-router';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
               <h1> hello</h1>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    };
};

export default connect(mapStateToProps)(Home);
