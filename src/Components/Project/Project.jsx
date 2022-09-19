import React, { useState } from "react";
import styled from "./Project.module.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import Modal from "react-modal";
import img1 from "../files/HealthKart.jpg";
import img2 from "../files/lifestyle.png";
import img3 from "../files/ssense.png";
import img4 from "../files/suduko.png";
import img5 from "../files/myntra.png";
import img6 from "../files/snapdeal.png";

const Project = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isOpen1, setIsOpen1] = useState(false);
	const [isOpen2, setIsOpen2] = useState(false);
	const [isOpen3, setIsOpen3] = useState(false);
	const [isOpen4, setIsOpen4] = useState(false);
	const [isOpen5, setIsOpen5] = useState(false);
	return (
		<div id="project">
			<h1 className={styled.mid}>Projects</h1>
			<div className={styled.width}>
				<div className={styled.left}>
					<img className={styled.img} src={img1} alt="logo" />
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>HealthKart</h2>
					<div className={styled.box}>
						<p>
							HealthKart is an online health and fitness store for men and
							women, which offers fitness products, services and community.
							<p className={styled.blue} onClick={() => setIsOpen(true)}>
								Read More
							</p>
						</p>
						<Modal className={styled.background} isOpen={isOpen}>
							<h1>HealthKart</h1>
							<p>
								HealthKart is an online health and fitness store for men and
								women, which offers fitness products, services and community.
							</p>
							<p>
								A website that allows users to purchase health supplements not
								limited to Protiens, Multivitamins and Health accessories.
								<h3> Tech Stack: HTML, CSS, JavaScript, LocalStorage</h3>
								A collaborative project in 5 days with 4 people
								<br />
								Roles & Responsibility: 1. A user can sign in or sign up 2.Build
								a backend with all functionality like fetching, mapping,
								sorting. 3. Product page with Filter and Sorting
								functionalities. 4. Add to Cart and Payment Gateway.
							</p>
							<button onClick={() => setIsOpen(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>HTML || CSS || JavaScript || LocalStorage</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://github.com/GreatA-Maker/HealthKart"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="https://unit3-healthkart-clone-app.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
			{/* ----project2 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img className={styled.img} src={img2} alt="logo" />
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>LinkedIn</h2>
					<div className={styled.box}>
						<p>
							LifestyleStores is a retail Fashion Brand. Which has all clothing
							in varies categories and has a wide range of fashion products.
							<p onClick={() => setIsOpen1(true)} className={styled.blue}>
								Read More
							</p>
						</p>
						<Modal className={styled.background} isOpen={isOpen1}>
							<h1>LinkedIn</h1>
							<p>
								This is the clone of LinkedIn, which is a web application
								primarily used for professional networking and career
								development. You can invite anyone to connect (and accept their
								invitations to connect with you), but they must have their own
								LinkedIn account to use the site. LinkedIn saves the connections
								that you make to a list called My Network.
							</p>
							<p>
								LinkedIn enables you to network with people and professional
								organizations in your industry.
								<h3> Tech Stack: React, Redux, Firebase, Styled-Components</h3>
								A collaborative project in 5 days with 4 team members
								<br />
								people. Roles & Responsibility: Built a profile page of the
								user. Get and Post and Update data of profile page using
								firebase.
							</p>
							<button onClick={() => setIsOpen1(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>
						React || Redux || Node || MongoDB || Heroku || Styled-Components
					</h5>
					<div className={styled.flex}>
						<a
							href="https://github.com/mehtab39/linkedin-clone-project"
							className={styled.size}
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							href="https://linkedin-production-app.web.app/"
							className={styled.size}
						>
							<BiLink className={styled.size} />{" "}
						</a>
					</div>
				</div>
			</div>
			{/* ----project3 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img className={styled.img} src={img3} alt="logo" />
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>SSENSE</h2>
					<div className={styled.box}>
						<p>
							SSENSE is a multi-brand retailer based in Montreal, Canada
							specialising in the sale of designer fashion and high end
							streetwear.
							<p onClick={() => setIsOpen2(true)} className={styled.blue}>
								Read More
							</p>
						</p>
						<Modal className={styled.background} isOpen={isOpen2}>
							<h1>SSENSE</h1>
							<p>
								SSENSE is a multi-brand retailer based in Montreal, Canada
								specialising in the sale of designer fashion and high end
								streetwear.
							</p>
							<p>
								The website allows users to purchase fashion and clothing
								accessories which includes clothes, shoes, watches, Jewelleries
								etc.
								<h3> Tech Stack: Html, CSS, Node, MongoDB, JavaScript</h3>
								A collaborative project in 5 days with 3<br />
								people. Roles & Responsibility: Built a profile page of the
								user. Built a resume page and store information at the JSON
								server. Built a host page to post jobs with all required
								details. Built homepage with functionality.
							</p>
							<button onClick={() => setIsOpen2(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>Html || CSS || Node || MongoDB || JavaScript</h5>
					<div className={styled.flex}>
						<a
							href="https://github.com/TusharTaral/naukri-clone"
							className={styled.size}
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							href="https://intense-taiga-94146.herokuapp.com/"
							className={styled.size}
						>
							<BiLink className={styled.size} />{" "}
						</a>
					</div>
				</div>
			</div>
			{/* -------- project 4 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img className={styled.img} src={img4} alt="logo" />
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Sudoku Solver</h2>
					<div className={styled.box}>
						<p>
							Sudoku Solver is a Website that gives you the Solution of Every
							Sudoko Problem that you input and
							<p className={styled.blue} onClick={() => setIsOpen3(true)}>
								Read More
							</p>
						</p>
						<Modal className={styled.background} isOpen={isOpen3}>
							<h1>Sudoku Solver</h1>
							<p>
								Sudoku Solver is a Website that gives you the Solution of Every
								Sudoko Problem that you input and also you can visualize each
								step of how the sudoku is getting solved.
							</p>
							<p>
								A website that allows users to solve any sudoku problem
								<h3> Tech Stack: HTML, CSS, JavaScript</h3>
								Solo Project was done in 2 days.
								<br />
							</p>
							<button onClick={() => setIsOpen3(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>HTML || CSS || JavaScript</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://github.com/MeeraMendhe/Sudoku"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="https://sudoku-game9.herokuapp.com/?"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
			{/* ------ project 5 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img className={styled.img} src={img5} alt="logo" />
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Myntra</h2>
					<div className={styled.box}>
						<p>
							Myntra is a major Indian fashion e-commerce company headquartered
							in Bengaluru, Karnataka, India.
							<p className={styled.blue} onClick={() => setIsOpen4(true)}>
								Read More
							</p>
						</p>
						<Modal className={styled.background} isOpen={isOpen4}>
							<h1>Myntra</h1>
							<p>
								Myntra is a major Indian fashion e-commerce company
								headquartered in Bengaluru, Karnataka, India.
							</p>
							<p>
								A website that allows users to buy Fashion related things such
								as Cloths, Shoes, Watches, Jewelleries and Fashion Accessories
								<h3> Tech Stack: HTML, CSS, JavaScript</h3>
								A solo project completed Within 5 days.
								<br />
								Roles & Responsibility: Landing Page with Navbar, Products pagw
								with individual product details, Add to cart feature and Dummy
								Payment Gateway. website.
							</p>
							<button onClick={() => setIsOpen4(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>HTML || CSS || JavaScript || LocalStorage</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://github.com/GreatA-Maker/Myntra"
							target="_blank"
							rel="noreferrer"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a
							className={styled.size}
							href="https://myntra-clone-2.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
			{/* ------ project 6 */}
			<div className={styled.width}>
				<div className={styled.left}>
					<img className={styled.img} src={img6} alt="logo" />
				</div>
				<div className={styled.right}>
					<h4 className={styled.color}>Featured</h4>
					<h2>Memory Game</h2>
					<div className={styled.box}>
						<p>
							Memory games give space to critical thinking and that helps
							children nurture their attention to detail.
							<p className={styled.blue} onClick={() => setIsOpen5(true)}>
								Read More
							</p>
						</p>
						<Modal className={styled.background} isOpen={isOpen5}>
							<h1>Mwmory Game</h1>
							<p>
								Playing memory games can improve other brain functions, such as
								attention, concentration, and focus. Memory games give space to
								critical thinking and that helps children nurture their
								attention to detail. Memory games can improve visual
								recognition. ... A good short-term memory can improve a person's
								long-term memory too.
							</p>
							<p>
								A website that allows users to solve any memory game
								<h3> Tech Stack: React</h3>
								Solo Project was done in 1 days.
								<br />
							</p>
							<button onClick={() => setIsOpen5(false)} className={styled.btn}>
								Close
							</button>
						</Modal>
					</div>
					<h5>React</h5>
					<div className={styled.flex}>
						<a
							className={styled.size}
							href="https://github.com/MeeraMendhe/MemoryGame"
						>
							{" "}
							<AiFillGithub className={styled.size} />
						</a>
						<a className={styled.size} href="memorygame27.herokuapp.com/">
							<BiLink className={styled.size} />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
