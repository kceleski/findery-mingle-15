
import React from 'react';
import { Category } from '@/types';
import { 
  Utensils, ShoppingBag, Briefcase, Heart, 
  Scissors, Dumbbell, GraduationCap, Film 
} from 'lucide-react';
import { useBusinessContext } from '@/context/BusinessContext';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  const { updateSearchFilters } = useBusinessContext();

  const handleCategoryClick = () => {
    updateSearchFilters({ category: category.name });
  };

  const getIcon = () => {
    switch (category.icon) {
      case 'utensils':
        return <Utensils className="h-8 w-8 mb-3" />;
      case 'shopping-bag':
        return <ShoppingBag className="h-8 w-8 mb-3" />;
      case 'briefcase':
        return <Briefcase className="h-8 w-8 mb-3" />;
      case 'heart':
        return <Heart className="h-8 w-8 mb-3" />;
      case 'scissors':
        return <Scissors className="h-8 w-8 mb-3" />;
      case 'dumbbell':
        return <Dumbbell className="h-8 w-8 mb-3" />;
      case 'graduation-cap':
        return <GraduationCap className="h-8 w-8 mb-3" />;
      case 'film':
        return <Film className="h-8 w-8 mb-3" />;
      default:
        return <Briefcase className="h-8 w-8 mb-3" />;
    }
  };

  return (
    <button
      onClick={handleCategoryClick}
      className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100 h-full"
    >
      <div className="rounded-full p-3 bg-gradient-to-r from-brand-50 to-teal-50 text-brand-500 mb-2">
        {getIcon()}
      </div>
      <h3 className="font-medium text-gray-800">{category.name}</h3>
      <span className="text-sm text-gray-500 mt-1">{category.count} places</span>
    </button>
  );
};

export default CategoryCard;
