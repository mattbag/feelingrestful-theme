import React from 'react'
import BuyTicketsButton from '../BuyTicketsButton'

module.exports = React.createClass({

	render: function() {

		return (
			<div className="Intro">
				<h1>A DAY OF REST</h1>
				<h2>Learn about the WordPress REST API from the team building it and the people using it.</h2>
				<h3>28th January, 2016 Conway Hall, London</h3>
				<BuyTicketsButton>Get your ticket</BuyTicketsButton>
				<video webkit-playsinline="" autoPlay="yes" loop="yes">
					<source src="/content/themes/endurance/videos/dayofrest.mp4" type="video/mp4" />
				</video>
			</div>
		)
	}
})