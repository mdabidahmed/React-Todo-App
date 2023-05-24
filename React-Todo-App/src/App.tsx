import {useState} from 'react';
import {
  AiFillAppstore,
  AiFillCheckSquare,
  AiFillDelete,
  AiFillHome,
  AiFillStar,
} from 'react-icons/ai';
import './App.css';
import Icon from './components/atoms/icon/Icon';
function App() {
  const [activeIcon, setActiveIcon] = useState('');
  const handleClick = (iconName: string) => {
    setActiveIcon(iconName);
  };
  const componentStyles: React.CSSProperties = {
    cursor: 'pointer',
    fontSize: '32px',
    textAlign: 'center',
  };
  return (
    <div className='container'>
      <header>
        <a href='#'>
          <img
            src='./src/assets/icons/profile.png'
            alt=''
            width='48'
            height='48'
            style={{paddingBottom: '30px'}}
          />
        </a>
        <Icon
          title='My Home'
          styles={componentStyles}
          onClick={() => handleClick('home')}
          active={activeIcon === 'home'}>
          <AiFillHome />
        </Icon>
        <Icon
          title='My App Store'
          styles={componentStyles}
          onClick={() => handleClick('myAppstore')}
          active={activeIcon === 'myAppstore'}>
          <AiFillAppstore />
        </Icon>

        <Icon
          title='My Favorite'
          styles={componentStyles}
          onClick={() => handleClick('myFavorite')}
          active={activeIcon === 'myFavorite'}>
          <AiFillStar />
        </Icon>
        <Icon
          title='My List'
          styles={componentStyles}
          onClick={() => handleClick('myList')}
          active={activeIcon === 'myList'}>
          <AiFillCheckSquare />
        </Icon>

        <Icon
          title='Delete'
          styles={componentStyles}
          onClick={() => handleClick('delete')}
          active={activeIcon === 'delete'}>
          <AiFillDelete />
        </Icon>
      </header>
      <div className='sidebar'>
        <aside>
          <h3>Aside</h3>
        </aside>
      </div>
      <main>
        <h2>Main Content</h2>
        <p>This is the main content of the page.</p>
      </main>
    </div>
  );
}

export default App;
