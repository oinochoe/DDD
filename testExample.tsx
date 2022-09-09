// import { MemoryRouter } from 'react-router-dom';
// import { waitFor, fireEvent, render, screen } from '@testing-library/react';
// import App from './App';

// test('API가 없어도 통과 필요', async () => {
//   render(<App />, { wrapper: MemoryRouter });

//   expect(screen.getByText(/기대되는 텍스트/)).toBeInTheDocument();
//   fireEvent.click(screen.getByTestId('testid'));

//   expect(screen.queryByTestId('testid')).toBeNull();
//   expect(screen.getByText(/.+다큐먼트에 있는가/)).toBeInTheDocument();
//   await waitFor(
//     () => {
//       expect(screen.getByText(/기다린 후에 뜨는 메시지가 정확한가/)).toBeInTheDocument();
//     },
//     { timeout: 3000 },
//   );
//   expect(screen.getByTestId('testid')).toBeInTheDocument();
//   fireEvent.click(screen.getByTestId('testid'));

//   expect(screen.getByText(/어떤 기대문구가 필요할까\?/)).toBeInTheDocument();
//   fireEvent.change(screen.getByTestId('어느정도의 밸류를 설정한다면'), { target: { value: 30 } });
//   expect(screen.getByText(/그다음문구는 어떤걸까\?/)).toBeInTheDocument();
//   fireEvent.change(screen.getByTestId('다른input'), { target: { value: 55 } });
//   fireEvent.click(screen.getByTestId('testid'));

//   expect(screen.getByText(/클릭 후에 어떤 메시지가 나타날까요?/)).toBeInTheDocument();
//   expect(screen.getByText(/어떤 기대를 하고 있나요/)).toBeInTheDocument();
//   expect(screen.getByText(/어떤 텍스트가 있을까요/)).toBeInTheDocument();
//   fireEvent.click(screen.getByTestId('testid'));

//   expect(screen.getByText(/클릭 후에 완료 문구/)).toBeInTheDocument();
// });
// test.skip('API 연동 후에 테스트는 패스', () => {});
