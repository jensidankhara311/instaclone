import React , {useEffect, useState} from "react"
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Main_Header from "../Components/Main_Header";
import Top_content_section from "../Components/Top_content_section";
import Right_content_section from "../Components/Right_content_section";
import Bottom_Post_section from "../Components/Bottom_Post_section";
import Botton_Right_Section from "../Components/Botton_Right_Section";
import Main_Post_section from "../Components/Main_Post_section";
import { useDispatch , useSelector } from "react-redux";
import { getPosts } from "../redux/postSlice";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const dispatch = useDispatch()

  const posts = useSelector((state)=>state.posts) 
  const loading = useSelector((state)=> state.posts)
  const [page , setPage] = useState(1)

  console.log(posts , "allposts")

  useEffect(()=>{
    dispatch(getPosts(page))
  }  , [page])

  const handleScroll = (event) =>{
    const element = document.getElementById('mylist');
    if(element){
      if((Math.ceil(element.getBoundingClientRect().bottom) -1) === window.innerHeight) {
        console.log("bottom reached" , page)
        let a = page + 1
        setPage(a)
      }
      if ((Math.ceil(element.getBoundingClientRect().bottom)) === window.innerHeight) {
        console.log("bottom reached" , page)
        let a = page + 1
        setPage(a)
      }
    }
    
  }

  useEffect(()=>{
    document.addEventListener('scroll', handleScroll);
  })
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={inter.className}>
        <div className="main_page">
          <Main_Header />
        </div>
        {console.log(posts.loading , "posts.loading")}

      {posts.loading && page == 1 ? <h1>loading...</h1> : <div id="mylist">
        { posts.allPosts && posts.allPosts.map((post ,index)=>{
          return(
            <div key={index} className="main_post_content_section">
              <div className="wrapper">
                <div className="inner_main_post_content_section">
                  <div className="inner_heder_post_section">
                    <div className="post_header_section">
                      <Top_content_section data={post} />
                      <Right_content_section data={post} />
                    </div>
                    <Main_Post_section data={post} />
                    <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
                      <Bottom_Post_section data={post} />
                      <Botton_Right_Section data={post} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}  
        </div>
      } 

     

        
      </div>
    </>
  );
}
