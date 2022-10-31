import React, { Fragment } from 'react'
import Head from 'next/head'
import { Grid } from '@material-ui/core'
import Breadcumb from '../../components/Breadcumb'
import NewsLetter from '../../components/Newsletter'
import CetagorySidebar from '../../components/CetagorySidebar'
import BannerSidebar from '../../components/BannerSidebar'
import SingleContentArea from '../../components/SingleContentArea'


const services = [
    {
        title: 'Family Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        image: '/images/studies/1.jpg',
        id: 1,
        featured: ["The master-builder of human happiness.",
            "Occasionally circumstances occur", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure", "who do not know how to pursue pleasure", "which of us ever undertakes", "To take a trivial example"],
        subtitle: 'Family Law Organizations',
        avatarImg: '/images/studies/5.jpg',
    },
    {
        title: 'Personal Injury',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        image: '/images/studies/2.jpg',
        id: 2,
        featured: ["The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure", "who do not know how to pursue pleasure", "which of us ever undertakes", "To take a trivial example"],
        subtitle: 'Personal Injury Organizations',
        avatarImg: '/images/studies/4.jpg',
    },
    {
        title: 'Business Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        image: '/images/studies/3.jpg',
        id: 3,
        featured: ["which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure", "To take a trivial example"],
        subtitle: 'Business Law Organizations',
        avatarImg: '/images/studies/3.jpg',
    },
    {
        title: 'Criminal Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        image: '/images/studies/4.jpg',
        id: 4,
        featured: ["To take a trivial example", "which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure",],
        subtitle: 'Criminal Law Organizations',
        avatarImg: '/images/studies/2.jpg',
    },
    {
        title: 'Education Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        image: '/images/studies/5.jpg',
        id: 5,
        featured: ["To take a trivial example", "which of us ever undertakes", "The of human happiness.", "in which toil and pain", "Avoids pleasure itself,", "because it is pleasure",],
        subtitle: 'Education Law Organizations',
        avatarImg: '/images/studies/1.jpg',
    },
    {
        title: 'Real Estate Law',
        content: 'It is a long established fact that a reader will be distracted by the readable content of ',
        image: '/images/studies/6.jpg',
        id: 6
    },
]

function getPostDataById(id) {
    for (let i = 0; i < services.length; i++) {
        if (services[i].id === parseInt(id)) {
            return services[i];
        }
    }
}

const ServiceDetails = ({ id }) => {
    const service = getPostDataById(id);
    const breadcumbMenu = [
        { name: 'Home', route: '/' },
        { name: 'Practice', route: '/practice' },
        { name: service.title }
    ]
    return (
        <Fragment>
            <Head>
                <title>Service {service.title}</title>
            </Head>
            <Breadcumb
                title={service.title}
                breadcumbMenu={breadcumbMenu}
                background='/images/breadcumb/1.jpg'
            />
            <Grid className="singleArea ptb100">
                <Grid container spacing={4} className="container">
                    <Grid item md={4} xs={12}>
                        <aside className="pr25">
                            <BannerSidebar
                                image="/images/practice/2.jpg"
                            />
                            <CetagorySidebar
                                title="Category"
                            />
                        </aside>
                    </Grid>
                    <Grid item md={8} xs={12}>
                        <SingleContentArea
                            image="/images/practice/3.jpg"
                            avatar={true}
                            service={service}
                        />
                    </Grid>
                </Grid>
            </Grid>
            <NewsLetter
                className="newsLetterArea"
            />
        </Fragment>
    );
}
export default ServiceDetails

ServiceDetails.getInitialProps = async ({ query }) => {
    const { id } = query;
    return { id };
};