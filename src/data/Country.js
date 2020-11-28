import {Component} from 'react'

class Country extends Component{
    constructor(props){
        super(props);
        this.state = { 
            countries : [] 
        } 
    }
    componentDidMount() {
         fetch(`https://restcountries.eu/rest/v2/all`) 
            .then(response => response.json())
            .then( countries => this.setState({countries}))
            .catch(error => {
                console.log('Error Getting Countries') ;
            })
    }
    render(){
        return (
            <select className="name" onChange={this.props.onChange} required="required">
                <option value="" selected={this.props.countryValue == "" ? 'selected' : 'ss'}>Select Country</option>
                {this.state.countries.map(country =>

                <option value={country.name}>{country.name}</option>
                
                )}
            </select>
        )
    }
}

export default Country