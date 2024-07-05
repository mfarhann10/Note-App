import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import tw from 'twrnc'

const CustomButton = ({
  backgroundColor = 'bg-gray-200', // default background color
  color = 'text-gray-800',        // default text color
  text,
  onPress,
  fontSize = 'text-base',         // default font size
  width = 'w-30',                 // default width
}) => {
  return (
    <TouchableOpacity
      style={tw`${backgroundColor} ${width} py-2 items-center`}
      onPress={onPress}
    >
      <Text style={tw`${color} ${fontSize} font-bold`}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton
