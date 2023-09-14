export const ImageGalleryItem = ({ imageData }) => {
  const { hits } = imageData;
  console.log(hits);
  return (
    <div>
      {hits && hits.length > 0 ? (
        hits.map(hit => {
          console.log(hit);
          return (
            <li key={hit.id}>
              <img src={hit.previewURL} alt="" />
            </li>
          );
        })
      ) : (
        <p>No hits found</p>
      )}
    </div>
  );
};
