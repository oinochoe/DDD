import { Meta } from '@storybook/react';

export default {
	title: '테스트/기본',
} as Meta;

export const 기본선택 = () => {
	return (
		<ul>
			{MOCK.map(({ mockData }, index) => (
				<li key={index}>{mockData}</li>
			))}
		</ul>
	);
};

const MOCK = [{ mockData: '데이터1' }, { mockData: '데이터2' }];
