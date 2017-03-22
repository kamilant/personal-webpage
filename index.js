let IMG = "public/img/"
let Nav = React.createClass({
  render: () => {
    return (
      <div className="Nav">
        <div className="Nav--list">
          <ul>
            <a href="#skills"><li>Skills</li></a>
            <a href="#portfolio"><li>Portfolio</li></a>
            <a href="#experience"><li>Experience</li></a>
            <a href="#biography"><li>Biography</li></a>
          </ul>
        </div>
      </div>
    )
  }
});
let Description = React.createClass({
	render: () => {return (
		<div className="Description">
			<div className="Description--picture">
				<div className="Description--picture_left"> </div>
				<div className="Description--picture_img"></div>
				<div className="Description--picture_right"> </div>
			</div>
			<div className="Description--paragraph">
				<p>
					Young and agile front-end developer and designer.
					Electrical engineering student.
					Constant creator, problem solver, guitarist and artist.
					Loves hardware as much as software.
				</p>
			</div>
		</div>)
	}
});
let Name = React.createClass({
	render: () => {
		return (
		<div className="Name">
			<h1> Kamil Antropik </h1>
			<div className="Name--job"><h3 id="job">Frontend developer</h3></div>
		</div>)
	}
})
let Contact = React.createClass({
	render: () => {
		return (
		<div className="Contact">
			<div className="Contact--email">kamil.antropik@gmail.com</div>
			<div className="Contact--social">
				<a href="https://twitter.com/MoserDraws" ref='noopener noreferrer' target="_blank"><img src="public/img/social/twitter.png" /></a>
				<a href="https://www.facebook.com/kamil.antropik" ref='noopener noreferrer' target="_blank"><img src="public/img/social/facebook.png" /></a>
				<a href="https://www.instagram.com/moser_world/" ref='noopener noreferrer' target="_blank"><img src="public/img/social/instagram.png" /></a>
				<a href="https://www.linkedin.com/in/kamil-antropik-5a0964115/" ref='noopener noreferrer' target="_blank"><img src="public/img/social/linkedin.png" /></a>
			</div>
		</div>)
	}
})
let Info = React.createClass({
	render: () => {
		return (
		<div className="Info">
			<Nav />
			<Description />
			<Name />
			<div className="Info--github">
				<a href="https://github.com/kamilant" ref='noopener noreferrer' target="_blank">
					<img src="public/img/social/github.svg" />
				</a>
			</div>
			<Contact />
		</div>
		)
	}
});


let Header = (props) => {
	return (
		<div className="Header">
			<h1>{props.children}</h1>
		</div>
	)
}
let Footer = (props) => {
	return (
		<div>
			<footer>
				<div className="Footer--images">
					<Skill name="public/skills/mongo.png" />
					<Skill name="public/skills/mongoose.png" />
					<Skill name="public/skills/bitbucket.png" />
					<Skill name="public/skills/circle.png" />
					<Skill name="public/skills/express.png" />

				</div>
			</footer>
		</div>
	)
}
let Holder = (props) => {
	return (
		<div className="Holder">
			<div className="Holder--content">
				{props.children}
			</div>
		</div>
	)
}
let Skill = (props) => {
	return (
		<div className="Skill">
			<img src={props.name} alt={props.name}/>
		</div>
	)
}
let Content = React.createClass({
	render: () => {
		return(
			<div className="Content">
				<Header>Skills</Header>
				<Holder >
					<div className="Skill--wrapper">
						<Skill name="public/skills/js.png" />
						<Skill name="public/skills/es6.png" />
						<Skill name="public/skills/github.png" />
						<Skill name="public/skills/nodejs.png" />
						<Skill name="public/skills/react.png" />
						<Skill name="public/skills/angular.png" />
						<Skill name="public/skills/webpack.png" />
						<Skill name="public/skills/linux.png" />
						<Skill name="public/skills/syncano.png" />
						<Skill name="public/skills/jq.png" />
					</div>
					<div className="Skill--wrapper">
						<Skill name="public/skills/ai.png" />
						<Skill name="public/skills/ps.png" />
						<Skill name="public/skills/sketch.png" />
						<Skill name="public/skills/figma.jpg" />


					</div>
					<div className="Skill--wrapper">
						<Skill name="public/skills/jira.png" />
						<Skill name="public/skills/slack.png" />

					</div>
				</Holder>
				<Footer />
			</div>
		)
	}
});

let App = React.createClass({
  render: function(){
  return (
  	<div className="App">
    	<Info />
    	<Content />
  	</div>
  )
},
});

ReactDOM.render(<App />, document.getElementById('app'))
console.log(React);
