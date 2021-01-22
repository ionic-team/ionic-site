export const importResource = (
  {
    propertyName,
    link,
    target = document.body,
    defer = true,
    async = true,
  }: {
    propertyName?: string;
    link: string;
    target?: HTMLElement;
    async?: boolean;
    defer?: boolean;
  },
  callback: () => any,
) => {
  if (hasGlobalProperty(propertyName)) return callback();

  const scriptAlreadyLoading = Array.from(document.scripts).some(script => {
    if (script.src === link) {
      script.addEventListener('load', callback);
      return true;
    }
  });

  if (scriptAlreadyLoading) return;

  const script = document.createElement('script');
  script.src = link;
  script.type = 'text/javascript';
  script.addEventListener('load', callback);
  script.defer = defer;
  script.async = async;
  script.onerror = () => console.warn(`error loading resource: ${link}`);

  target.appendChild(script);
};

export const pixelize = (num: number) => {
  return num.toString().concat('px');
};

const hasGlobalProperty = (property: string) => {
  if (property && property.includes('.')) {
    const propertyList = property.split('.');
    return !!propertyList.reduce((prev, cur) => {
      return prev.hasOwnProperty(cur) ? prev[cur] : null;
    }, window);
  }

  return window.hasOwnProperty(property);
};

export function slugify(text: string) {
  if (!text) {
    return '';
  }
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
}
