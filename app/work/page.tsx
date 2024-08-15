"use client";
import styled from "styled-components";
import Web from "../components/Web";
import { motion } from "framer-motion";
import { animatePage } from "@/animate";
import useScroll from "../hooks/useScroll";

const WorkPage = () => {
	const { ref, control } = useScroll();
	const { ref: ref2, control: control2 } = useScroll();
	return (
		<Work
			variants={animatePage}
			initial="hide"
			animate="show"
			style={{ background: "white" }}
		>
			<Web
				title="Music Player"
				src="/music.jpg"
				href="https://waves-sand.vercel.app/"
				animate={false}
			/>
			<Web
				title="Shortly"
				src="/shorten.png"
				href="https://shorty-mu.vercel.app/"
				control={control}
				innerRef={ref}
				animate
			/>
			<Web
				title="Shop Ease"
				src="/shop.png"
				href="https://shopease-yt.vercel.app/"
				control={control2}
				innerRef={ref2}
				animate
			/>
		</Work>
	);
};
const Work = styled(motion.div)`
	min-height: 100vh;
	overflow: hidden;
	padding: 5rem 10rem;
`;

export default WorkPage;
