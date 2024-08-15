"use client";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animateImg, animateTitle, fade } from "@/animate";
import Wave from "./Wave";

const About = () => {
	return (
		<StyledAbout>
			<Description>
				<div className="title">
					<motion.h2 variants={animateTitle} initial="hide" animate="show">
						I turn your
					</motion.h2>
					<motion.h2 variants={animateTitle} initial="hide" animate="show">
						<span>designs</span> into
					</motion.h2>
					<motion.h2 variants={animateTitle} initial="hide" animate="show">
						reality
					</motion.h2>
				</div>
				<motion.p variants={fade} initial={"hide"} animate="show">
					Contact me for any type of frontend development
				</motion.p>
				<motion.button variants={fade} initial={"hide"} animate="show">
					Contact Me
				</motion.button>
			</Description>
			<StyledImage variants={animateImg} initial="hide" animate="show">
				<Image src={"/Home1.jpg"} width={500} height={500} alt="me" />
			</StyledImage>
			<Wave />
		</StyledAbout>
	);
};
export const StyledAbout = styled(motion.div)`
	min-height: 90vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 5rem 10rem;
	color: white;
	z-index: 10;
`;
export const Description = styled.div`
	flex: 1;
	padding-right: 5rem;
	h2 {
		font-weight: lighter;
	}
`;
const StyledImage = styled(motion.div)`
	flex: 1;
	z-index: 2;
	overflow: hidden;
	img {
		object-fit: cover;
		width: 100%;
	}
`;
export default About;
