import 'date-fns';
import React, { useContext, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { UserContext } from '../../App';
import { useForm } from "react-hook-form";
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Header from '../Header/Header';
import { useHistory, useLocation } from 'react-router';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'block',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

const PlaceOrder = () => {
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const classes = useStyles();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = data => {
        const orderData = {
            name: data.name,
            email: data.email,
            price: data.price,
            time: { selectedDate }.selectedDate,
            productName: data.productName,
            productWeight: data.productWeight
        };
        console.log(orderData);
        const url = `https://young-garden-33771.herokuapp.com/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert("Your order Successfully")
                    history.replace(from);
                }
            })
    }
    return (
        <div>
            <Header></Header>
            <div className="mt-5 container">
                <form onSubmit={handleSubmit(onSubmit)} className={classes.container} noValidate>
                    <div class="mb-3">
                        <label>User Name</label><br/>
                        <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                    </div>
                    <br/>
                    <div class="mb-3">
                        <label>User Email</label><br/>
                        <input name="email" defaultValue={loggedInUser.email} ref={register} />
                    </div>
                    <br/>
                    <div class="mb-3">
                        <label>Product Name</label><br/>
                        <input name="productName" defaultValue={loggedInUser.productName} ref={register} />
                    </div>
                    <br/>
                    <div class="mb-3">
                        <label>Product Price</label><br/>
                        <input name="price" defaultValue={loggedInUser.price} ref={register} />
                    </div>
                    <br/>
                    <div class="mb-3">
                        <label>Product Weight</label><br/>
                        <input name="weight" defaultValue={loggedInUser.productWeight} ref={register} />
                    </div>

                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                            <KeyboardDatePicker
                                disableToolbar
                                variant="inline"
                                format="MM/dd/yyyy"
                                margin="normal"
                                id="date-picker-inline"
                                label="Date picker inline"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                            <KeyboardTimePicker
                                margin="normal"
                                id="time-picker"
                                label="Time picker"
                                value={selectedDate}
                                onChange={handleDateChange}
                                KeyboardButtonProps={{
                                    'aria-label': 'change time',
                                }}
                            />
                        </Grid>
                    </MuiPickersUtilsProvider>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;