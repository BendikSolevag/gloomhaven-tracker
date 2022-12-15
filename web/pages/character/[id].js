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


export async function getServerSideProps(context){
    console.log(context)
    const character = await client.fetch(
        `*[_type == "character" && _id == ${context.params.id}]{..., relatedCharacterType->, relatedPlayer->, perkProgressionList[]{..., perkType->}}`
        );
    const user = context.query.user;
    console.log(user);
    return {
        props: {
            character,
       },
     };
}


export default function Character({ character }){

    return (
        <div />
    );
}
