
import Faqdata from './Faq.json';

export const FaqHome =()=>{
 
    return(
        

        <>
        
       <section className="py-12 px-44 flex flex-col gap-4 items-start text-main-800 ">
       <h1 className="text-6xl mx-9 font-oswald font-extrabold">FAQ</h1>
        <h2 className="text-2xl ">Here are some questions and answer that might help you out understand better how to use TaskOperator</h2>
    
        <div className="gap-3 px-5 py-3 my-3 rounded">
            {Faqdata.map((faq,index)=>(

            <div key={index} className="flex flex-col bg-main-200 gap-3 py-4 px-4 my-5 rounded-3xl ">
            <h3 className="bg-secondary-50  text-xl font-poppins font-extrabold rounded-3xl px-0.5">Question: {faq.question}</h3>
            <p className="bg-secondary-50   text-lg rounded-3xl px-0.5">Answer : {faq.answer}</p>
            </div>

           ))} 
        
        </div>

       </section>
        
        
        
        </>
    )
};