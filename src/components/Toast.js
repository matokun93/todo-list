import React from 'react';

const Toast = ({ toast }) => {
	return (
		<div className={`${toast.visibility}`}>
			<i class='fas fa-exclamation-triangle'></i>
			{toast.message}
		</div>
	);
};

export default Toast;
