import React from 'react';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles({            // PCサイズとスマホサイズでUIを切り替える
   root: {

   }
})

const RestaurantList = (props) => {
  const classes = useStyles();
  const restaurants = props.restaurants.map((restaurant) => {
     return (
        <div className={classes.root}>
         {restaurant.name}
        </div>
     );
  });
  return(
     <div>
       {restaurants}
     </div>
  );
};

export default RestaurantList;