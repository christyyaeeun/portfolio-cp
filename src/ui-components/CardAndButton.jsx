/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import {
  getOverrideProps,
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function CardAndButton(props) {
  const { Card, overrides, ...rest } = props;
  const cardAndButtonOnClick = useNavigateAction({
    type: "url",
    url: `${"http://christy-park.com/"}${Card?.id}`,
  });
  return (
    <Flex
      gap="0"
      direction="column"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      onClick={() => {
        cardAndButtonOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "CardAndButton")}
    >
      <Image
        width="355px"
        height="211px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={Card?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="10px"
        direction="column"
        width="355px"
        height="140px"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="10px"
          direction="column"
          height="80px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Text Group")}
        >
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="500"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
            height="22px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Card?.title}
            {...getOverrideProps(overrides, "Title")}
          ></Text>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="300"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
            height="37px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={Card?.description}
            {...getOverrideProps(overrides, "Description")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="row"
          width="109px"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="6px 10px 6px 10px"
          backgroundColor="rgba(245,245,245,1)"
          {...getOverrideProps(overrides, "Button")}
        ></Flex>
      </Flex>
    </Flex>
  );
}
