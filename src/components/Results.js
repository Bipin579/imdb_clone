import React from 'react'
import Card from './Card'

const Results = ({ results }) => {
    
  return (
      <div className='sm:grid sm:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 xxl:grid-cols-5 max-w-5xl mx-auto py-4'>
          {results && results.map(res => (
              <Card key={res.id} result={res} />
          ))}
    </div>
  )
}

export default Results