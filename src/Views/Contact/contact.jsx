import React from "react"
// import emailjs from '@emailjs/browser'; 
import { useState,useEffect } from "react";
import "./contact.css"
import ContactService from "../../Services/ContactService";



function ContactUs () {
  
  const initialValues = {
    nom: "",
    sujet: "",
    num_tel1: "",
    email: "",
    message: "",
  }

  const [formErrors, setFormErrors] = useState({})

  const [isSubmit, setIsSubmit] = useState(false)

  const [data, setData] = useState({initialValues})
  const onchange =(e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }



  const create = (e) => {
    e?.preventDefault()
    setFormErrors(validate(data));
    setIsSubmit(true)
      ContactService.create(data).then(res => {
        console.log("response >>>>", res)
        setData(res.data.data)
        window.location="/"
      }).catch(err => {
        console.log(err)
      })
  
    }

    useEffect(() => {
      create()
    }, [])
  //   emailjs.sendForm('service_mg9bnqh', 'template_djwpswn', e.target, 'BLCpD1JwpJ6qQDrPR')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  //     e.target.reset();
  //     showResult(true)
  useEffect(() => {
    console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(data)
    }
  }, [formErrors]
  )

  const validate = (values) => {
    const errors = {}

    if (!values.nom) {
      errors.nom = "Nom est requis!"
    }
    if (!values.sujet) {
      errors.sujet = "Sujet est requis!"
    }
    if (!values.num_tel1) {
      errors.num_tel1 = "Numéro tel1 est requis!"
    }
    if (!values.email) {
      errors.email = "Email est requis!"
    }
    
    if (!values.message) {
      errors.message = "Message est requis!"
    }


    return errors;
  }

    return(
    <>
    {/* Start Contact */}
    <section id="contact-us" className="contact-us section">
      <div className="container">
        <div className="contact-head">
          <div className="row">
            <div className="col-lg-8 col-12">
              <div className="form-main">
                <div className="title">
                  <h4>Entrer en contact</h4>
                  <h3>Écrivez-nous un message</h3>
                </div>
                <form className="form" action="" >
                  <div className="row">
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre nom<span>*</span></label>
                        <input  name="nom" type="text" required="true" placeholder onChange={onchange}/>
                        <p className='errorrequired'>{formErrors.nom}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre sujet<span>*</span></label>
                        <input name="sujet" type="text" required="true" placeholder onChange={onchange} />
                        <p className='errorrequired'>{formErrors.sujet}</p>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group">
                        <label>Votre Email<span>*</span></label>
                        <input name="email" type="email" required="true" placeholder onChange={onchange} />
                        <p className='errorrequired'>{formErrors.email}</p>
                      </div>	
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="form-group" >
                        <label>Votre numéro de téléphone<span>*</span></label>
                        <input name="num_tel1" type="number" required="true" className="fa fa-phone" placeholder onChange={onchange} />
                        <p className='errorrequired'>{formErrors.num_tel1}</p>
                      </div>	
                    </div>
                    <div className="col-12">
                      <div className="form-group message">
                        <label>Votre message<span>*</span></label>
                        <textarea name="message" required="true" placeholder defaultValue={""} onChange={onchange}/>
                        <p className='errorrequired'>{formErrors.message}</p>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="btnplacé">
                      <div className="form-group button">
                        <button type="submit" className="btn1 " onClick={create} >Envoyer un message</button>
                      </div>
                      </div>
                    </div>
                    {/* <span className="rakah">* Ce champ est obligatoire</span> */}
                  </div>
                </form>
                
              </div>
            </div>
            <div className="col-lg-4 col-12">
              <div className="single-head">
                <div className="single-info">
                  <i className="fa fa-phone" />
                  <h4 className="title">Appelez-nous maintenant :</h4>
                  <ul>
                    <li>+216 98 260 060</li>
                    <li>+216 97 342 942</li>
                  </ul>
                </div>
                <div className="single-info">
                  <i className="fa fa-envelope-open" />
                  <h4 className="title">Email:</h4>
                  <ul>
                    <li><a href="mailto:chicwatch1@gmail.com">chicwatch1@gmail.com</a></li>
                    <li><a href="mailto:azizbna20@gmail.com">azizbna20@gmail.com</a></li>
                  </ul>
                </div>
                <div className="single-info">
                  <i className="fa fa-location-arrow" />
                  <h4 className="title">Notre adresse :</h4>
                  <ul>
                    <li>Rue Victor Hugo, Sousse</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*/ End Contact */}
    
    
    
    </>
    )
    }
    export default ContactUs