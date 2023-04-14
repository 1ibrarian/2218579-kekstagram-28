const thumbnailTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');
const container = document.querySelector('.pictures');

const createThumbnail = ({url, likes, comments, description, id}) => {
  const thumbnail = thumbnailTemplate.cloneNode(true);
  const pictureImg = thumbnail.querySelector('.picture__img');
  pictureImg.src = url;
  pictureImg.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  thumbnail.dataset.thumbnailId = id;

  return thumbnail;
};

const renderThumbnails = (pictures) => {
  const fragment = document.createDocumentFragment();
  pictures.forEach((picture) => {
    const thumbnail = createThumbnail(picture);
    fragment.append(thumbnail);
  });
  container.append(fragment);
};

export {renderThumbnails};

