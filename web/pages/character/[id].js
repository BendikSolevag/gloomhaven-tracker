// imports : style ?, Link ?
//
//
// getServerSideProps( context ){
//      context.params.id = character id
//      context.query =  user id
//      api call to sanity get user and character
//      validate whether user owns character
//      return {
//          props: {
//              user_doc
//              character_doc
//          },
//      };
//  }
//
//
//  export default function Character({ user_doc, character_doc }){
//
//
//      return ...
//  }

import client from "../helpers/sanityClient";

export async function getServerSideProps(context) {
    const character = await client.fetch(
        `*[_type == "character"  && _id == "${context.params.id}"]{..., relatedCharacterType->, relatedPlayer->, perkProgressionList[]{..., perkType->}}`
    );

    return {
        props: {
            character,
        },
    };
}

export default function Character({ character }) {
//    console.log(character);
    console.log(character[0].relatedPlayer.name);
    return(
         <h3 className="font-karla">
            Name: {character[0].name}
            Owner: {character[0].relatedPlayer.name}
            Class: {character[0].relatedCharacterType.name}
         </h3>);
}
