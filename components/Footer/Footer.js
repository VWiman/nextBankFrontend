const Footer = () => {
	const currentYear = new Date().getFullYear();
	return <footer className="mt-auto mx-auto md:text-card hover:cursor-default">&copy; {currentYear} Viktor Wiman</footer>;
};

export default Footer;
