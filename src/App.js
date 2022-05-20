import './categories.style.scss';
import CategoryItem from './components/category-item/category-item.component';

function App() {
  const categories = [
    {
      "id": 1,
      "title": 'Sweaters',
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png"
    },
    {
      id: 2,
      title: 'Jackets',
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png"
    },
    {
      id: 3,
      title: 'Sneakers',
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png"
    },
    {
      id: 4,
      title: 'Womens',
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png"
    },
    {
      id: 5,
      title: 'Mens',
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png"
    },
   { 
     id: 6,
      title: 'Girls',
      imageUrl: 'https://www.gapfactory.com/Asset_Archive/GFWeb/content/0029/021/093/assets/GIRLS_DESKTOP_12.jpg?v=2'
    },
    {
      id: 7,
      title: 'Boys',
      imageUrl: 'https://www.gapfactory.com/Asset_Archive/GFWeb/content/0029/021/096/assets/BOYS_DESKTOP_5.jpg?v=2'
    },
    {
      id: 8,
      title: 'Jeans',
      imageUrl: 'https://www2.assets-gap.com/webcontent/0022/961/294/cn22961294.jpg'
    },
  ];

  return (
    <div className='categories-container'>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
