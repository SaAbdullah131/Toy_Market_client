import React, { useContext, useEffect, useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../Providers/AuthProvider';
import SingleCard from './SingleCard/SingleCard';

const Category = () => {
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [allToy, setAllToy] = useState([]);

    useEffect(() => {
        const loadedData = async () => {
            try {
                const res = await fetch(`https://toy-market-place-server-blue.vercel.app/alltoy/Taddy%20Bears`)
                const data = await res.json();
                setAllToy(data);
                setLoading(false);
            }
            catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        loadedData();
    }, []);

    const loadedData = async (subCategory) => {
        try {
            const res = await fetch(`https://toy-market-place-server-blue.vercel.app/alltoy/${subCategory}`)
            const data = await res.json();
            setAllToy(data);
            setLoading(false);
        }
        catch (error) {
            console.error('Error loading data:', error);
        }
    }
    const selected = index => {
        if (index == 0) {
            setLoading(true);
            loadedData('Taddy Bears');
        } else if (index == 1) {
            setLoading(true);
            loadedData('Horses');
        }
        else{
            setLoading(true);
            loadedData('Dogs');
        }
    }
    const cards = <>
    <div className='flex flex-wrap gap-5 my-4 justify-center items-center '>
        {
            allToy.map(toy => <SingleCard
                key={toy._id}
                allToy={toy}
                user={user}
            ></SingleCard>)
        }
   </div>
</>

    return (
        <div className='mt-8'>
            <div>
                <h2 className='text-center text-4xl  font-semibold text-black'>Shop by category</h2>
            </div>
            <div>
                <Tabs defaultIndex={0} onSelect={(index) => {
                    return selected(index);
                }}>
                    <TabList>
                        <Tab >Teddy Bear Toys </Tab>
                        <Tab>Horse Toys</Tab>
                        <Tab>Dog Toys</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            loading ?
                                <button className="btn text-primary loading">loading</button> :
                                cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ?
                                <button className="btn text-primary loading">loading</button>
                                : cards
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            loading ?
                                <button className="btn text-primary loading">loading</button>
                                : cards
                        }
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Category;