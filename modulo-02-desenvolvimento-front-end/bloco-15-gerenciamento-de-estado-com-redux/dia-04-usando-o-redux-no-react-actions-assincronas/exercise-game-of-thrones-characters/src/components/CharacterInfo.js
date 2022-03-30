import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CharacterInfo extends React.Component {
  render() {

    // faça a desestruturação das props aqui

    // if (!loading && character) {
    //   return (
    //     <ul>
    //       <li>Name: {character.name}</li>
    //       <li>Gender: {character.gender}</li>
    //       <li>Aliases: {character.aliases.map((alias, index) => <p key={`${alias}-${index}`}>{alias}</p>)}</li>
    //       <li>Books: {character.books.map((book, index) => <p key={`${book}-${index}`}>{book}</p>)}</li>
    //     </ul>
    //   )
    // }
    // if (error) { return <div>{error}</div>; }
    // if (loading) { return <div>Loading...</div>; }
    return <div>Type a character name and click to search!</div>;
  }
};

CharacterInfo.propTypes = {
  character: PropTypes.shape({}),
}

const mapStateToProps = (state) => ({
  character: state.reducer.character,
});

export default connect(mapStateToProps)(CharacterInfo);
