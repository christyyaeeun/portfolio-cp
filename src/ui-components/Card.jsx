/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Card(props) {
  const { Card, overrides, ...rest } = props;
  return (
    <Flex
      gap="6px"
      direction="column"
      height="388px"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "Card")}
    >
      <Image
        width="368px"
        height="239px"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        src={Card?.image_url}
        {...getOverrideProps(overrides, "image")}
      ></Image>
      <Flex
        padding="0px 0px 0px 0px"
        width="368px"
        height="142px"
        shrink="0"
        position="relative"
        {...getOverrideProps(overrides, "Card Content")}
      >
        <Flex
          gap="4px"
          position="absolute"
          top="0px"
          left="0px"
          direction="column"
          width="368px"
          height="98px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Card Area")}
        >
          <Flex
            gap="6px"
            direction="column"
            width="368px"
            shrink="0"
            position="relative"
            padding="6px 8px 6px 8px"
            {...getOverrideProps(overrides, "Card Text")}
          >
            <Text
              fontFamily="Inter"
              fontSize="18px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="center"
              width="358px"
              height="32px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={Card?.title}
              {...getOverrideProps(overrides, "Classic Long Sleeve T-Shirt")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              width="354px"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={Card?.description}
              {...getOverrideProps(
                overrides,
                "Information about this product j"
              )}
            ></Text>
          </Flex>
        </Flex>
        <View
          width="109px"
          height="38px"
          position="absolute"
          top="104px"
          left="0px"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Btn")}
        >
          <Flex
            gap="0"
            position="absolute"
            top="10.53%"
            bottom="0%"
            left="0%"
            right="0%"
            direction="row"
            width="109px"
            height="34px"
            justifyContent="center"
            alignItems="center"
            padding="6px 0px 6px 0px"
            backgroundColor="rgba(245,245,245,1)"
            {...getOverrideProps(overrides, "Button")}
          ></Flex>
        </View>
      </Flex>
    </Flex>
  );
}
