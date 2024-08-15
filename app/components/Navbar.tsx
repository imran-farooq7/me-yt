"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";
const Navbar = () => {
	const pathName = usePathname();
	return (
		<Nav>
			<h1 className="logo">
				<Link href={"/"}>Me</Link>
			</h1>
			<ul>
				<li>
					<Link href={"/"}>About</Link>
					{pathName === "/" && (
						<Line initial={{ width: 0 }} animate={{ width: "100%" }} />
					)}
				</li>
				<li>
					<Link href={"/work"}>Our work</Link>
					{pathName === "/work" && (
						<Line initial={{ width: 0 }} animate={{ width: "100%" }} />
					)}
				</li>
				<li>
					<Link href={"/contact"}>Contact us</Link>
					{pathName === "/contact" && (
						<Line initial={{ width: 0 }} animate={{ width: "100%" }} />
					)}
				</li>
			</ul>
		</Nav>
	);
};
const Nav = styled.nav`
	display: flex;
	min-height: 10vh;
	margin: auto;
	justify-content: space-between;
	padding: 1rem 10rem;
	background-color: #282828;
	align-items: center;
	ul {
		display: flex;
		list-style: none;
		gap: 6rem;
	}
	a {
		color: white;
		text-decoration: none;
	}
	li {
		position: relative;
	}
	.logo a {
		font-size: 2rem;
		font-weight: bold;
		font-style: italic;
	}
`;
const Line = styled(motion.div)`
	height: 0.1rem;
	background-color: #23d997;
	width: 0%;
	position: absolute;
	bottom: -30%;
`;

export default Navbar;
