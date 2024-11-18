import Image from 'next/image'
import React from 'react'
import styles from './recipesOption.module.css'

function RecipiesOption({ title, image, rating }) {
  return (
    <div className='relative w-full h-full'>
      {/* Image */}
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        className='rounded-2xl'
      />

      {/* Overlay */}
      <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75'></div>

      {/* Star Rating */}
      <div className='absolute top-3 left-3 flex items-center space-x-1'>
        <span className='text-white'>⭐</span>
        <span className='text-white font-medium'>{rating}</span>
      </div>

      {/* Title */}
      <div className={`absolute w-full bottom-0 text-white p-6 ${styles.blur_bg}`}>
        <label className='text-lg font-semibold'>{title}</label>
      </div>
    </div>
  )
}

export default RecipiesOption;
