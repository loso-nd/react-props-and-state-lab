import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  // Fetch all of our pets, URL is based on the section of the filter. where the defautl is all pets 
  onFindPetsClick = () => {
    console.log('Click Me') //Check react app in browser to see if props has been passed
    let url = '' //setting this to an empty string 
    this.state.filters.type === 'all' ? url = '/api/pets' : url = `/api/pets?type=${this.state.filters.type}`
    fetch (url)
    .then(resp => resp.json())
    .then(jsonPets => {
      //console.log(pets)
      this.setState({pets: jsonPets})
    })
  }

  onChangeType = (e) => {
    console.log(e.target.value)
    this.setState({filters: { ...this.state.filters, type: e.target.value}})
  }

  onAdoptPet = (id) => {
    console.log(id)
    let updatedPets = this.state.pets.map(pet =>{
      return pet.id === id ? {...pet, isAdopted:true} : pet
      //pet.id is equal to the id passed in as an arg. which is associated 
    })
    this.setState({pets:updatedPets})
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onFindPetsClick={this.onFindPetsClick}
                        onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
