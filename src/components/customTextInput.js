import React from 'react'
import { TextInput, Text, View } from 'react-native'
import tw from 'twrnc'

const CustomTextInput = ({
  text,
  onChange,
  label,
  multiline = false,
  numberOfLines = 1,
}) => {
  return (
    <View style={tw`mt-5`}>
      <Text style={tw`mb-2 text-lg`}>{label}</Text>
      <TextInput
        multiline={multiline}
        numberOfLines={numberOfLines}
        style={tw`border-2 border-gray-300 p-3 rounded-md`}
        placeholder={label}
        onChangeText={onChange}
        defaultValue={text}
      />
    </View>
  )
}

export default CustomTextInput
