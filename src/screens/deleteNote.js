import React from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import CustomButton from '../components/customButton'

const DeleteNote = ({ note, setCurrentPage, deleteNote }) => (
  <View style={tw`flex flex-col justify-center p-8 bg-white h-full`}>
    <Text style={tw`text-2xl font-bold text-center text-gray-900`}>Hapus Note</Text>
    <Text style={tw`mt-5 text-lg text-center text-gray-700`}>Apakah Anda yakin ingin menghapus note ini?</Text>
    <View style={tw`mt-5 p-4 bg-gray-100 rounded-md`}>
      <Text style={tw`text-lg font-semibold text-gray-900`}>Judul:</Text>
      <Text style={tw`text-lg text-gray-800`}>{note.title}</Text>
      <Text style={tw`mt-2 text-lg font-semibold text-gray-900`}>Deskripsi:</Text>
      <Text style={tw`text-lg text-gray-800`}>{note.desc}</Text>
    </View>
    <View style={tw`mt-7`}>
      <CustomButton
        backgroundColor="bg-red-600"
        color="text-white"
        text="Hapus"
        width="w-full"
        onPress={() => {
          deleteNote(note.id)
          setCurrentPage('home')
        }}
      />
    </View>
    <View style={tw`mt-4`}>
      <CustomButton
        backgroundColor="bg-gray-300"
        color="text-gray-800"
        text="Batal"
        width="w-full"
        onPress={() => setCurrentPage('home')}
      />
    </View>
  </View>
)

export default DeleteNote
