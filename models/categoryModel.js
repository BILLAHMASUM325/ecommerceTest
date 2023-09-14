import mongoose from 'mongoose'
import React from 'react'

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        reuired:true,
        unique:true,
    },
    slug:{
        type:String,
        lowercase: true,
    },

});

export default mongoose.model('category', categorySchema)