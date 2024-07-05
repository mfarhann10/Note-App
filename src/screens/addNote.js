import React, { useState } from 'react'
import { View, Text } from 'react-native'
import tw from 'twrnc'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'

const AddNote = ({ setCurrentPage, addNote }) => {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

        return (
        <View style={tw`flex flex-col justify-center p-5`}>
            <Text style={tw`mt-5 text-2xl font-bold text-center text-gray-900`}>Tambahkan Note</Text>
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
                onPress={() => {
                    addNote(title, desc)
                    setCurrentPage('home')
                  }}
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
    
export default AddNote