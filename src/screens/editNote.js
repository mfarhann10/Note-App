import React, { useState } from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import CustomTextInput from '../components/customTextInput'
import CustomButton from '../components/customButton'

const EditNote = ({ note, setCurrentPage, updateNote }) => {
  const [title, setTitle] = useState(note.title)
  const [desc, setDesc] = useState(note.desc)

  const handleSave = () => {
    updateNote(note.id, title, desc)
    setCurrentPage('home')
  }

  return (
    <View style={tw`flex flex-col justify-center p-5`}>
      <Text style={tw`mt-5 text-2xl font-bold text-center text-gray-900`}>Ubah Note</Text>
      <CustomTextInput
        text={title}
        onChange={setTitle}
        label="Judul"
        placeholder="Judul"
        numberOfLines={1}
        multiline={false}
      />
      <CustomTextInput
        text={desc}
        onChange={setDesc}
        label="Deskripsi"
        placeholder="Deskripsi"
        multiline
        numberOfLines={4}
      />
      <View style={tw`mt-7`}>
        <CustomButton
          backgroundColor="bg-teal-700"
          color="text-white"
          text="Simpan"
          width="w-full"
          onPress={handleSave}
        />
      </View>
      <View style={tw`mt-7`}>
        <CustomButton
          backgroundColor="bg-gray-300"
          color="text-gray-800"
          text="Kembali ke Home"
          width="w-full"
          onPress={() => setCurrentPage('home')}
        />
      </View>
    </View>
  )
}

export default EditNote
