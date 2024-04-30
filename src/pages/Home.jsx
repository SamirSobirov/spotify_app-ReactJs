import { useEffect, useState } from "react"
import MultiCard from "../components/MultiCard"
import Recomendation from "../components/Recomendation"
import Layout from "../layout/Layout"
import axios from "axios"
import { Link } from "react-router-dom"


function Home() {
    const token = localStorage.getItem('token')
    const URL = import.meta.env.VITE_API_URL
    const [playlists, setPlaylists] = useState([])
    const [user, setUser] = useState({})
    const [recomendations, setRecomendations] = useState([])


    useEffect(() => {
        axios.get(URL + '/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setPlaylists(res.data.items)
            })

        axios.get(URL + '/me', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setUser(res.data)
            })
        axios.get(URL + '/browse/featured-playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res.data);
                setRecomendations(res.data.playlists.items)
            })
    }, [])

    return (
        <main className='pl-[345px] mr-10 mt-6 text-white'>
            <section className='today-rec'>
                <h1 className='text-4xl mb-6'>Доброе утро</h1>

                <div className='w-full flex gap-y-5 gap-x-7 flex-wrap'>
                    {
                        playlists.map(item => (
                            <Link to={'/playlist/' + item.id}>
                                <Recomendation
                                    key={item.id}
                                    img={item.images ? item.images[0].url : '/images/playlist-card.png'}
                                    title={item.name}
                                />
                            </Link>
                        ))
                    }
                </div>
            </section>

            <section className='might-like mt-12 text-white'>
                <h2 className='text-3xl mb-6'>Специально для тебя, {user.display_name}</h2>

                <div className='might-like-box w-full flex justify-start flex-wrap '>
                    {
                        recomendations.map(item => (
                            <Link to={'/playlist/' + item.id}>
                                <MultiCard
                                    key={item.id}
                                    img_src={item.images ? item.images[0].url : '/images/playlist-card.png'}
                                    title={item.name}
                                    subtitle={item.owner.display_name}
                                />
                            </Link>
                        ))
                    }
                </div>
            </section>
        </main>
    )
}

export default Home





// function Login() {
//     const CLIENT_ID = import.meta.env.VITE_CLIENT_ID
//     const AUTH_ENDPOINT = import.meta.env.VITE_AUTH_ENDPOINT
//     const REDIRECT_URL = import.meta.env.VITE_REDIRECT_URL
//     const RESPONSE_TYPE = import.meta.env.VITE_RESPONSE_TYPE

//     let url = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URL}&response_type=${RESPONSE_TYPE}&scope=playlist-modify-public`
//     return ( 
//         <main className=" w-screen h-screen flex items-center justify-center">
//             <section className="flex items-center flex-col gap-6 w-[400px] text-white">
//                 <img className="w-[50%] object-contain" src="/icons/big-logo.svg" alt="logo" />
//                 <h2 className="text-3xl">Войти с помощью Spotify</h2>
//                 <a href={url}>
//                     <button className="text-black font-medium bg-[#1cd55f] rounded px-5 py-2 transition duration-300 ease-in-out hover:bg-[#1cd541] hover:scale-[1.05]">Login with Spotify</button>
//                 </a>
//             </section>
//         </main>
//      );
// }

// export default Login;


