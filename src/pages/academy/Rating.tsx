// Rating.tsx
import React, { useState } from 'react'

type RatingProps = {
  value: number
  max?: number
  onChange?: (value: number) => void
}

const Rating: React.FC<RatingProps> = ({ value, max = 5, onChange }) => {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null)

  const handleClick = (rating: number) => {
    if (onChange) onChange(rating)
  }

  const handleMouseEnter = (rating: number) => setHoveredValue(rating)
  const handleMouseLeave = () => setHoveredValue(null)

  const renderStars = () => {
    return Array.from({ length: max }, (_, index) => {
      const rating = index + 1
      const isFilled = hoveredValue ? rating <= hoveredValue : rating <= value

      return (
        <span
          key={index}
          onClick={() => handleClick(rating)}
          onMouseEnter={() => handleMouseEnter(rating)}
          onMouseLeave={handleMouseLeave}
          style={{
            cursor: onChange ? 'pointer' : 'default',
            color: isFilled ? '#FFD700' : '#ccc' // gold color for filled stars
          }}
        >
          ★
        </span>
      )
    })
  }

  return <div>{renderStars()}</div>
}

export default Rating
