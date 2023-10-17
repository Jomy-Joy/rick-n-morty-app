const fetchData = async (setLoading,search,setCharacters,setTotalPages) => {
    setLoading(true)
    try {
     
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${search.page.toString()}&name=${search.name}&status=${search.status}&gender=${search.gender}&species=${search.species}`
      );
      if (data.ok) {
        setLoading(false)
        const response = await data.json();
        setCharacters(response.results);
        setTotalPages(response.info.pages);
      } else {
        setLoading(false)
        console.error('Error fetching character data');
      }
    } catch (error) {
      setLoading(false)
      console.error('Error fetching character data', error);
    }
  }
export default fetchData;