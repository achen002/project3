import { render } from '@testing-library/react'
import React, {useState} from 'react'



const SearchBar= (props) =>{
    const [term, setTerm] = useState('')
    //console.log(props.onSubmit)

    const onFormSubmit = (event) => {
        event.preventDefault();
       // console.log('hello')
        props.onSubmit(term)

    }

    const onInputChange = (event) => {
        //console.log(event.target.value)
        setTerm(event.target.value)
        //console.log(term)
    }


    return(
        <div className="ui segment">
            
                <form className="ui form" onSubmit={(e) =>onFormSubmit(e)}>
                    <div className="field">
                        <label> Search for an image:
                            <input type="text" value={term} onChange={(e) =>onInputChange(e)}/>
                        </label>
                        
                    </div>
                
                </form>
            
        </div>

    )
}


export default SearchBar;