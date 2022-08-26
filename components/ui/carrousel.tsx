import { FC } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import Slider, { Settings } from 'react-slick'

const setting: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

type Props = {
  data: {
    id: string
    name: string
    title: string
  }[]
}

export const CarrouselCom: FC<Props> = ({ data }) => {
  return (
    <>
      <Slider {...setting}>
        {data.map((slide) => (
          <div key={slide.id}>
            <div
              className="carrousel_wrapper"
              style={{
                background: `url(/images/arts/${slide.name}) no-repeat`,
              }}
            >
              <div>{slide.title}</div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  )
}
