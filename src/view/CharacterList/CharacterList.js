import React, { useEffect, useState } from "react";
import {
  Pagination,
  TextField,
  Select,
  MenuItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Grid,
  FormControl,
  InputLabel,
  Box,
} from '@mui/material';
import Button from '@mui/material/Button';
import fetchData from "../../service/fetchData";
import Loader from "../../components/Loader/Loader";


function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [expandedCharacter, setExpandedCharacter] = useState(null);
  const [search, setSearch] = useState({
    page: 1,
    name: '',
    status: '',
    gender: '',
    species: '',
  });


  const handleSubmit = () =>{
    fetchData(setLoading,search,setCharacters,setTotalPages)
  }
useEffect(() =>{
  fetchData(setLoading,search,setCharacters,setTotalPages)
},[search.page])
  
  const handleToggleDetails = (character) => {
    setExpandedCharacter((prevCharacter) =>
      prevCharacter?.id === character.id ? null : character
    );
  };


const handleChange = (e) =>{
  setSearch((prevState) =>{
    return {...prevState, [e.target.name] : e.target.value,page :1}
  })
}
const handlePagechange = (e,value) =>{
  setSearch((prevState) =>{
    return {...prevState, page : value}
  })

}

console.log(search)
  return (
    <div className="ricknmorty" style={{ margin: '20px' }}>
      <h2> </h2>

      <Box display="flex" alignItems="center" justifyContent='center' mb={3}>
        <TextField
      
          label="Search characters..."
          name='name'
          variant="outlined"
          onChange={handleChange}
        />
        <Box mx={2} />
         <Button onClick={handleSubmit} variant="contained" color="primary">
          Submit
        </Button> 
      </Box>

      <Grid container  spacing={2} columns={{xs:4,md:12,sm:4}} > 
      <Grid item md={4} sm={12} xs={12}>
      <FormControl  fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel>Gender</InputLabel>
          <Select
            name="gender"
            label="Gender"
            value={search.gender}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Genderless">Genderless</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item md={4} sm={12} xs={12}>
      <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel>Status</InputLabel>
          <Select
            name="status"
            label="Status"
            value={search.status}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Alive">Alive</MenuItem>
            <MenuItem value="Dead">Dead</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item md={4} sm={12} xs={12}>
      <FormControl fullWidth style={{ marginBottom: '10px' }}>
          <InputLabel>Species</InputLabel>
          <Select
            name="species"
            label="Species"
            value={search.species}
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="Human">Human</MenuItem>
            <MenuItem value="Alien">Alien</MenuItem>
            <MenuItem value="Animal">Animal</MenuItem>
            <MenuItem value="unknown">Unknown</MenuItem>
          </Select>
        </FormControl>
      </Grid>

    
      </Grid>

      <Grid container spacing={2}>
        {!loading ? characters.map((character) => (
          <Grid item key={character.id} xs={12} sm={6} md={3} columnSpacing={{md:3}} spacing={3} >
            <Card style={{textAlign: 'center' }}>
              <CardMedia
                component="img"
                alt={character.name}
                height="300"
                image={character.image}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {character.name}
                </Typography>
              </CardContent>
              <CardActions style={{ justifyContent: 'center' }}>
                <Button
                  onClick={() => handleToggleDetails(character)}
                  variant="outlined"
                  color="primary"
                >Details
                </Button>
              </CardActions>
            </Card>
            {expandedCharacter && expandedCharacter.id === character.id && (
              <Card style={{ textAlign: 'center' }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    Character Details
                  </Typography>
                  <Typography>Name: {character.name}</Typography>
                  <Typography>Status: {character.status}</Typography>
                  <Typography>Species: {character.species}</Typography>
                  <Typography>Gender: {character.gender}</Typography>
                </CardContent>
              </Card>
            )}
          </Grid>
        )):<Loader/>}
        
      </Grid>

      <Box display="flex" justifyContent="center">
        <div className="pagination" style={{marginTop:"20px",marginBottom:"20px"}}>
    
          <Pagination
  
            count={totalPages}
            page={search.page}
            onChange={handlePagechange}
            variant="outlined"
            shape="rounded"
            color="primary"
          />
      
        </div>
      </Box >
    </div>

  );
}

export default CharacterList;