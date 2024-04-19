// fuction which takes array and id of object to delete object from array and  return new modified array
const deleteObjectById = (array, idToDelete) => {
  return array.filter((obj) => obj.id !== idToDelete);
};

export { deleteObjectById };