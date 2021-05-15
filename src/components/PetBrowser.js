import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">
      
      {this.props.pets.map(petObj => <Pet key={petObj.id} pet={petObj} onAdoptPet={this.props.onAdoptPet}/>)}
    </div>
  }
}

export default PetBrowser

/**
 * The pets from the api have been fetched, sent to the state via setState, and passed a props to <PetBrowser />
 * 
 * <PetBrowser /> now has access to the pets retrived from the api. The purpose of this component is to crete a single component for all of the pets retrieved. To accomplish this we map thru our pets arary of object from the parent component passed as props and give it an arg called pet (since we want a single pet at a time) amd return a build for our <Pet /> make a prop called pet and give our <Pet /> that pet from our map
 * 
 * Our petObj should be going into our <Pet /> which should be rendering pet blocks onto the broswers. 
 * 
 * 
 */