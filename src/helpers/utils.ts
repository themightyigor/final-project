const PLACEHOLDER_URL = 'https://via.placeholder.com/475';

export const capitalizeFirst = (value: string): string => {
  const capitalized = `${value[0].toUpperCase()}${value.slice(1)}`;
  return capitalized;
};

export const onImageError = (e: any) => (e.target.src = PLACEHOLDER_URL);

export const formatDate = (date: number) => {
  return new Date(date).toLocaleString();
};
