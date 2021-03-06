import { requestAuthenticated } from '../../../utils';

export const uploadFiles = (id, values) => {
	const formData = new FormData();
	Object.entries(values).forEach(([key, value]) => {
		formData.append(key, value);
	});

	const options = {
		method: 'POST',
		body: formData
	};

	return requestAuthenticated(`/admin/user/${id}/upload`, options, {});
};
