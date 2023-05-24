import {useId, useState} from 'react';
import './App.css';
import Profile from './components/atoms/profile/profile';
import CategoryComponent from './components/molecules/category/category';
import SideNav from './components/organisms/nav/side-nav';
const todoCategories = [
  {
    id: '1',
    name: 'Personal',
    subcategories: [
      {id: '1', name: 'Fitness', route: '/subcategory1'},
      {id: '2', name: 'Health & food diet', route: '/subcategory2'},
      {id: '3', name: 'Fitness', route: '/subcategory1'},
      {id: '4', name: 'Meetings', route: '/subcategory2'},
    ],
  },
  {
    id: '2',
    name: 'Learning',
    subcategories: [
      {id: '5', name: 'Reading blogs', route: '/subcategory1'},
      {id: '6', name: 'Meetups', route: '/subcategory2'},
      {id: '7', name: 'Analysis design', route: '/subcategory1'},
      {id: '8', name: 'Design revisit', route: '/subcategory2'},
    ],
  },
  {
    id: '3',
    name: 'Project',
    subcategories: [
      {id: '9', name: 'Reading blogs', route: '/subcategory1'},
      {id: '10', name: 'Meetups', route: '/subcategory2'},
      {id: '11', name: 'Analysis design', route: '/subcategory1'},
      {id: '12', name: 'Design revisit', route: '/subcategory2'},
    ],
  },
];
function App() {
  const [categories, setCategories] = useState(todoCategories);

  const id = useId();
  const handleAddCategory = () => {
    // Logic to add a new category
    const newCategory: any = {
      id: id, // Generate a unique ID for the new category
      name: 'New Category',
      subcategories: [],
    };

    setCategories([...categories, newCategory]);
  };

  const handleAddSubcategory = (categoryId: string) => {
    const newSubcategory: any = {
      id: id, // Generate a unique ID for the new subcategory
      name: 'New Subcategory',
      route: '/new-subcategory',
    };

    setCategories((prevCategories: any) => {
      const updatedCategories = prevCategories.map((category: any) => {
        if (category.id === categoryId) {
          return {
            ...category,
            subcategories: [...category.subcategories, newSubcategory],
          };
        }
        return category;
      });

      return updatedCategories;
    });
  };

  return (
    <div className='container'>
      <header>
        <nav>
          <Profile
            imageUrl='./src/assets/icons/profile.png'
            altText='Profile Image'
            width={48}
            height={48}
            profileRoute='/profile'
          />
          <SideNav />
        </nav>
      </header>
      <div className='sidebar'>
        <aside>
          <article className='article-container'>
            <div className='category-title'>
              <h2>Todo App</h2>
            </div>
          </article>
          <div className='category-list'>
            <CategoryComponent
              categories={categories}
              onAddCategory={handleAddCategory}
              onAddSubcategory={handleAddSubcategory}
            />
          </div>
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
