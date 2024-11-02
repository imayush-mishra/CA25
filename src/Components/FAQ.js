import React from 'react'
import "./FAQStyles.css"
const FAQ = () => {
    return (
        <div>
            <div class="box">
                <p class="heading">FAQs</p>
                <div class="faqs">
                    <details>
                        <summary className='sub-heading'>How can I register?</summary>
                        <div className='box-faq'>
                        <p class="text-here">To register click on the register button</p>
                        </div>
                    </details>
                    <details>
                        <summary className='sub-heading'>What is the selection procedure?
                        </summary>
                        <div className="box-faq">
                        <p class="text-here">You will be selected on the basis of your application and seeing your enthusiasm & interest in programme</p>
                        </div>
                    </details>
                    <details>
                        <summary className='sub-heading'>What kind of work am I required to do?</summary>
                        <div className="box-faq">
                        <p class="text-here">You can check the responsibilities section of the brochure. Further, you will be notified about the tasks and events on suitable platforms</p>
                        </div>
                    </details>
                    <details>
                        <summary className='sub-heading'>Who is eligible for the program?</summary>
                        <div className="box-faq">
                        <p class="text-here">Any college student having interest in entrepreneurship and leadership can join the program</p>
                        </div>
                    </details>
                    <details>
                        <summary className='sub-heading'>How will I know about tasks that I would be assigned?</summary>
                        <div className="box-faq">
                        <p class="text-here">Once you are selected for the program you will be on boarded properly and will be provided with all necessary information</p>
                        </div>
                    </details>
                </div>
            </div>
        </div>
    )
}

export default FAQ