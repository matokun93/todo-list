import React from 'react';

const Toast = ({ toast }) => {
	return (
		<div className={`${toast.visibility}`}>
			<i className='fas fa-exclamation-triangle'></i>
			{toast.message}
		</div>
	);
};

export default Toast;
