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

let App = React.createClass({
  render: function(){
  return (
  	<div className="App">
    	<Info />
  	</div>
  )
},
});

ReactDOM.render(<App />, document.getElementById('app'))
console.log(React);