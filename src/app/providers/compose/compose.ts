type Callback = (component: () => React.ReactNode) => () => React.ReactNode;

export const compose = (...cbs: Callback[]) => {
	return (component: () => React.ReactNode) => {
		cbs.reverse().forEach((cb) => {
			component = cb(component);
		});
		return component;
	};
};
