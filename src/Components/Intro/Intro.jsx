import React from "react";
import styled from "./Intro.module.css";
import { Link } from "react-scroll";
import TypeWriter from "../TypeWriter/TypeWriter";
import img from "../files/me.png";

const Intro = () => {
	return (
		<div className={styled.flex}>
			<div className={styled.div1}>
				<div id="intro">
					<h1 className={styled.h1}>About Me</h1>

					<h3 className={styled.color}>Hi, My Name Is</h3>
					<p className={styled.fontS}>ATUL KUMAR</p>
					<p className={styled.fontS2}>
						<TypeWriter />
					</p>
					<h3 className={styled.left}>
						A highly technical, team-oriented professional with extensive
						experience in Full Stack Web Development with demonstrated ability
						to work through a problem effectively and provide the best
						solutions.
					</h3>
					<Link
						to="contact"
						hashSpy={true}
						spy={true}
						smooth={true}
						delay={100}
						duration={500}
						className={styled.btn}
					>
						Get In Touch
					</Link>
					<Link
						to="resume"
						hashSpy={true}
						spy={true}
						smooth={true}
						delay={100}
						duration={500}
						className={styled.btn1}
					>
						My Resume
					</Link>
				</div>
			</div>

			<div className={styled.div2}>
				<img className={styled.img} src={img} alt="photo1" />
			</div>
		</div>
	);
};

export default Intro;
