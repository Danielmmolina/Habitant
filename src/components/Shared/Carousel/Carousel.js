import { View } from 'react-native'
import React, {useState} from 'react'
import CarouselSnap, { Pagination } from 'react-native-snap-carousel'
import { Image } from '@rneui/base'
import { StylesCarousel } from './CarouselStyles'
import { size } from 'lodash'

export  function Carousel(props) {
    const { images, width, height, hideDots } = props;
    
    const [dotIndex, setDotIndex] = useState(0);

    const renderItem = ({ item }) => (
        <Image source={{ uri: item }} style={{ height, width }}/>
    )

    const pagination = () => {
        return (
            <Pagination
                dotsLength={size(images)}
                activeDotIndex={dotIndex}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                containerStyle={StylesCarousel.containerDots}
                dotStyle={StylesCarousel.dot}
            />
        );
    };

  return (
    <View style= {StylesCarousel.containerCarousel}>
      <CarouselSnap
        layout='default'
        data= {images}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setDotIndex(index)}
      
      
      />

    {!hideDots && pagination()}

    </View>
  )
}