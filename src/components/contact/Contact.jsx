import { FaPhone, FaUser } from "react-icons/fa";
import css from "./Contact.module.css"

const Contact = ({id, name, number, onDelete}) =>{
    return(
        
            <li className = {css.contactItem}>
                <div className={css.contactInfo}>
                <span><FaUser/>{name}</span>
                <span><FaPhone  />{number}</span>
                </div>
                
                <button className={css.deleteBtn} onClick={()=>onDelete(id)}>Delete</button>
            </li>
    
    );
}
export default Contact;
