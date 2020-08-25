class Info {
	/**
	 * informations
	 */
	public log = (info?: any) => {
		console.log(`informatoin-->>>`); 
		console.log(`\t${info}`);
	};
}

export default new Info();
