import React from 'react';
import './HomePageStyle.css';
import { Container, Input, Spinner } from '@chakra-ui/react'
import Card from '../../commonComponents/card/Card';
import UseHomePage from './UseHomePage';
export default function HomePage() {
    const [{ filterData, setSearchValue, loading }] = UseHomePage();
    return (
        <div className='fullPageContainer'>
            <Container maxW='container.xl'>
                <p className='searchHeading'>Search</p>
                <Input onChange={(e) => setSearchValue(e.target.value)} placeholder='Type any keyword' size='md' className='searchBar' />
                {
                    loading ?
                    <div className='loaderContainer'>
                        <Spinner
                            thickness='10px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='blue.500'
                            size='xl'
                        />
                        </div>
                        :
                        <div className='cardsRow'>
                            {
                                filterData?.map((item) => {
                                    return (
                                        <div className='cardWidthContainer'>
                                            <Card data={item} />
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
            </Container>
        </div>
    )
}