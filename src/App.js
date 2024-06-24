
import bird1 from './assets/images/bird1.jfif'
import bird2 from './assets/images/bird2.jfif'
import bird3 from './assets/images/bird3.jfif'
import bird4 from './assets/images/bird4.jfif'
import bird5 from './assets/images/bird5.jfif'
import bird6 from './assets/images/bird6.jfif'
import bird7 from './assets/images/bird7.jfif'
import bird8 from './assets/images/bird8.jfif'
import Bird from './components/Bird'


var birds = [
    {
        image: bird1,
        name: "Jay"
    },
    {
        image: bird2,
        name: "Flamingo"
    },
    {
        image: bird3,
        name: "Peacock"
    },
    {
        image: bird4,
        name: "Eagle"
    },
    {
        image: bird5,
        name: "Sparrow"
    },
    {
        image: bird6,
        name: "Parrot"
    },
    {
        image: bird7,
        name: "Chicken"
    },
    {
        image: bird8,
        name: "Dove"
    }
]

function App() {
    return (
        <div>
            <h1>Image Gallery</h1>
            <div className="boxes">
                {birds.map(function (item) {
                    return (<Bird image={item.image} birdname={item.name}></Bird>
                    )
                })}
            </div>
            
        </div>)
}
export default App


