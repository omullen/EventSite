import moment from 'moment'

const events = [
    {
        _id: '1',
        name: 'Walk of Fame Walking Tour',
        image: '/images/hollywood.jpg',
        description:
            'Walk the Walk of Fame with a renowned Hollywood historian!',
        price: 15,
        countInStock: 1,
        attending: 49,
        date: moment("20230917").hours(17).format('MMMM Do YYYY, h:mm'),
        cal: moment("20230917").hours(17).calendar(),
    },
    {
        _id: '2',
        name: 'Halloween Haunted House',
        image: '/images/hauntedhouse.jpg',
        description:
            'Explore a real haunted house at this festive spooktacular and maybe meet some ghastly ghosts!',
        price: 25,
        countInStock: 4,
        attending: 71,
        date: moment("20231031").hours(23).format('MMMM Do YYYY, h:mm'),
        cal: moment("20231031").hours(23).calendar(),
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
        cal: moment("20231111").hours(13).calendar(),
    },
    {
        _id: '4',
        name: 'Classical Music Festival',
        image: '/images/classicalmusic.jpg',
        description:
            'Beethoven, Bach, Brahms, Tchaikovsky - all in one place! Join us for a day of utter refinement!',
        price: 20,
        countInStock: 20,
        attending: 80,
        date: moment("20231123").hours(13).format('MMMM Do YYYY, h:mm'),
        cal: moment("20231123").hours(13).calendar(),
    },
]

export default events