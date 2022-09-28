
import React, {useState, useEffect} from "react";
import {Movies} from "../components/Movies";
import { Search } from "../components/Search";
import {Preloader} from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY

function Main() {
    const [movies, setMovies] = useState([])
    const [loading, setloading] = useState(true)

    
    const searchMovies = (str, type = 'all') => {
        setloading(true)
        
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
        .then((res )=>res.json()) 
        .then((data) => {
            setloading(false)
            setMovies(data.Search)
            })
        .catch((err) => {
            console.error(err);
            setloading(false) //если чтото пошло не так прекращаем статус загрузки
        });
    }

    useEffect(() => {
        fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=terminator`)
        .then((res) =>res.json())
        .then((data) => {
            setloading(false)
            setMovies(data.Search)
        })
        .catch((err) => {
             console.error(err);
             setloading(false)
        })
    }, [])

        return ( 
            <main className="container content">
            <Search searchMovies={searchMovies} />
            
            {loading ? <Preloader /> : <Movies movies={movies} />}   
        </main>
        )
    }

export {Main}