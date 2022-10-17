import React,{useState,useEffect} from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard';

const SingleEmoji = ({singleEmoji}) => {
  const [isCopied,setCopied]=useState(false);
  useEffect(_=>{
    if(isCopied){
      setTimeout(_=>{
        setCopied(false)
      },1500)
    }
  },[isCopied])
  return (
    <CopyToClipboard text={singleEmoji.emoji} onCopy={_=>setCopied(true)}>
    <div className={`item ${isCopied ? 'copied' :""}`}>
    <p className='emoji'>{isCopied ? '✅' :singleEmoji.emoji}</p>
    <p>{singleEmoji.description}</p>
    </div>
    </CopyToClipboard>
  )   
}

export default SingleEmoji