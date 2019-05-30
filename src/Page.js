import React from 'react';
import './App.css';

function Page({ children, back }) {
	return (
		<section className={`page ${back ? 'page-back' : 'page-forward'}`}>
			{children}
		</section>
	);
}
export default Page;
