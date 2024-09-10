import {
  Box,
  Collage,
  Flex,
  HelpButton,
  Image,
  Mask,
  Masonry,
  MasonryV2,
  PageHeader,
  Pulsar,
  Text,
} from "gestalt";
import { useEffect, useRef, useState } from "react";

function getPins() {
  const pins = [
    {
      color: "#2b3938",
      height: 316,
      src: "https://i.ibb.co/sQzHcFY/stock9.jpg",
      width: 474,
      name: "the Hang Son Doong cave in Vietnam",
    },
    {
      color: "#8e7439",
      height: 1081,
      src: "https://i.ibb.co/zNDxPtn/stock10.jpg",
      width: 474,
      name: "La Gran Muralla, Pekín, China",
    },
    {
      color: "#698157",
      height: 711,
      src: "https://i.ibb.co/M5TdMNq/stock11.jpg",
      width: 474,
      name: "Plitvice Lakes National Park, Croatia",
    },
    {
      color: "#4e5d50",
      height: 632,
      src: "https://i.ibb.co/r0NZKrk/stock12.jpg",
      width: 474,
      name: "Ban Gioc – Detian Falls : 2 waterfalls straddling the Vietnamese and Chinese border.",
    },
    {
      color: "#6d6368",
      height: 710,
      src: "https://i.ibb.co/zmFd0Dv/stock13.jpg",
      width: 474,
      name: "Border of China and Vietnam",
    },
  ];
  const pinList = [...new Array(3)].map(() => [...pins]).flat();
  return Promise.resolve(pinList);
}

function GridComponent({ data, dataTestId }: any) {
  return (
    <Flex direction="column">
      <Image
        //dataTestId={dataTestId}
        alt={data.name}
        color={data.color}
        naturalHeight={data.height}
        naturalWidth={data.width}
        src={data.src}
      />
      <Text>{data.name}</Text>
    </Flex>
  );
}

const Images = () => {
  const [pins, setPins] = useState([]);
  const scrollContainerRef = useRef();
  const gridRef = useRef();

  useEffect(() => {
    getPins().then((startPins: any) => {
      setPins(startPins);
    });
  }, []);

  return (
    <Box
      ref={(el: any) => {
        scrollContainerRef.current = el;
      }}
      height="100%"
      marginEnd="auto"
      marginStart="auto"
      padding={4}
      width="100%"
    >
      <Pulsar /*dataTestId="pulsar"*/ />
      <HelpButton
        accessibilityLabel="Click to learn more about Pinterest"
        accessibilityPopoverLabel="Expanded information about Pinterest"
        //dataTestId="help-button"
        text="Good test"
      />
      <PageHeader /*dataTestId="masonry-header"*/ title={"Masonry header"} />
      {scrollContainerRef.current && (
        <Masonry
          //dataTestId="masonry-container"
          ref={(ref: any) => {
            gridRef.current = ref;
          }}
          columnWidth={170}
          gutterWidth={20}
          items={pins}
          layout="basicCentered"
          renderItem={({ data, itemIdx }) => (
            <GridComponent
              data={data}
              dataTestId={"masonry-container-" + itemIdx}
            />
          )}
        />
      )}
      <PageHeader
        /*dataTestId="masonryV2-header"*/ title={"Masonry V2 header"}
      />
      {scrollContainerRef.current && (
        <MasonryV2
          //dataTestId="masonryV2-container"
          ref={(ref: any) => {
            gridRef.current = ref;
          }}
          columnWidth={170}
          gutterWidth={20}
          items={pins}
          layout="basicCentered"
          renderItem={({ data, itemIdx }) => (
            <GridComponent
              data={data}
              dataTestId={"masonryV2-container-" + itemIdx}
            />
          )}
        />
      )}
      <PageHeader /*dataTestId="collage-section"*/ title={"Collage"} />
      <Collage
        //dataTestId="collage"
        columns={2}
        height={500}
        renderImage={({ index, width, height }) => {
          const images = [
            {
              color: "rgb(111, 91, 77)",
              naturalHeight: 751,
              naturalWidth: 564,
              src: "https://i.ibb.co/Lx54BCT/stock1.jpg",
            },
            {
              color: "rgb(231, 186, 176)",
              naturalHeight: 200,
              naturalWidth: 98,
              src: "https://i.ibb.co/7bQQYkX/stock2.jpg",
            },
            {
              color: "#000",
              naturalHeight: 300,
              naturalWidth: 200,
              src: "https://i.ibb.co/d0pQsJz/stock3.jpg",
            },
            {
              color: "#000",
              naturalHeight: 517,
              naturalWidth: 564,
              src: "https://i.ibb.co/SB0pXgS/stock4.jpg",
            },
            {
              color: "#000",
              naturalHeight: 806,
              naturalWidth: 564,
              src: "https://i.ibb.co/jVR29XV/stock5.jpg",
            },
            {
              color: "#000",
              naturalHeight: 200,
              naturalWidth: 200,
              src: "https://i.ibb.co/FY2MKr5/stock6.jpg",
            },
          ];
          const image = images[index] || {};
          return (
            <Mask
              /*dataTestId="collage-mask"*/ height={height}
              wash
              width={width}
            >
              <Image
                dataTestId={"collage-image-" + index}
                alt="collage image"
                color={image.color}
                fit="cover"
                naturalHeight={image.naturalHeight}
                naturalWidth={image.naturalWidth}
                src={image.src}
              />
            </Mask>
          );
        }}
        width={500}
      />
    </Box>
  );
};

export default Images;
