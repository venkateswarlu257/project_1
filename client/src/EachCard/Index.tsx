import React from 'react'
import "./Index.css"

interface Product {
  image:string,
  title: String,
  brand: String,
  price: String,
  category: String,
  description: String
  
}

interface handleProducts{
    onClickCards:Product
    onClickBack: () => void
}

    const EachCard: React.FC<handleProducts> = ({ onClickCards, onClickBack}) => {

  return (
   <div className='eachCard'>

        <div className='EachCard-Item'>     
          <div >
        <img  className='Card-Image' src={require(`../../src/Images/${onClickCards.image}`)} alt="imagerrrr" />
        </div>
            <div>
              <p><b>Title:</b>{onClickCards.title}</p>
              <p><b> brand:</b>{onClickCards.brand}</p>
              <p><b>category:</b>{onClickCards.category}</p>
              <button onClick={onClickBack}>Back</button>
            </div>
        </div>
    </div>
  )
}

export default EachCard