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
export default function Crd(props) {
  const { project, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    type: "url",
    url: `${"http://christy-park.com/"}${project?.id}`,
  });
  return (
    <View
      width="429px"
      height="384px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Crd")}
    >
      <Flex
        gap="0"
        position="absolute"
        top="91.41%"
        bottom="0%"
        left="0%"
        right="74.59%"
        direction="row"
        width="109px"
        justifyContent="center"
        alignItems="center"
        padding="6px 10px 6px 10px"
        backgroundColor="rgba(245,245,245,1)"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Flex>
      <Flex
        gap="8px"
        position="absolute"
        top="63.8%"
        bottom="12.24%"
        left="1.86%"
        right="1.63%"
        direction="column"
        width="414px"
        height="92px"
        padding="5px 5px 5px 5px"
        {...getOverrideProps(overrides, "Text")}
      >
        <Text
          fontFamily="Inter"
          fontSize="16px"
          fontWeight="700"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="center"
          width="419px"
          height="32px"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={project?.title}
          {...getOverrideProps(overrides, "Title")}
        ></Text>
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,0,0,1)"
          lineHeight="21px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          height="39px"
          shrink="0"
          alignSelf="stretch"
          objectFit="cover"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={project?.description}
          {...getOverrideProps(overrides, "Description mmm")}
        ></Text>
      </Flex>
      <Image
        position="absolute"
        top="0%"
        bottom="36.2%"
        height="63.8%"
        left="0%"
        right="0%"
        width="100%"
        padding="0px 0px 0px 0px"
        src={project?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
    </View>
  );
}
