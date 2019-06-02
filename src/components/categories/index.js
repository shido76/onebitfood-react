import React, { Fragment, Component } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { Box } from "rbx"
 
import "../../assets/styles/categories.scss"
import slickSettings from "./slick_settings"
import api from "../../services/api"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { loadRestaurants } from '../../actions'
 
class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    }
  }

  filterByCategory = (category) => {
    this.props.loadRestaurants(category)
  }
 
  componentWillMount() {
    api.loadCategories().then(response => {
      this.setState(() => ({ categories: response.data.categories }))
    })
  }
 
  render(){
    return (
      <Fragment>
        <h3 className="title is-size-4">Categorias</h3>
        <Box>
          <Slider {...slickSettings}>
            {this.state.categories.map((category, index) => {
              return (
                <a key={index} href="#" onClick={() => this.filterByCategory(category)}>
                  <div className="slider-item">
                    <img src={category.image_url} alt="new"/>
                    <span>{category.title}</span>
                  </div>
                </a>
              )
            })}
          </Slider>
        </Box>
      </Fragment>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ loadRestaurants }, dispatch)

export default connect(null, mapDispatchToProps)(Categories)