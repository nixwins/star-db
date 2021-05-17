import React, { Component } from 'react';
import Spinner from '../spinner';

const withData = (View) => {

    return class extends Component {

        state = {
            data: [],
            activeId: null
        }

        componentDidMount() {
            this.props.getData()
                .then((itemList) => {
                    // console.log(itemList)
                    this.setState({ data: itemList, load: false })
                });
        }

        render() {

            const { data, activeId } = this.state;

            if (!data) return <Spinner />;

            return <View {...this.props} data={data} activeId={activeId} />;
        }
    }
}

export default withData;