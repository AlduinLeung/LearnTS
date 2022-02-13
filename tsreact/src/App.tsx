import React, { useState } from 'react';
import './App.css';

// type TitleProps = {
//   name: string;
// };
interface TitleProps {
  name: string;
}
interface TitleProps {
  desc?: string;
}
// 这里可以看到Type和Interface的区别,Type不可以被扩充，Interface可以被扩充
const Title: React.FC<TitleProps> = ({ name }) => {
  return <p>Title</p>;
};
const App: React.FC = () => {
  const [title, setTitle] = useState<number | string>(10000);
  return (
    <div className='App'>
      <Title name='Leung' desc='....' />
    </div>
  );
};

export default App;
