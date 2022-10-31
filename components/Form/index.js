import React, { Component } from 'react'
import Joi from 'joi-browser'
import { Button, Grid, TextField } from '@material-ui/core'
import { toast } from 'react-toastify';
class Form extends Component {
    state = {
        name: '',
        phone: '',
        email: '',
        address: '',
        description: '',
        error: {}
    }

    schema = {
        email: Joi.string().email({ minDomainAtoms: 2 }).required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    case "string.email":
                        err.message = 'email mast be A Valid Email';
                        break;
                    default:
                        err.message = 'email can not be empity';
                        break;
                }
            });
            return errors;
        }),
        phone: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'phone can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        name: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'name can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        description: Joi.string().required().error(errors => {
            errors.forEach(err => {
                switch (err.type) {
                    default:
                        err.message = 'description can not be Empity';
                        break;
                }
            });
            return errors;
        }),
        address: Joi.string(),
    }
    changeHandler = event => {
        const error = { ...this.state.error };
        const errorMassage = this.validationProperty(event);
        if (errorMassage) {
            error[event.target.name] = errorMassage;
        } else {
            delete error[event.target.name];
        }
        this.setState({
            [event.target.name]: event.target.value,
            error
        })
    };
    handleChange = (value) => {
        this.setState({
            country: value
        })
    };

    validationProperty = event => {
        const Obj = { [event.target.name]: event.target.value };
        const schema = { [event.target.name]: this.schema[event.target.name] }
        const { error } = Joi.validate(Obj, schema);
        return error ? error.details[0].message : null
    };

    validate = () => {
        const options = { abortEarly: false }
        const form = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            description: this.state.description,
        }
        const { error } = Joi.validate(form, this.schema, options)
        if (!error) return null;

        const errors = {};
        for (let item of error.details) errors[item.path[0]] = item.message
        return errors;
    };

    submitHandler = event => {
        event.preventDefault()
        const error = this.validate();
        if (error) {
            this.setState({
                error: error || {}
            })
        } else {
            this.setState({
                name: '',
                phone: '',
                email: '',
                address: '',
                description: '',
            })
            toast.success('Please check Consol log')
        }
    }

    render() {

        const options = [
            { level: 'Family Law', value: 'family law' },
            { level: 'Criminal Law', value: 'criminal law' },
            { level: 'Business Law', value: 'business law' },
            { level: 'Personal Injury', value: 'personal injury' },
            { level: 'Education Law', value: 'education law' },
            { level: 'Drugs Crime', value: 'drugs crime' },
        ]

        return (
            <form onSubmit={this.submitHandler} className='contactForm'>
                <Grid container spacing={4}>
                    <Grid item sm={6} xs={12}>
                        <Grid className="formInput">
                            <input
                                placeholder="Your Name"
                                value={this.state.name}
                                name="name"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="text" />
                            {this.state.error.name && <p>{this.state.error.name}</p>}
                        </Grid>

                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Grid className="formInput">
                            <input
                                placeholder="Phone"
                                value={this.state.phone}
                                name="phone"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="phone" />
                            {this.state.error.phone && <p>{this.state.error.phone}</p>}
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Grid className="formInput">
                            <input
                                placeholder="Email"
                                value={this.state.email}
                                name="email"
                                onChange={this.changeHandler}
                                className="form-control"
                                type="email" />
                            {this.state.error.email && <p>{this.state.error.email}</p>}
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Grid className="formInput">
                            {this.props.addressInfo ? (
                                <Grid className="formInput">
                                    <input
                                        placeholder="Address"
                                        value={this.state.address}
                                        name="address"
                                        onChange={this.changeHandler}
                                        className="form-control"
                                        type="address" />
                                </Grid>
                            ) : (
                                    <select
                                        value={this.state.address}
                                        className="form-control"
                                        onChange={this.changeHandler}
                                        name="address">
                                        {options.map(option => (
                                            <option
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.level}
                                            </option>
                                        ))}
                                    </select>
                                )}

                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Grid className="formInput">
                            <textarea
                                className="form-control"
                                value={this.state.description}
                                onChange={this.changeHandler}
                                placeholder="Case Description..."
                                name="description" />
                            {this.state.error.description && <p>{this.state.error.description}</p>}
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Button type="submit">Appointment</Button>
                    </Grid>
                </Grid>
            </form>
        )
    }
}
export default Form