import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Map from './Components/map'

export default function Home() {
  return (
    <div>
      <h3>URBAN TOUR</h3>

      <div className={styles.container}>
        <Map/>
        <div className={styles.sub}>
          <div className={styles.header}>
            Image , Profile
          </div>

          <div className='button'>
            <div className='row'>
              <div className='col-6'>
                Ride
              </div>
              <div className='col-6'>
                Fuel
              </div>
            </div>
          </div>

          <div className='search'>
            <div className='row'>
              Any other feature
            </div>
          </div>

        </div>
      </div>
    </div>
    
  )
}
