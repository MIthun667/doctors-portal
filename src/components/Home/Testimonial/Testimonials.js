import { Container } from '@mui/material';
import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Testimonail from './Testimonial';


const testimonials = [
    {
        name: 'Winson Harry',
        photo: people1,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, iusto ullam dolor at et hic cum dicta quo. Voluptates quia, quae odit vitae omnis odio assumenda eius facilis atque ipsam quidem porro, libero distinctio! Labore magni laboriosam unde, eaque, commodi tenetur asperiores numquam nobis sequi consequatur voluptatum, sint fuga repudiandae"
    },
    {
        name: 'Winson Harry',
        photo: people2,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, iusto ullam dolor at et hic cum dicta quo. Voluptates quia, quae odit vitae omnis odio assumenda eius facilis atque ipsam quidem porro, libero distinctio! Labore magni laboriosam unde, eaque, commodi tenetur asperiores numquam nobis sequi consequatur voluptatum, sint fuga repudiandae"

    },
    {
        name: 'Winson Harry',
        photo: people3,
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, iusto ullam dolor at et hic cum dicta quo. Voluptates quia, quae odit vitae omnis odio assumenda eius facilis atque ipsam quidem porro, libero distinctio! Labore magni laboriosam unde, eaque, commodi tenetur asperiores numquam nobis sequi consequatur voluptatum, sint fuga repudiandae"

    }
]
console.log(testimonials);

const Testimonials = () => {
    return (
        <Container>
            <Typography variant='h6' sx={{ color: '#5ce7ed', fontWeight: 400 }}>
                Testimonial
            </Typography>
            <Typography variant='h3' sx={{ color: '#Black', fontWeight: 500 }}>
                What's Our Patients <br />
                Says
            </Typography>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    testimonials.map(testimonial => <Testimonail
                        key={testimonial.name}
                        testimonial={testimonial}
                    ></Testimonail>)
                }
            </Grid>
        </Container>
    )
}

export default Testimonials