/* eslint-disable object-curly-newline */
import React from 'react';
import {
  Button,
  CardContent,
  Grid,
  TextField,
  Modal,
  Typography
} from "@mui/material";
import { Formik } from 'formik';
import { reqSendEmail } from '../api';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  boxShadow: 24,
};

const ContactFormModal = ({ open, setOpen, }) => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <CardContent sx={style}>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            console.log(values);
            await reqSendEmail(values);
          }}
        >
          {({
            handleChange,
            handleSubmit,
            isSubmitting,
            values,
          }) => {
            return (
              <>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={2}>

                    <Grid item lg={12} md={12} xs={12}>
                      <Typography id="modal-modal-title" variant="h3" component="h2">
                        Send Me a Message!
                      </Typography>
                    </Grid>

                    <Grid item lg={6} md={6} xs={6}>
                      <TextField
                        fullWidth
                        label="First Name"
                        name="firstName"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item lg={6} md={6} xs={6}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        name="lastName"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item lg={12} md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        required
                        onChange={handleChange}
                        value={values.title}
                      />
                    </Grid>

                    <Grid item md={12} xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        onChange={handleChange}
                        required
                        value={values.description}
                        variant="outlined"
                        multiline
                        rows={15}
                      />
                    </Grid>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        onClick={() => {
                          setOpen(false);
                        }}
                      >
                        Cancel
                      </Button>
                    </Grid>

                    <Grid item>
                      <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        Send
                      </Button>
                    </Grid>

                  </Grid>
                </form>
              </>
            );
          }}
        </Formik>
      </CardContent>
    </Modal>
  );
};

export default ContactFormModal;
