import React, { Component, Fragment } from 'react'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3'

class SlideContainer extends Component {
	render() {
		return (
      <Fragment>
				<Slide1 />
				<Slide2 />
				<Slide3 />
			</Fragment>
    )
	}
}

export default SlideContainer