import React from 'react';

const Footer = ({ counter }: { counter: number }) => {
	return (
		<>
			<footer
				className={
					counter === 0
						? 'witcher3_footer'
						: counter === 1
						? 'witcher2_footer'
						: 'witcher1_footer'
				}
			>
				<a
					href='https://github.com/LeQu15'
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='author'>LeQu </span>
					<i className='fa-brands fa-github'></i>
				</a>
			</footer>
		</>
	);
};

export default Footer;
