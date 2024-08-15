export const animatePage = {
	hide: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			when: "beforeChildren",
			staggerChildren: 0.25,
		},
	},
};
export const animateTitle = {
	hide: {
		y: 200,
	},
	show: {
		y: 0,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};
export const fade = {
	hide: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};
export const animateImg = {
	hide: {
		scale: 1.5,
		opacity: 0,
	},
	show: {
		scale: 1,
		opacity: 1,
		transition: {
			duration: 1,
		},
	},
};
export const animateLine = {
	hide: {
		width: "0%",
	},
	show: {
		width: "100%",
		transition: {
			duration: 1,
		},
	},
};
