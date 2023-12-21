
import './List.css';

const List = ({title, items}) => {
  return (
    <div className='list'>
      <div className='list__title'>
        {title}
      </div>
      <ul className='list__ul'>
        {items.map(({item}, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
    </div>
  )
}
export default List;