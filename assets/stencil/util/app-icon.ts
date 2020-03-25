export const generateAppIconForThemeAndEmoji = async (theme, emojiImage, imageSize, iconSize) => {
  const canvas = document.createElement('canvas');
  canvas.style.visibility = 'hidden';

  // We fetch the image text because we need to modify it to fix a FF bug
  const svgDataReq = await fetch(emojiImage);
  const svgData = await svgDataReq.text();

  const el = document.createElement('div');
  el.innerHTML = svgData;

  const svgEl = el.firstElementChild;

  // Necessary to avoid a firefox bug where it refuses to render svg's
  // that don't have width and height attributes
  svgEl.setAttribute('width', `${iconSize}`);
  svgEl.setAttribute('height', `${iconSize}`);

  const b64 = btoa(el.innerHTML);

  canvas.width = imageSize
  canvas.height = imageSize;
  canvas.style.width = `${imageSize}px`;
  canvas.style.height = `${imageSize}px`;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = theme;
  ctx.fillRect(0, 0, imageSize, imageSize);

  const midx = imageSize / 2;
  const midy = imageSize / 2;

  const imageX = midx - iconSize / 2;
  const imageY = midy - iconSize / 2;

  const img = new Image();
  img.src = `data:image/svg+xml;base64,${b64}`;

  return new Promise((resolve, reject) => {
    img.onload = () => {
      ctx.drawImage(img, imageX, imageY, iconSize, iconSize);

      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = (e) => {
      reject(e);
    };
  });
};

export const generateAppIconForThemeAndImage = async (theme, image, fullImageSize, maxImageWidth) => {
  const canvas = document.createElement('canvas');
  canvas.style.visibility = 'hidden';
  canvas.width = fullImageSize;
  canvas.height = fullImageSize;
  canvas.style.width = `${fullImageSize}px`;
  canvas.style.height = `${fullImageSize}px`;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = theme;
  ctx.fillRect(0, 0, fullImageSize, fullImageSize);

  const midx = fullImageSize / 2;
  const midy = fullImageSize / 2;

  const img = new Image();
  img.src = image;

  return new Promise((resolve, reject) => {
    img.onload = () => {
      const aspectRatio = img.width / img.height;
      const imageW = Math.max(Math.min(img.width, maxImageWidth), maxImageWidth);
      const imageH = imageW * 1 / aspectRatio;
      const imageX = midx - imageW / 2;
      const imageY = midy - imageH / 2;


      ctx.drawImage(img, imageX, imageY, imageW, imageH);

      resolve(canvas.toDataURL('image/png'));
    };

    img.onerror = (e) => {
      reject(e);
    };
  });
};