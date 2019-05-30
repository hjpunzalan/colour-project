export default {
	up() {},
	down(size) {
		const sizes = {
			xs: '576px',
			sm: '768px',
			md: '992px',
			lg: '1200px'
		};
		return `@media only screen and (max-width: ${sizes[size]})`;
	}
};
