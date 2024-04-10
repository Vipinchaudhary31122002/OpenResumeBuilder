const deleteObjectById = (array, idToDelete) => {
  return array.filter((obj) => obj.id !== idToDelete);
};

export { deleteObjectById };