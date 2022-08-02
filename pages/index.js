import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Map from './Components/Map'

export default function Home() {
  return (
    <div>
      <h3>URBAN TOUR</h3>

      <div className={styles.container}>
        <Map/>
        <div className={styles.sub}>
          <div className='row'>
            <div className="col-6 text-center mx-auto">
              <div className='logo'>
                <Image src='/logo.png' width={120} height={120}/>
              </div>  
            </div>
            <div className="col-6 text-center mx-auto">
                <h3>Profile</h3>
            </div>
          </div>
          
          <div className='button'>
            <div className='row'>
              <div className='col-6 text-center mx-auto d-grid gap-2'>
                <button type="button" className="btn btn-outline-primary">Ride</button>
              </div>
              <div className='col-6 text-center mx-auto d-grid gap-2'>
                <button type="button" className="btn btn-outline-danger">Fuel</button>
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
