import clonergram from './assets/clonergram.PNG';
import blog from './assets/blog.PNG';
import musicThingy from './assets/music-thingy.gif'
import parcelReceiver from './assets/parcelReceiver.PNG'

const projects = [
    {
        image: {
          image: clonergram,
          alt: 'this is a screenshot of the clonergram app'
        },
        title: 'Clonergram',
        description: 'An Instagram Clone',
        links: {
            source: 'https://github.com/mpleines/clonergram',
            demo: 'https://wizardly-bose-04d5eb.netlify.com/'
        }
    },
    {
        image: {
          image: blog,
          alt: 'this is a screenshot of my personal blog'
        },
        title: 'The DevShip',
        description: 'My own personal blog - it also includes a dark mode!',
        links: {
            source: 'https://github.com/mpleines/blog',
            demo: 'https://optimistic-bhaskara-a30de8.netlify.com/'
        }
    },
    {
    image: {
        image: parcelReceiver,
            alt: 'this is a gif of the ParcelReceiver project'
        },
        title: 'ParcelReceiver',
        description: 'Application for tracking your delivered and received parcel´s',
        links: {
            source: 'https://github.com/mpleines/parcelReceiver',
            demo: 'https://parcelreceiver.firebaseapp.com/'
        }
    },
    {
        image: {
            image: parcelReceiver,
                alt: 'this is a gif of the ParcelReceiver project'
            },
            title: 'ParcelReceiver',
            description: 'Application for tracking your delivered and received parcel´s',
            links: {
                source: 'https://github.com/mpleines/parcelReceiver',
                demo: 'https://parcelreceiver.firebaseapp.com/'
            }
        },
        {
            image: {
                image: parcelReceiver,
                    alt: 'this is a gif of the ParcelReceiver project'
                },
                title: 'ParcelReceiver',
                description: 'Application for tracking your delivered and received parcel´s',
                links: {
                    source: 'https://github.com/mpleines/parcelReceiver',
                    demo: 'https://parcelreceiver.firebaseapp.com/'
                }
            },
            {
                image: {
                    image: parcelReceiver,
                        alt: 'this is a gif of the ParcelReceiver project'
                    },
                    title: 'ParcelReceiver',
                    description: 'Application for tracking your delivered and received parcel´s',
                    links: {
                        source: 'https://github.com/mpleines/parcelReceiver',
                        demo: 'https://parcelreceiver.firebaseapp.com/'
                    }
                }
]
export default projects;