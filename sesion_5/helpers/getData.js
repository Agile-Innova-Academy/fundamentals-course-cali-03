export const getData = async (url) => {
  try {
    const response = await axios.get(url)
    return response.data;
  } catch (error) {
    alert(error.message);
  }
};
