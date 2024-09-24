export const getData = async (url) => {
  try {
    const reps = await fetch(url);
    const data = await reps.json();
    return data;
  } catch (error) {
    alert(error.message);
  }
};
