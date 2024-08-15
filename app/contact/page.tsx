"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animatePage, animateTitle } from "@/animate";

const ContactPage = () => {
	return (
		<StyledContact
			variants={animatePage}
			initial="hide"
			animate="show"
			style={{ background: "white" }}
		>
			<Title>
				<Hide>
					<motion.h2 variants={animateTitle} initial="hide" animate="show">
						Get In touch
					</motion.h2>
				</Hide>
			</Title>
			<div>
				<Hide>
					<Social variants={animateTitle} initial="hide" animate="show">
						<Circle />
						<h2>Send us a message</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={animateTitle} initial="hide" animate="show">
						<Circle />
						<h2>Send us an email</h2>
					</Social>
				</Hide>
				<Hide>
					<Social variants={animateTitle} initial="hide" animate="show">
						<Circle />
						<h2>Social media</h2>
					</Social>
				</Hide>
			</div>
		</StyledContact>
	);
};
const StyledContact = styled(motion.div)`
	padding: 5rem 10rem;
	color: #353535;
	min-height: 90vh;
`;
const Title = styled.div`
	margin-bottom: 3rem;
	color: black;
`;
const Circle = styled.div`
	border-radius: 50%;
	width: 3rem;
	height: 3rem;
	background-color: #353535;
`;
const Social = styled(motion.div)`
	display: flex;
	align-items: center;
	h2 {
		margin: 2rem;
	}
`;
const Hide = styled.div`
	overflow: hidden;
`;

export default ContactPage;
