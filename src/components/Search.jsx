import React, {useState} from 'react'

const Search = (props) => {
    const {
        searchMovies = Function.prototype, //для того чтобы обозначить, что это некая функция , даже если она ничего не будет делать
    } = props
    const [search, setSearch] = useState('')
    const [type, setType] = useState('all')
    
    const handleKey = (event) => {
            
             if (event.key === 'Enter') {
                searchMovies(search, type)
             }     
        } 
    const handleBtn = () => {
            searchMovies(search, type)
        }
    const handleFilter = (event) => {
            setType(event.target.dataset.type)
            searchMovies(search, event.target.dataset.type)    
        };
        return   <div className="row">
        <div className="col s12">
          <div className="input-field">
            <input 
                className="validate" 
                placeholder='search' 
                type="search" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={handleKey}
            />
            <button 
                className='btn search-btn' 
                onClick={handleBtn}
            >
            Search
            </button>    
          </div>
          <div>
            <p>
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="all" 
                        onChange={handleFilter}
                        checked={type === 'all'}/>
                    <span>All</span>
                </label>
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="movie" 
                        onChange={handleFilter}
                        checked={type === 'movie'}
                        /> 
                    <span>Film</span>
                </label>
                <label>
                    <input 
                        className="with-gap" 
                        name="type" 
                        type="radio" 
                        data-type="series" 
                        onChange={handleFilter}
                        checked={type === 'series'}
                        />
                    <span>Series</span>
                </label>
            </p>
          </div>
          
        </div>
      </div>   
}

export {Search}