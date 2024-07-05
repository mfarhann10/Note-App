import React from 'react'
import { FlatList, View, Text } from 'react-native'
import tw from 'twrnc'
import CustomButton from '../components/customButton'

const NoteCard = ({ item, setCurrentPage, setEditingNote, setDeletingNote }) => (
  <View style={tw`p-3 my-4 border-2 border-gray-300 rounded-md`}>
    <Text style={tw`font-semibold text-lg text-gray-900 mb-2`}>{item.title}</Text>
    <Text>{item.desc}</Text>
    <View style={tw`mt-4 flex-row justify-evenly`}>
      <CustomButton
        backgroundColor="bg-yellow-500"
        color="text-gray-900"
        text="Ubah"
        fontSize="text-sm"
        width="w-24"
        onPress={() => {
          setEditingNote(item)
          setCurrentPage('edit')
        }}
      />
      <CustomButton
        backgroundColor="bg-red-600"
        color="text-white"
        text="Hapus"
        fontSize="text-sm"
        width="w-24"
        onPress={() => {
          setDeletingNote(item)
          setCurrentPage('delete')
        }}
      />
    </View>
  </View>
)

const Home = ({ noteList, setCurrentPage, setEditingNote, setDeletingNote }) => (
  <View style={tw`flex-1 justify-center p-5`}>
    <CustomButton
      backgroundColor="bg-gray-300"
      color="text-gray-800"
      text="Tambahkan Note"
      width="w-full"
      onPress={() => {
        setCurrentPage('add')
      }}
    />
    <FlatList
      showsVerticalScrollIndicator={false}
      data={noteList}
      renderItem={({ item }) => (
        <NoteCard item={item} setCurrentPage={setCurrentPage} setEditingNote={setEditingNote} setDeletingNote={setDeletingNote} />
      )}
      keyExtractor={(item) => item.id}
    />
  </View>
)

export default Home
