import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { Images } from "../resources/Images";
import { Image } from "expo-image";

const Carousel: React.FunctionComponent<{}> = () => {
  const slides: any = Images.carousel;
  let [count, setCount] = useState<number>(1);
  let timer: any;

  const getImage = () => {
    timer = setTimeout(() => {
      if (count === 1) {
        setCount(count + 1);
      } else if (count === 2) {
        setCount(count + 1);
      } else if (count === 3) {
        setCount(count + 1);
      } else if (count === 4) {
        setCount((count = 1));
      }
    }, 4000);
  };

  useEffect(() => {
    getImage();
    return () => clearTimeout(timer);
  });

  return (
    <View>
      <View
        style={{
          width: "95%",
          height: 150,
          alignSelf: "center",
          backgroundColor: "green",
          borderRadius: 20,
          overflow: "hidden",
          flexDirection: "row",
        }}>
        {(() => {
          switch (count) {
            case 1:
              return (
                <>
                  <Image
                    source={slides[0].image}
                    style={{ width: "100%", height: 150 }}
                    transition={1000}
                  />
                </>
              );
            case 2:
              return (
                <>
                  <Image
                    source={slides[1].image}
                    style={{ width: "100%", height: 150 }}
                    transition={1000}
                  />
                </>
              );
            case 3:
              return (
                <>
                  <Image
                    source={slides[2].image}
                    style={{ width: "100%", height: 150 }}
                    transition={1000}
                  />
                </>
              );
            case 4:
              return (
                <>
                  <Image
                    source={slides[3].image}
                    style={{ width: "100%", height: 150 }}
                    transition={1000}
                  />
                </>
              );
            default:
              return null;
          }
        })()}
      </View>
    </View>
  );
};

export default Carousel;
