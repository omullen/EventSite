import moment from 'moment'

const products = [
    {
        _id: '1',
        name: 'Walk of Fame Walking Tour',
        image: '/images/hollywood.jpg',
        description:
            'Walk the Walk of Fame with a renowned Hollywood historian!',
        price: 15,
        countInStock: 50,
        attending: 50,
        date: moment("20230914").hours(17).format('MMMM Do YYYY, h:mm'),
    },
    {
        _id: '2',
        name: 'Halloween Haunted House',
        image: '/images/hauntedhouse.jpg',
        description:
            'Explore a real haunted house at this festive spooktacular and maybe meet some ghastly ghosts!',
        price: 25,
        countInStock: 25,
        attending: 75,
        date: moment("20231031").hours(23).format('MMMM Do YYYY, h:mm'),
    },
    {
        _id: '3',
        name: 'BARBIE BLOCK PARTY!!',
        image: '/images/barbieparty.jpg',
        description:
            'Party with Barbie! Dress code: pink!',
        price: 75,
        countInStock: 0,
        attending: 100,
        date: moment("20231111").hours(13).format('MMMM Do YYYY, h:mm'),
    },
]

export default products