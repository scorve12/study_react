// src/components/ImageList.jsx

function ImageList({ images }) {
  // Default images if none provided
  const defaultImages = [
    { id: 1, url: 'https://picsum.photos/id/1/300/200', title: 'Nature' },
    { id: 2, url: 'https://picsum.photos/id/2/300/200', title: 'Architecture' },
    { id: 3, url: 'https://picsum.photos/id/3/300/200', title: 'People' },
    { id: 4, url: 'https://picsum.photos/id/4/300/200', title: 'Technology' },
  ];
  
  const displayImages = images || defaultImages;
  
  return (
    <div className="image-list">
      {displayImages.map(image => (
        <div key={image.id} className="image-item">
          <img src={image.url} alt={image.title} />
          <h3>{image.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ImageList;