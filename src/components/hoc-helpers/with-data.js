import React from 'react';
import Spinner from '../spinner';


const withData = (View, getData) => {

    return class extends Component {

        state = {
            data: [],
            load: true,
            activeId: null
        }

        componentDidMount() {

            getData()
                .then((itemList) => {
                    console.log(itemList)
                    this.setState({ data: itemList, load: false })
                });
        }



        render() {

            const { data, load, activeId } = this.state;
            console.log(data)
            if (load) return <Spinner />;


            return <View {...this.props} data={data} activeId={activeId} />;
        }
    }
}

export default withData;