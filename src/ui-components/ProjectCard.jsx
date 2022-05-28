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
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function ProjectCard(props) {
  const { Card, overrides, ...rest } = props;
  const projectCardOnClick = useNavigateAction({
    type: "url",
    url: `${"http://christy-park.com/"}${Card?.id}`,
  });
  return (
    <View
      width="355px"
      height="351px"
      position="relative"
      padding="0px 0px 0px 0px"
      onClick={() => {
        projectCardOnClick();
      }}
      {...rest}
      {...getOverrideProps(overrides, "ProjectCard")}
    >
      <Flex
        gap="16px"
        position="absolute"
        top="62.68%"
        bottom="14.81%"
        left="0%"
        right="0%"
        direction="column"
        width="355px"
        height="79px"
        padding="10px 16px 10px 16px"
        {...getOverrideProps(overrides, "Card Area")}
      >
        <Flex
          gap="12px"
          direction="column"
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
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="20px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="center"
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
            fontWeight="400"
            color="rgba(13,26,38,1)"
            lineHeight="24px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            letterSpacing="0.01px"
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
      </Flex>
      <Image
        position="absolute"
        top="0%"
        bottom="38.46%"
        height="61.54%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src={Card?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        gap="0"
        position="absolute"
        top="86.61%"
        bottom="3.99%"
        left="2.25%"
        right="67.04%"
        direction="row"
        width="109px"
        justifyContent="center"
        alignItems="center"
        padding="6px 12px 6px 12px"
        backgroundColor="rgba(245,245,245,1)"
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
    </View>
  );
}
