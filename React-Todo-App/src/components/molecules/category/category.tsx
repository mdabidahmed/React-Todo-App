import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Button from '../../atoms/button/button';
import './category.styles.css';
interface Category {
  id: string;
  name: string;
  subcategories: Subcategory[];
}

interface Subcategory {
  id: string;
  name: string;
  route: string;
}

interface CategoryComponentProps {
  categories: Category[];
  onAddCategory: () => void;
  onAddSubcategory: (categoryId: string) => void;
}

const CategoryComponent: React.FC<CategoryComponentProps> = ({
  categories,
  onAddCategory,
  onAddSubcategory,
}) => {
  const [activeSubcategory, setActiveSubcategory] = useState('');

  const handleSubcategoryClick = (route: string) => {
    // Redirect to the respective subcategory route
    window.location.href = route;
  };

  // const handleCategoryClick = (categoryId: string) => {
  //   setActiveSubcategory(categoryId);
  // };

  return (
    <div>
      {/* Render button to add category */}

      <Button
        variant='primary'
        onClick={onAddCategory}
        icon={<AiOutlinePlus />}>
        Add category
      </Button>
      {/* Render categories */}
      {categories.map(category => (
        <div key={category.id}>
          <h3>{category.name}</h3>
          {/* Render subcategories */}
          {category.subcategories.map(subcategory => (
            <div
              className='sub-categories'
              key={subcategory.id}
              onClick={() => handleSubcategoryClick(subcategory.route)}
              style={{
                cursor: 'pointer',
                fontWeight:
                  activeSubcategory === subcategory.id ? 'bold' : 'normal',
              }}>
              {subcategory.name}
            </div>
          ))}
          {/* Render button to add subcategory */}
          <div className='add-subcategory-section'>
            <Button
              variant='primary'
              icon={<AiOutlinePlus />}
              onClick={() => onAddSubcategory(category.id)}>
              Add Subcategory
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryComponent;
