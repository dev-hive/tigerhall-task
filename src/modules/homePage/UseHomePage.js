import { useQuery, gql } from "@apollo/client";
import { useState } from "react";


export default function UseHomePage(){
    const[searchValue,setSearchValue]=useState('');
    
    const CONTENT_QUERY = gql`
    {
        contentCards(filter: {limit:20, keywords: "", types: [PODCAST]}) {
        edges {
        ... on Podcast {
        name
        image {
        ...Image
        }
        categories {
        ...Category
        }
        experts {
        ...Expert
        }
        }
        }
        }
       }
       fragment Image on Image {
        uri
       }
       fragment Category on Category {
        name
       }
       fragment Expert on Expert {
        firstName
        lastName
        title
        company
       }       
`;       

    const { data, loading, error } = useQuery(CONTENT_QUERY);

    const filterData=data?.contentCards?.edges?.filter((item)=>{
        if(searchValue==''){
            return item;
        }
        else if(item?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()) || item?.categories[0]?.name?.toLowerCase()?.includes(searchValue?.toLowerCase()) || item?.categories[1]?.name?.toLowerCase()?.includes(searchValue?.toLowerCase())){
            return item;
        }
    })

    return[{filterData,setSearchValue,loading}]
}