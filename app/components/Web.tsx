import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { AnimationControls, motion } from "framer-motion";
import { animateImg, animateLine, fade } from "@/animate";
interface Props {
	title: string;
	href: string;
	src: string;
	innerRef?: any;
	control?: AnimationControls;
	animate: boolean;
}

const Web = ({ href, src, title, innerRef, control, animate }: Props) => {
	return (
		<StyledWeb
			ref={innerRef}
			initial={animate ? "hide" : ""}
			animate={animate ? control : ""}
		>
			<motion.h2 variants={fade}>{title}</motion.h2>
			<motion.div variants={animateLine} className="line"></motion.div>
			<motion.div variants={animateImg}>
				<Link href={href} target="_blank">
					<Image src={src} width={800} height={200} alt={title} />
				</Link>
			</motion.div>
		</StyledWeb>
	);
};
const StyledWeb = styled(motion.div)`
	padding-bottom: 10rem;
	.line {
		height: 0.5rem;
		background-color: #1feca4;
		margin-bottom: 3rem;
	}
	img {
		width: 100%;
		height: 80vh;
		object-fit: cover;
	}
`;
export default Web;
