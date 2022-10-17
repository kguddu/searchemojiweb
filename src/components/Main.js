import {useState,useEffect} from 'react'
import emojiList from '../emojiList'
import EmojiContainer from './EmojiContainer';
import sorry from '../image/sorry.png'

 
 const Main=()=>{
    const [list,setList]=useState(emojiList);
    const [keyword,setKeyword]=useState("");

    const typed=(e)=>{
        const value=e.target.value;
        setKeyword(value)
    }
          useEffect(_=>{
            //filter based on description,category,alias
            
           const filterList= emojiList.filter(singleEmoji=>{

            if(singleEmoji.emoji === keyword){
                return true;
            }
                if(singleEmoji.description.startsWith(keyword)){
                    return true;
                }
                if(singleEmoji.category.startsWith(keyword)){
                    return true;
                }
                if(singleEmoji.aliases.some(e=>e.startsWith(keyword))){
                    return true;
                }
                return false;
            })
            
            setList(filterList)
        
           },[keyword])
           
    return(
        <div className='main'>

           <div className='search'>
            <input type="text" placeholder="filter 🔎" onKeyUp={typed}/>
            {keyword === '' ? false: ( <h2>{keyword}</h2>)}
            </div>
            {list.length===0 ? (
                
                <img src={sorry}  alt='not found'/>
                
               
            ):(
            
            <EmojiContainer list={list}/>
            )}

        </div>
    )
 }
 export default Main;