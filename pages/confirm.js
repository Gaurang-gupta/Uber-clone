import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import Map from './components/Map'
import { useRouter } from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'
const Confirm = () => {
    const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);
    const [pickupCoordinates, setPickUpCoordinates] = useState([0, 0]);
    const { query } = useRouter();
    const getDropoffCoordinates = async (location) => {
        const dropoff = location;
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
            new URLSearchParams({
                access_token: "pk.eyJ1IjoiZ2F1cmFuZ2d1cHRhIiwiYSI6ImNrd3p2ZWpmajBtZ28ycGw0dnA3OGU0bmEifQ.vLKG22BX7k1MGa9jz1poqg",
                limit: 1
            })
        )
            .then(response => response.json())
            .then(data => {
                setDropoffCoordinates(data.features[0].center)
            })
    }

    const getPickupCoordinates = (location) => {
        if (location && location.length > 0) {
            const pickup = location;
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
                new URLSearchParams({
                    access_token: "pk.eyJ1IjoiZ2F1cmFuZ2d1cHRhIiwiYSI6ImNrd3p2ZWpmajBtZ28ycGw0dnA3OGU0bmEifQ.vLKG22BX7k1MGa9jz1poqg",
                    limit: 1
                })
            )
                .then(response => response.json())
                .then(data => {
                    setPickUpCoordinates(data.features[0].center)
                })
        }
    }

    useEffect(() => {
        getPickupCoordinates(query.dropoff);
        getDropoffCoordinates(query.pickup);
    }, [query.pickup, query.dropoff])


    return (
        <Wrapper>
            <Link href="/search">
                <ButtonContainer>
                    <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
                </ButtonContainer>
            </Link>

            <Map
                dropoffCoordinates={dropoffCoordinates}
                pickupCoordinates={pickupCoordinates}
            />
            <RideContainer>
                <RideSelector
                    dropoffCoordinates={dropoffCoordinates}
                    pickupCoordinates={pickupCoordinates}
                />
                <ConfirmButtonContainer>
                    <ConfirmButton>
                        Confirm uberX
                    </ConfirmButton>
                </ConfirmButtonContainer>
            </RideContainer>
        </Wrapper>
    )
}

export default Confirm

const ButtonContainer = tw.div`
    rounded-full absolute top-4 left-4 z-10 bg-white shadow-md hover:cursor-pointer
`

const BackButton = tw.img`
    h-full object-contain
`

const ConfirmButtonContainer = tw.div`
    border-t-2
`

const ConfirmButton = tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl
`

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`

const Wrapper = tw.div`
    flex h-screen flex-col relative
`