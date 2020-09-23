import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Categories, SortPopup, PizzaBlock } from '../../components'
import { setCategory } from '../../redux/actions/filters'

const Main = () => {
  const items = useSelector(({ pizzas }) => pizzas.items)
  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="content__top">
        <Categories onClickItem={(name) => console.log(name)} items={[
          "Мясные",
          "Вегетарианская",
          "Гриль",
          "Острые",
          "Закрытые"
        ]} />
        <SortPopup items={[
          { name: "популярности", type: 'popular' },
          { name: "цене", type: 'price' },
          { name: "алфавиту", type: 'alphabet' }
        ]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items && items.map(obj => <PizzaBlock key={obj.id} {...obj} />)
        }
      </div>
    </div>
  )
}

export default Main
