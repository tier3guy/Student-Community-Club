import Subject from './SubjectsWise';
import Accordion from './Accordian';

export default function IT(){
  return(
    <>
      <h1 style = {{textAlign: "center"}}>Information Technology</h1>
      <h2 className = "syllabus_link"> <a rel = "noreferrer" href = "https://www.nit.ac.in/pdf/it-ug-18.pdf" target = "_blank"> SYLLABUS </a> </h2>
      <div className = "subjects">
        <div className = 'accordion'>
          <div id = 'items'>
              {
                  Subject.map((currElement) => {
                      return <Accordion
                              subject = {currElement.subject}
                              key = {currElement.id}
                              content = {currElement.content}
                      />
                  })
              }
          </div>
        </div>
      </div>
    </>
  );
}