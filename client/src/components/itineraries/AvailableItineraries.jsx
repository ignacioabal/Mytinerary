import { connect } from 'react-redux'
import React, { Component } from 'react'
import Itinerary from './Itinerary'
import fetchItineraries from '../../redux/actions/itinActions'

class AvItineraries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading:this.props.loading
    }
  }

  componentDidMount() {
    let { city } = this.props.match.params
    this.props.fetchItineraries(city)

  }


  renderItineraries(elem) {   
    if(!this.props.loading){     
      return elem.map((itin) => {
        return <Itinerary itinerary={itin} />
      })
    }else{
      return <h1> loading </h1>
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.renderItineraries(this.props.itineraries)}
      </React.Fragment>
    )
  }
}

const mapStateProps = (state) => {
  console.log(state)
  return {
    itineraries: state.itinReducer.itineraries,
    loading: state.itinReducer.loading  
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchItineraries: (city) => dispatch(fetchItineraries(city)),
  }
}
export default connect(mapStateProps, mapDispatchToProps)(AvItineraries)
