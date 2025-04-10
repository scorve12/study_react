import React from 'react';
import { Grid, ArrowRight } from 'lucide-react';

const ProductCard = ({ product, isSelected, onClick }) => {
  return (
    <div 
      className={`bg-white border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer ${isSelected ? 'ring-2 ring-blue-500' : ''}`}
      onClick={onClick}
    >
      <div className="p-4">
        <div className="h-40 bg-gray-100 mb-3 rounded flex items-center justify-center">
          <Grid size={32} className="text-gray-400" />
        </div>
        <h4 className="font-medium text-gray-900">{product.title}</h4>
        <p className="text-sm text-gray-500 mb-2">{product.desc}</p>
        <p className="text-blue-600 font-medium">{product.price}</p>
      </div>
      <div className="px-4 py-2 bg-gray-50 border-t flex justify-between items-center">
        <span className="text-xs text-gray-500">자세히 보기</span>
        <ArrowRight size={14} className="text-gray-400" />
      </div>
    </div>
  );
};

export default ProductCard;