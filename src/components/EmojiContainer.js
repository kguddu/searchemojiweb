 import React from 'react'
 import SingleEmoji from './SingleEmoji'
 const EmojiContainer = ({list}) => {
   return (
    <div className='container'>
    {list.map((singleEmoji,idx)=>{
        return(
            // <p key={idx}>{singleEmoji.emoji}</p>
            <SingleEmoji  key={idx} singleEmoji= {singleEmoji}/>
        )
        })}

     </div>
   )
 }
 
 export default EmojiContainer;