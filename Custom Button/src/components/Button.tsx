import React from 'react'

type Buttontype={
    children:string;
    size?: "xs"|"sm"|"md"|"lg";
    variant?:"solid" | "ghost" | "outline" | "link";
    leftIcon?:React.ReactNode;
    rightIcon?:React.ReactNode;
    colors?: "green" | "red" | "blue" | "yellow";
    bg?: "green" | "red" | "blue" | "yellow";
}

/**
 * Hello I'm  Abhishek I have build this Button
 * @param param0 
 * @returns 
 */

const Button = ({
    children,
    size="sm",
    variant="solid",
    leftIcon,
    rightIcon,
    colors="blue",
    bg="red",

}: Buttontype) => {
    const getSize = (size: "xs"|"sm"|"md"|"lg")=>{
        switch(size){
            case "sm":{
                return {
                    fontSize:"25px",
                    padding:"5px"
                }
            }
            default:{
                return {
                    fontSize:"20px",
                    paddingLeft:"10px"
                }        
            }
        }
    }

    // const getVariant = (variant: "solid" | "ghost" | "outline" | "link") =>{
    //     switch(variant){
    //         default:{
    //             return{
    //                 opacity:0.4,
    //             }
    //         }
    //     }
    // }

    const getColors = (colors:"green" | "red" | "blue" | "yellow") =>{
        switch(colors){
            default:{
                return {
                    color:"white",
                    backgroundColor:"red"
                }
            }
        }
    }
    const getBg = (bg:"green" | "red" | "blue" | "yellow") =>{
        switch(bg){
            case "red":{
                return {
                    color:"black",
                    backgroundColor:"red"
                }
            }
            case "green":{
                return {
                    color:"black",
                    backgroundColor:"green"
                }
            }
            default:{
                return {
                    color:"black",
                    backgroundColor:"red"
                }
            }
        }
    }
  return (
    <button style={
        {...getSize(size), 
        // ...getVariant(variant), 
        ...getColors(colors), 
        ...getBg(bg),
        borderRadius:"5px"
        }}>
    {leftIcon}
    {children}
    {rightIcon}
    </button>
  )
}

export default Button