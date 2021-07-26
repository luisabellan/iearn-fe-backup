const { useEffect } = require("react");

const useLocalStorage = (key, initialValue) => {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(initialValue));
  }, [key, initialValue]);

  return () => JSON.parse(localStorage.getItem(key));
};

export default useLocalStorage;
