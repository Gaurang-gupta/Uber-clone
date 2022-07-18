import { useEffect, useState } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from 'mapbox-gl'
import { useRouter } from "next/router"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2F1cmFuZ2d1cHRhIiwiYSI6ImNrd3p2ZWpmajBtZ28ycGw0dnA3OGU0bmEifQ.vLKG22BX7k1MGa9jz1poqg'

const Map = ({ pickupCoordinates, dropoffCoordinates }) => {


    useEffect(() => {
        const plot = async () => {
            const map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
                center: [-99.29011, 39.39172],
                zoom: 3
            })
            if (pickupCoordinates && pickupCoordinates.length == 2) {
                // setPickUpCoordinates(pickupCoordinates)
                addToMap(map, pickupCoordinates)
            }
            if (dropoffCoordinates && dropoffCoordinates.length == 2) {
                // setDropoffCoordinates(dropoffCoordinates)
                addToMap(map, dropoffCoordinates)
            }

            if (dropoffCoordinates && pickupCoordinates && dropoffCoordinates.length && pickupCoordinates.length) {
                map.fitBounds([
                    dropoffCoordinates, // southwestern corner of the bounds
                    pickupCoordinates // northeastern corner of the bounds
                ], {
                    padding: 50
                });
            }
        }

        plot()


    }, [JSON.stringify(pickupCoordinates), JSON.stringify(dropoffCoordinates)])

    const addToMap = async (map, point) => {
        if (point && point.length == 2) {
            const marker1 = new mapboxgl.Marker()
                .setLngLat(point)
                .addTo(map);
        }
    }

    return (
        <Wrapper id="map"></Wrapper>
    )
}

const Wrapper = tw.div`
    flex-1 h-1/2
`

export default Map