import React from 'react'
import s from './ProfileDataForm.module.css'
import { Formik, Form, Field } from 'formik'


const ProfileDataForm = (  { profile, isOwner, onSubmit, gotoViewMode} ) => {
   
    return <div>
        <Formik

            initialValues={profile}

            onSubmit={(values,) => {
                onSubmit(values)
               
            }
            }
        >
 {({ touched }) => (
        
                <Form  >
                    

                        <div className={s.fullName}> Your Name: {profile.fullName}
                            <Field
                                name={'fullName'}
                                type={'text'}
                                placeholder={'Your Full Name'} />
                        </div>
                        {touched.fullName}



                        <div> About Me: {profile.aboutMe}
                            <Field
                                name={'aboutMe'}
                                type={'text'}
                                placeholder={'Tell us about yourself'} />
                        </div>
                        {touched.aboutMe}


                        <div>   Looking For A Job : 
                            <Field
                                name={'lookingForAJob'}
                                
                                type={'checkbox'}
                                placeholder={'Are you looking for a job?'} />
                        </div>
                        {touched.lookingForAJob}


                            <div>  My professional skills: {profile.lookingForAJobDescription}
                                <Field
                                    name={'lookingForAJobDescription'}
                                    type={'text'}
                                    placeholder={'Tell us about professional skills'} />
                            </div>
                            {/* } */}

                        {touched.lookingForAJobDescription}


                        <div> Contact GitHub: {profile.contacts.github}
                            <Field
                                name={'contacts.github'}
                                type={'text'}
                                placeholder={'Write your contacts on GitHub '} />
                        </div>
                        {touched.github}
                       

                        <div> Contact Vk: {profile.contacts.vk} 
                        <Field
                                name={'contacts.vk'}
                                type={'text'}
                                placeholder={'Write your contacts on Vk '} />
                        </div>
                        {touched.vk}
                        

                        <div> Contact Twitter: {profile.contacts.twitter}                             
                        <Field
                                name={'contacts.twitter'}
                                type={'text'}
                                placeholder={'Write your contacts on Twitter '} />
                        </div>
                        {touched.twitter}
                        

                        <div> Contact Instagram: {profile.contacts.instagram} 
                        <Field
                                name={'contacts.instagram'}
                                type={'text'}
                                placeholder={'Write your contacts on Instagram '} />
                        </div>
                        {touched.instagram}
                       



                    
                    
                    {isOwner && <div> <button className={s.button} type={'submit'}  > Save </button>
                    <button className={s.button}onClick={gotoViewMode}  > Cancel </button>
                     </div>
                    
                    }

                    
                    
                </Form>
                
            )}
        </Formik>
    </div>


}

export default ProfileDataForm;