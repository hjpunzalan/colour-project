import React from 'react';
import './App.css';

function Page({ children, page }) {
	return <section className={`page ${page}`}>{children}</section>;
}
export default Page;
