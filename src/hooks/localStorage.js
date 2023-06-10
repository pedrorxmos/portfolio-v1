export const useGetValue = (key) => {
	if (!localStorage.getItem(key)) localStorage.setItem(key, '');
	return localStorage.getItem(key) ? localStorage.getItem(key) : '';
};

export const usePostValue = (key, value) => {
	localStorage.setItem(key, value);
};
