
import "./index.css"

function Heroo() {
	return <section id="portfolio" className="port-container">
		<div className="port-1">
			<h3 className="port-heading"><span className="bordered-word">PORTFOLIO</span>
			</h3>
		</div>  
		<div>
			<div className="port-menu">
				<ul className="full-underline">
				<li>ALL</li>
				<li>CODED</li>
				<li>DESIGNED</li>
				</ul>
			</div>	
		</div>
		<div className="port-images">
			<div>
				<img src="/herooimage1.avif" alt="lion image" className="heroo-image" />
				<img src="/herooimage2.png" alt="heroo image" className="heroo-images" />
				<img src="/herooimage3.png" alt="heroo image" className="heroo-images" />
			</div>	

			<div>
				<img src="/herooimage4.png" alt="heroo image" className="heroo-images" />
				<img src="/herooimage3.png" alt="heroo image again" className="heroo-images" />
				<img src="/herooimage1.avif" alt="heroo image again" className="heroo-image" />
			</div>
		</div>	
		<div className="more">
			<h4>And many more to come!</h4>
		</div>



	</section>

}


export default Heroo; 