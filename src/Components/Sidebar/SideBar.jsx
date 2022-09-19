import React from "react";
import {
	AiFillGithub,
	AiFillTwitterCircle,
	AiFillLinkedin,
} from "react-icons/ai";

import { SiHackerrank } from "react-icons/si";
import styled from "./SideBar.module.css";
const SideBar = () => {
	return (
		<div className={styled.fix}>
			<a
				className={styled.color3}
				href="https://github.com/GreatA-Maker"
				target="_blank"
				rel="noreferrer"
			>
				<AiFillGithub className={styled.color1} />
				<br />
			</a>
			<a
				className={styled.color3}
				href="https://twitter.com/theycalmeatul"
				target="_blank"
				rel="noreferrer"
			>
				<AiFillTwitterCircle className={styled.color} />
				<br />
			</a>{" "}
			<a
				className={styled.color3}
				href="https://www.linkedin.com/in/atul-11-kumar/"
				target="_blank"
				rel="noreferrer"
			>
				<AiFillLinkedin className={styled.color} />
				<br />
			</a>{" "}
			<a
				className={styled.color3}
				href="https://www.hackerrank.com/GreatA"
				target="_blank"
				rel="noreferrer"
			>
				<SiHackerrank className={styled.color} />
				<br />
			</a>
		</div>
	);
};

export default SideBar;
