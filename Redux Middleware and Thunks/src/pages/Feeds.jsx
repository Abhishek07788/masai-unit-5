import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeedApi } from "../Feeds/feed.action";

const Feeds = () => {
  const {loading,error,data} = useSelector((store)=> store.feeds)
 
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getFeedApi())
  },[])

  if(loading){
    return <h1>Loading...</h1>
  }

  if(error){
    return <h1>Error...</h1>
  }

  return (
    <div>
      <h1>Feeds</h1>
      {data.map((post) => (
        <ul key={post.id}>
          <li>{post.message}</li>
        </ul>
      ))}
    </div>
  );
};

export default Feeds;
