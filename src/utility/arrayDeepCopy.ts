// const arrayDeepCopy = (arr: any) => {
//   let newArray = JSON.parse(JSON.stringify(arr));
//   return newArray;
// };

// export default arrayDeepCopy;

const arrayDeepCopy = <T>(arr: T[]): any => {
  let newArray = JSON.parse(JSON.stringify(arr));
  return newArray;
};

  export default arrayDeepCopy;
