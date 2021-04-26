interface IPaginate {
  totalPages: number;
  array: never[];
}

export default function paginate(
  array: never[],
  page: number,
  numItemsShown: number,
): IPaginate {
  const startIndex = (page - 1) * numItemsShown;
  const endIndex = page * numItemsShown;

  const totalPages = Math.ceil(array.length / numItemsShown);
  const slicedArray = array.slice(startIndex, endIndex);

  return { totalPages, array: slicedArray };
}
