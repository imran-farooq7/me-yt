"use client";
import styled from "styled-components";
import { StyledAbout } from "./About";
import Faq from "./Faq";
import { LayoutGroup } from "framer-motion";
import useScroll from "../hooks/useScroll";
import { animateImg } from "@/animate";

const Faqs = () => {
	const { ref, control } = useScroll();
	return (
		<StyledFaqs
			ref={ref}
			variants={animateImg}
			initial="hide"
			animate={control}
		>
			<h2>
				Any Question <span>FAQ</span>
			</h2>
			<LayoutGroup>
				<Faq title="How Do i Start" />
				<Faq title="Tech Stack" />
				<Faq title="Different payment methods" />
				<Faq title="What products do you offer" />
			</LayoutGroup>
		</StyledFaqs>
	);
};
const StyledFaqs = styled(StyledAbout)`
	display: block;
	span {
		display: block;
	}
	h2 {
		padding-bottom: 1rem;
		font-weight: lighter;
	}
	.faq-line {
		background-color: #cccccc;
		height: 0.2rem;
		margin: 2rem 0rem;
		width: 100%;
	}
	.question {
		padding: 3rem 0rem;
		cursor: pointer;
	}
	.answer {
		padding: 2rem 0rem;
		p {
			padding: 0.5rem 0rem;
		}
	}
`;
export default Faqs;
