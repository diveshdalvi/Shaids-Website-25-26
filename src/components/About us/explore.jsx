function Explore(){
    return(
        <div className="exploreContainer">
            <div className="exploreTitle">
                <h1>EXPLORE WITH US</h1>
            </div>
            <div className="exploreMapping">
                <img src="public/assets/exploreImage.png" height="104px" width="104px" id="map-1" className="exploreImage"/>
                <img src="public/assets/exploreImage.png" height="104px" width="104px" id="map-2" className="exploreImage"/>
                <img src="public/assets/exploreImage.png" height="104px" width="104px" id="map-3" className="exploreImage"/>
                <img src="public/assets/exploreImage.png" height="104px" width="104px" id="map-4" className="exploreImage"/>
                <hr className="line" id="line-1"/>
                <hr className="line" id="line-2"/>
                <hr className="line" id="line-3"/>
                <p className="exploreText" id="text-1"><span className="exploreText-span">Technical Growth:</span>Explore AI and Data Science with workshops, hackathons, and expert-led sessions.</p>
                <p className="exploreText" id="text-2"><span className="exploreText-span">Cultural Creativity:</span>Showcase talents through events, exhibitions, and talent shows.</p>
                <p className="exploreText" id="text-3"><span className="exploreText-span">Sports & Fitness:</span>Stay active with tournaments and fitness activities fostering teamwork.</p>
                <p className="exploreText" id="text-4"><span className="exploreText-span">Community Building:</span>Join a network of like-minded peers for collaboration and support.</p>
            </div>
        </div>
    )
}

export default Explore