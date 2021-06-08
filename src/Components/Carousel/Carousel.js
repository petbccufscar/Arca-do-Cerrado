import React, { Component } from 'react'
import './Carousel.css'
import 'pure-react-carousel/dist/react-carousel.es.css'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
  Dot
} from 'pure-react-carousel'
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'

import { Images, Colors } from '../../Themes'

const images = [
  {
    image: Images.first.default
  },
  {
    image: Images.second.default
  },
  {
    image: Images.third.default
  }
]

class CarouselHome extends Component {
  constructor (props) {
    super(props)

    const width = window.innerWidth
    const height = window.innerHeight / 1.9

    this.state = { width, height }
  }

  render () {
    return (
      <div style={{ height: '100%', width: '100%', marginTop: 80 }}>
        <CarouselProvider
          naturalSlideWidth={this.state.width}
          naturalSlideHeight={this.state.height}
          totalSlides={images.length}
          interval={5000}
          isPlaying={true}
        >
          <div style={{ height: '100%' }}>
            <Slider style={{ height: '100%' }}>
              {images.map((image, index) => (
                <Slide index={index} key={index} style={{ height: '100%' }}>
                  <Image
                    hasMasterSpinner={true}
                    src={image.image}
                    alt='description'
                    style={{
                      objectFit: 'cover'
                    }}
                  />
                </Slide>
              ))}
            </Slider>
            <ButtonBack
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                marginTop: -80,
                border: 'none',
                backgroundColor: 'transparent',
                outline: 0
              }}
            >
              <FaAngleLeft size={30} color={Colors.white} />
            </ButtonBack>
            <ButtonNext
              style={{
                position: 'absolute',
                top: '50%',
                right: 0,
                marginTop: -80,
                border: 'none',
                backgroundColor: 'transparent',
                outline: 0
              }}
            >
              <FaAngleRight size={30} color={Colors.white} />
            </ButtonNext>
          </div>
          <div
            style={{
              position: 'absolute',
              alignItems: 'center',
              width: '100%',
              marginTop: -32,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center'
            }}
          >
            {images.map((image, index) => (
              <Dot key={index} slide={index} style={{ borderRadius: '30%' }} />
            ))}
          </div>
        </CarouselProvider>
        <div
          style={{
            position: 'absolute',
            alignItems: 'center',
            width: '100%',
            paddingTop: '4px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            top: '30%',
            color: 'white',
            fontWeight: 'bold',
            fontSize: 50
          }}
        >
          A ARCA DO CERRADO
        </div>
        <div
          style={{
            position: 'absolute',
            alignItems: 'center',
            width: '100%',
            paddingTop: '4px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            top: '40%',
            color: 'white',
            fontSize: 30
          }}
        >
          Uma visita pelo cerrado!
        </div>
      </div>
    )
  }
}

export default CarouselHome
