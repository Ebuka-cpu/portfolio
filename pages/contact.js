import Circle from "../components/Circle";
import style from "../styles/Contact.module.css";
import emailjs from "@emailjs/browser";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
// import axios from "axios";
// import { useRouter } from "next/router";

const easing = [0.6, -0.05, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: easing,
    },
  },
};
const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

//FIRST THING IS DESTRUCTURING THE INITIAL VALUES
// SECOND IS DEFINING OUR USESTATE
//GOTO THE INPUT FILEDS AND BIND THE VALUES
//GETTING THE VALUES USERS ENTERED IN THE INPUT FIELD AND DEFINING THE FUNCTION
//SUBMITTING THE FORM WHEN SUBMIT BUTTON IS CLICKED

const Contact = () => {
  const form = useRef();
  const initialValues = { name: "", email: "", message: "" };     
  const [formValues, setFormValues] = useState(initialValues);    
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
     
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_USER_ID)
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
     });
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a value Email address";
    }
    if (!values.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  return (
    <motion.div variants={stagger}>
    <motion.div variants={fadeInUp} exit={{opacity: 0}} initial="initial" animate="animate" transition={{delay: 0.2}}  className={style.container}>
      {/* <Circle
        backgroundColor="yellow"
        right="-30vh"
        bottom="-60vh"
        className={style.circle}
      /> */}
      <div className={style.left}>
        <div className={style.card}>
          <h1 className={style.title}>Contact Info</h1>
          <div className={style.contactDetail}>
            <span className={style.detail}>
              <strong>Gmail: </strong>ebukaanyaegbu7@gmail.com
            </span>
            <br />
            <span className={style.detail}>
              <strong>Phone: </strong>+234 0703 617 6131
            </span>
            <br />
            <span className={style.detail}>
              <strong>LinkedIn: </strong>linkedin.com/in/ebuka-anyaegbu
            </span>
            <br />
            <span className={style.detail}>
              <strong>Twitter: </strong>@anyaegbu_ebuka
            </span>
            <br />
          </div>
        </div>
      </div>
      <div className={style.right}>
        <h1 className={style.title}>Get in Touch</h1>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className={style.sent}>Message Submitted</div>
      ) : (
        null
      )}
        <form className={style.form} ref={form} onSubmit={sendEmail}>
          <input
            className={style.inputS}
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            className={style.inputS}
            type="text"
            placeholder="Phone"
            id="phone"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
          />
          <p className={style.error}>{formErrors.name}</p>

          <input
            className={style.inputL}
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          <p className={style.error}>{formErrors.email}</p>
          <textarea
            className={style.textArea}
            type="text"
            rows={6}
            placeholder="Message"
            id="message"
            name="message"
            value={formValues.message}
            onChange={handleChange}
          />
          <p className={style.error}>{formErrors.message}</p>
          <button className={style.button}>SUBMIT</button>
        </form>
      </div>
    </motion.div>
    </motion.div>
  );
};

export default Contact;
