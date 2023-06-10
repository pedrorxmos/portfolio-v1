export const useGetValue = (key, def) => {
	if (!localStorage.getItem(key)) localStorage.setItem(key, def);
	return localStorage.getItem(key) ? localStorage.getItem(key) : '';
};

export const usePostValue = (key, value) => {
	localStorage.setItem(key, value);
};
