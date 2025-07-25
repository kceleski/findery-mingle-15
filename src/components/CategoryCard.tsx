
import React from 'react';
import { Category } from '@/types';
import { 
  Home, Brain, Stethoscope, Heart, 
  Users, Shield, HandHeart, Bed 
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
      case 'home':
        return <Home className="h-8 w-8 mb-3" />;
      case 'brain':
        return <Brain className="h-8 w-8 mb-3" />;
      case 'stethoscope':
        return <Stethoscope className="h-8 w-8 mb-3" />;
      case 'heart':
        return <Heart className="h-8 w-8 mb-3" />;
      case 'users':
        return <Users className="h-8 w-8 mb-3" />;
      case 'shield':
        return <Shield className="h-8 w-8 mb-3" />;
      case 'hand-heart':
        return <HandHeart className="h-8 w-8 mb-3" />;
      case 'bed':
        return <Bed className="h-8 w-8 mb-3" />;
      default:
        return <Home className="h-8 w-8 mb-3" />;
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
      <span className="text-sm text-gray-500 mt-1">{category.count} facilities</span>
    </button>
  );
};

export default CategoryCard;
